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
    const stores = useStores();
    const { apiServer } = storeToRefs(stores);
    const errors = reactive({
        errorPhone: '',
        errorPassword: '',
    })
    const register = async () => {
        errors.errorPhone = '';
        errors.errorPassword = '';
        if (!registerRequest.mobile) {
            return errors.errorPhone = 'phone is required!';

        } else if (!registerRequest.password) {
            return errors.errorPassword = 'password is required!';
        }
        isProcessing.value = true;
        await axios.post(apiServer.value + "/user/register", registerRequest)
            .then((res) => {
                if (res.data.code === 1) {
                    ElNotification({
                        title: 'Register',
                        message: 'Register Successfully',
                        type: 'success',
                    });
                  stores.token = res.data.data.token;
                     router.push("/login");
                } else {
                    ElNotification({
                        title: 'Fail',
                        message: 'Registration fail',
                        type: 'error',
                    });
                }
            })
            .catch((err) => console.log("err", err));
        isProcessing.value = false;
    }
    return {
        registerRequest,
        isProcessing,
        register,
        errors,
    };
}
