import { useStores } from "~/store/store";
import { storeToRefs } from "pinia";
export default function useUserBuyActivity() {
    const stores = useStores();
    const addToCart = (object) => {
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
    const addToWishlist = (object) => {
        const { id, title, image, price, total } = object;
        let param = {
            id,
            title,
            image,
            price,
            total,
            quantity:1,
        };
        stores.addToWishlist(param);
    };
    const removeCart = (id) => {
        stores.removeCart(id);
    };
    const increaseCartQty = (id) => {
        stores.increaseQty(id);
    };
    const decreaseCartQty = (id) => {
        stores.decreaseQty(id);
    };

    const compareProduct = (object) => {
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
        decreaseCartQty,
        addToWishlist
    }
}