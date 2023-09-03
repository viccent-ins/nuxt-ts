import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function useUserAgreement() {
    const {apiServer} = storeToRefs(useStores());
    const userAgreement = ref([]);
    const getUserAgreementData = async () => {
        await axios.get(apiServer.value + '/index/richtext?id=1')
            .then(response => {
                userAgreement.value = response.data.data;
                console.log( userAgreement.value)
            }).catch((error) => {
                console.log(error);
            });
    }
    getUserAgreementData ();
    return {
        userAgreement,
    }
}
