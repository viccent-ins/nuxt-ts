import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function useAboutCompany() {
    const {apiServer} = storeToRefs(useStores());
    const AboutUs = ref([]);
    const isLoading = ref(false);
    const getAboutCompanyDetails = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/index/richtext?id=3')
            .then(response => {
                AboutUs.value = response.data.data;
            }).catch((error) => {
            });
        isLoading.value = false;
    }
    getAboutCompanyDetails ();
    return {
        AboutUs,
        isLoading
    }
}
