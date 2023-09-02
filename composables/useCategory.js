import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";
export default function useCategory() {
    const categories = ref([]);
    const { apiServer } = storeToRefs(useStores());
    const isLoading = ref(false);
    const getCategory = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/category?id=43')
            .then(response => {
                categories.value = response.data.data.children;
            }).catch((error)=> {
                console.log(error)
        });
        isLoading.value = false;
    }
    getCategory();
    return {
        categories,
        isLoading
    }
}
