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
    const stores = useStores();
    const { apiServer } = storeToRefs(stores);
    const login = async () => {
        isProcessing.value = true;
            await axios.post(apiServer.value +"/user/accountLogin", loginRequest)
                .then((res) => {
                    console.log(res);
                    if (res.data.code === 1) {
                        stores.token = res.data.data.token;
                        ElNotification({
                            title: 'Login',
                            message: 'Login Successfully',
                            type: 'success',
                        })
                        router.push("/");
                    } else {
                        ElNotification({
                            title: 'Fail',
                            message: 'phone or password is incorrect!',
                            type: 'error',
                        })
                    }
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
