import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";

export default function useProductList() {
    const Data = reactive({
       Products: [],
       FeatureProducts: [],
       BestProducts: [],
       HealthProducts: [],
       WomenProducts: [],
       AccessoryProducts: [],
    });
    const {apiServer} = storeToRefs(useStores());
    const {isLoading, ruleFormRef} = useVariable();

    const getProductList = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=69')
            .then(response => {
                Data.Products = response.data.data.data;
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
                Data.FeatureProducts = response.data.data.data;
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
                Data.BestProducts = response.data.data.data;
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
                Data.HealthProducts = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getbeautyHealthProducts();

    const getWomenClothProducts = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=73&page=1')
            .then(response => {
                Data.WomenProducts = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getWomenClothProducts();
    const getcomputerAccessoriesProducts = async () => {
        isLoading.value = true;
        await axios.get(apiServer.value + '/goods/lists?category_id=69&page=1')
            .then(response => {
                Data.AccessoryProducts = response.data.data.data;
            }).catch((error) => {
                console.log(error);
            });
        isLoading.value = false;
    }
    getcomputerAccessoriesProducts();
    return {
        isLoading,
        Data,
    }
}
