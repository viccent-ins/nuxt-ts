import { useStores } from "~/store/store";
import { storeToRefs } from "pinia";
export default function useUserBuyActivity() {
    const stores = useStores();
    const { apiServer } = storeToRefs(useStores());
    const addToCart = (object: any) => {
        const { id, title, image, price, total } = object;
        let param = { 
            id,
            title,
            image,
            price,
            total,
            quantity:1,
        };
        stores.addToCart(param);


    };
    const removeCart = (param: any) => {
        stores.removeCart(param);
    };
    const increaseCartQty = (id: number) => {
        stores.increaseQty(id);
    };
    const decreaseCartQty = (id: number) => {
        stores.decreaseQty(id);
    };
    const compareProduct = (object: any) => {
        const { id, title, image, price, total } = object;
        let param = { 
            id,
            title,
            image,
            price,
            total,
            quantity:1,
        };
        stores.addCompareProduct(param);
    };
    return {
        addToCart,
        removeCart,
        compareProduct,
        increaseCartQty,
        decreaseCartQty
    }
}