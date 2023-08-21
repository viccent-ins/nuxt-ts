import { reactive } from 'vue';
import useVariable from './useVariable';
import formHelper, { IRule } from '../libraries/elementUiHelpers/formHelper';
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";

import axios from "axios";

export default function useLogin () {
    const { isProcessing, ruleFormRef } = useVariable();
    const loginRequest = reactive({
        account: '',
        password: '',

    });
    const router = useRouter();
    const { apiServer } = storeToRefs(useStores());
    const login = async () => {
        isProcessing.value = true;
            await axios.post(apiServer.value +"/user/accountLogin", loginRequest)
                .then((response) => {
                    // redirect to Home page
                    localStorage.setItem("token", response.data.token);
                        router.push("/");
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                })
        isProcessing.value = false;
    };
    const validatePassword = (): string => {
        if (!(loginRequest.password.trim() === loginRequest.password)) {
            return 'White space not allow';
        }
        return '';
    };
    const rules: Record<string, IRule> = {
        phone: { required: true },
        password: { customRule: validatePassword, required: true },
    };
    const loginRule = formHelper.getRules(rules);
    const onLogin = formHelper.getSubmitFunction(login);
    return {
        loginRule,
        onLogin,
        ruleFormRef,
        loginRequest,
        isProcessing,
    }
};
