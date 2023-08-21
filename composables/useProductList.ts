import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";

export default function useProductList() {
    const products = ref([]);
    const featureProducts = ref([]);
    const bestProducts = ref([]);
    const beautyHealthProducts = ref([]);
    const womenClothProducts = ref([]);
    const computerAccessoriesProducts = ref([]);
    const {apiServer} = storeToRefs(useStores());
    const {isLoading, ruleFormRef} = useVariable();

    const getProductList = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=69')
            .then(response => {
                products.value = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getProductList();
    const getFeaturedProductList = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/seckillList')
            .then(response => {
                featureProducts.value = response.data.data.data;

            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getFeaturedProductList();

    const getbestProducts = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=44&page=1')
            .then(response => {
                bestProducts.value = response.data.data.data;

            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getbestProducts();
    const getbeautyHealthProducts = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?page=1&goods_ids')
            .then(response => {
                beautyHealthProducts.value = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getbeautyHealthProducts();

    const getwomenClothProducts = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=73&page=1')
            .then(response => {
                womenClothProducts.value = response.data.data.data;

            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getwomenClothProducts();
    const getcomputerAccessoriesProducts = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=69&page=1')
            .then(response => {
                computerAccessoriesProducts.value = response.data.data.data;

            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getcomputerAccessoriesProducts();

    return {
        products,
        featureProducts,
        bestProducts,
        beautyHealthProducts,
        womenClothProducts,
        computerAccessoriesProducts,
        isLoading,
    }
}
