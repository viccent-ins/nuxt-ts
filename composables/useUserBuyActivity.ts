import { useStores } from "~/store/store";

export default function useUserBuyActivity() {
    const stores = useStores();
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
    const removeCart = (param: any) => {
        stores.removeCart(param);
    };
    const increaseQty = (id: number) => {
        stores.increaseQty(id);
    };
    const decreaseQty = (id: number) => {
        stores.decreaseQty(id);
    };
    return {
        AddToCart,
        removeCart,
    }
}