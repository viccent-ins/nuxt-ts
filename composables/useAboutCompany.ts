import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function useAboutCompany() {
    const {apiServer} = storeToRefs(useStores());
    const AboutUs = ref([]);
    const {isLoading, ruleFormRef} = useVariable();
    const getAboutCompanyDetails = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/index/richtext?id=3')
            .then(response => {
                AboutUs.value = response.data.data;
                console.log(AboutUs.value)
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getAboutCompanyDetails ();
    return {
        AboutUs,
        isLoading
    }
}
