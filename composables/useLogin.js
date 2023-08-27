import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
import axios from "axios";

export default function useLogin () {
    const isProcessing = ref(false);
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
                        // router.push("/");
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                })
        isProcessing.value = false;
    };
    return {
        login,
        loginRequest,
        isProcessing,
    }
};
