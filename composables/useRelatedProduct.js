import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";

export default function useRelatedProduct() {
    const relatedProducts = ref([]);
    const {apiServer} = storeToRefs(useStores());
    const isLoading = ref(false);
    const route = useRoute();
    const getRelatedProduct = async () => {
        const cat_ids = route.query.cat_ids;
        isLoading.value = true;
        await axios.get(apiServer.value + `/goods/lists?category_id=${cat_ids}`)
            .then(response => {
                relatedProducts.value = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getRelatedProduct();
    return {
        relatedProducts,
        isLoading
    }
}
