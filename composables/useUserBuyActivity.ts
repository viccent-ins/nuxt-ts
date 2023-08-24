import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";

export default function useUserBuyActivity() {
    const stores = useStores();
    const { addToCarts } = storeToRefs(useStores());
    const AddToCart = (object: any) => {
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
    const removeIndex = (param: any) => {
        stores.removeCart(param);
    };
    const increaseQty = () => {

    };
    const decreaseQty = () => {

    };
    return {
        AddToCart,
        removeIndex,
    }
}