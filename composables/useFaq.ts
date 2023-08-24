import axios from "axios";
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
export default function useFaq() {
    const {apiServer} = storeToRefs(useStores());
    const FrequentlyAskedQuestions = ref([])
    const getFrequentlyAskedData = async () => {

        await axios.get(apiServer.value + '/faq?page=1')
            .then(response => {
                FrequentlyAskedQuestions.value = response.data.data.data;
                console.log(FrequentlyAskedQuestions.value)
            }).catch((error) => {
                console.log(error);
            });

    }
    getFrequentlyAskedData ();
    return {
        FrequentlyAskedQuestions,
    }
}
