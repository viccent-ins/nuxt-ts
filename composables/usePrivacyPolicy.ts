import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function usePrivacyPolicy() {
    const {apiServer} = storeToRefs(useStores());
    const privacyPolicy = ref([])
    const {isLoading, ruleFormRef} = useVariable();
    const getPrivacyPolicyData = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/index/richtext?id=2')
            .then(response => {
                privacyPolicy.value = response.data.data;
                console.log(privacyPolicy.value)
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getPrivacyPolicyData ();
    return {
        privacyPolicy,
        isLoading
    }
}
