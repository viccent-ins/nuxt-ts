import { a } from "vite-node/types-33f0e4ff";

interface IObject {
    id: number,
    title: string,
    image: string,
    price: number,
    total: string,
}
export default function useUserBuyActivity() {
    const Activities = reactive ({
        AddToCarts: <any>[],
        WishLists: <any>[],
        Compares: <any>[],
    })
    const addToCarts = ref<any>([]);
    const AddToCart = (object: any) => {
        // console.log('object', object);
        const {
            id, title, image, price, total,
        } = object;
        let param = {
            id,
            title,
            image,
            price,
            total,
            quantity: 1
        }
        const item = addToCarts.value.find((item:any) => Number(item.id) === param.id);
        console.log(item)
        if (item) {
            addToCarts.value[item] = param;
        } else {
            addToCarts.value.push(...[param]);
        }
        console.log(addToCarts.value)
    }
    return {
        AddToCart,
    }
}