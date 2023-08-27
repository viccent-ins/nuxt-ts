import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function useFaq() {
    const {apiServer} = storeToRefs(useStores());
    const FrequentlyAskedQuestions = ref([]);
    const {isLoading, ruleFormRef} = useVariable();
    const getFrequentlyAskedData = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/faq?page=1')
            .then(response => {
                FrequentlyAskedQuestions.value = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getFrequentlyAskedData ();
    return {
        FrequentlyAskedQuestions,
        isLoading
    }
}
