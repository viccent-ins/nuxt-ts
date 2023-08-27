import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";

export default function useSingleProduct() {
    const singleProduct = ref([]);
    const {apiServer} = storeToRefs(useStores());
    const route = useRoute();
    const isLoading = ref(false);
    const getSingleProduct = async () => {
        isLoading.value = true;
        const id = route.query.product_id;
        await axios.get(apiServer.value + `/goods/detail?id=${id}`)
            .then(response => {
                singleProduct.value = response.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getSingleProduct();
    return {
        singleProduct,
        isLoading
    }
}
