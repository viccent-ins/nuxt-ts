import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function useRegister() {
    const isProcessing = ref(false);
    const registerRequest = reactive({
        mobile: '',
        password: '',
        code: '1234',
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
    return {
        registerRequest,
        isProcessing,
        register
    };
}
