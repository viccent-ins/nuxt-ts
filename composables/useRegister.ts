import { reactive } from 'vue';
import useVariable from './useVariable';
import formHelper, { IRule } from '../libraries/elementUiHelpers/formHelper';
import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";

export default function useRegister() {
    const { isProcessing, ruleFormRef } = useVariable();
    const registerRequest = reactive({

        mobile: '',
        password: '',
        code: '',
    });
    const router = useRouter();
    const { apiServer } = storeToRefs(useStores());
    const register = async () => {
        isProcessing.value = true;
        await axios.post(apiServer.value + "/user/register", registerRequest)
            .then(() => {
                localStorage.setItem('users', JSON.stringify(registerRequest))
                // redirect to Login page
               router.replace("/login");


            })
            .catch((err) => console.log("err", err));
        isProcessing.value = false;
    }

    const validatePhone = (): string => {
        if (!(registerRequest.mobile.trim() === registerRequest.mobile)) {
            return 'White space not allow';
        }
        return '';
    };
    const validatePassword = (): string => {
        if (!(registerRequest.password.trim() === registerRequest.password)) {
            return 'White space not allow';
        }
        return '';
    };

    const rules: Record<string, IRule> = {
        mobile: { required: true },
        password: { customRule: validatePassword, required: true },
        code: { required: true },
    };
    const registerRule = formHelper.getRules(rules);
    const onRegister = formHelper.getSubmitFunction(register);
    return {
        registerRule,
        onRegister,
        ruleFormRef,
        registerRequest,
        isProcessing,
    };
}
