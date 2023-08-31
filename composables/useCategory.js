import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";
export default function useCategory() {
    const categories = ref([]);
    const { apiServer } = storeToRefs(useStores());
    const getCategory = async () => {
        await axios.get(apiServer.value + '/category?id=43')
            .then(response => {
                categories.value = response.data.data.children;
            }).catch((error)=> {
                console.log(error)
        });
    }
    getCategory();

    return {
        categories
    }
}
