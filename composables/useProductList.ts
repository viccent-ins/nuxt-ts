import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";
export default function useProductList() {
    const products = ref([]);
    const featureProducts = ref([]);
    const bestProducts= ref([]);
    const beautyHealthProducts= ref([]);
    const womenClothProducts= ref([]);
    const computerAccessoriesProducts= ref([]);
    const { apiServer } = storeToRefs(useStores());
    const getProductList = async () => {
     await axios.get(apiServer.value + '/goods/lists?category_id=69')
            .then(response => {
                products.value = response.data.data.data;

            }).catch((error)=> {
            console.log(error);
        });
    }
    getProductList();
    const getFeaturedProductList = async () => {
        await axios.get(apiServer.value + '/goods/seckillList')
            .then(response => {
                featureProducts.value = response.data.data.data;

            }).catch((error)=> {
                console.log(error);
            });
    }
    getFeaturedProductList();

    const getbestProducts = async () => {
        await axios.get(apiServer.value + '/goods/lists?category_id=44&page=1')
            .then(response => {
                bestProducts.value = response.data.data.data;

            }).catch((error)=> {
                console.log(error);
            });
    }
    getbestProducts();
       const getbeautyHealthProducts = async () => {
        await axios.get(apiServer.value + '/goods/lists?page=1&goods_ids')
            .then(response => {
                beautyHealthProducts.value = response.data.data.data;

            }).catch((error)=> {
                console.log(error);
            });
    }
    getbeautyHealthProducts();

    const getwomenClothProducts = async () => {
        await axios.get(apiServer.value + '/goods/lists?category_id=73&page=1')
            .then(response => {
                womenClothProducts.value = response.data.data.data;

            }).catch((error)=> {
                console.log(error);
            });
    }
    getwomenClothProducts();
    const getcomputerAccessoriesProducts = async () => {
        await axios.get(apiServer.value + '/goods/lists?category_id=69&page=1')
            .then(response => {
                computerAccessoriesProducts.value = response.data.data.data;

            }).catch((error)=> {
                console.log(error);
            });
    }
    getcomputerAccessoriesProducts();

    return {
        products,
        featureProducts,
        bestProducts,
        beautyHealthProducts,
        womenClothProducts,
        computerAccessoriesProducts,

    }
}
