import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";

export default function useCategoryDetails() {
    const categoryChildrens = ref([]);
    const {apiServer} = storeToRefs(useStores());
    const route = useRoute();
    const isLoading = ref(false);
    const getCategoryChildren = async () => {
        isLoading.value = true;
        const id = route.query.id;
        await axios.get(apiServer.value + `/goods/lists?category_id=${id}`)
            .then(response => {
                categoryChildrens.value = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getCategoryChildren();
    return {
        categoryChildrens,
        isLoading
    }
}
