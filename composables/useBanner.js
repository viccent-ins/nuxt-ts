import axios from "axios";
import { useStores } from '~/store/store';
import { storeToRefs } from "pinia";
export default function useBanner() {
    const { apiServer } = storeToRefs(useStores());
    const  menus = ref([]);
    const  banners = ref([]);
    const getTemplateData = async () => {
        // let that = this
        await axios.get(apiServer.value + '/index/template',{
            headers: {
                Platform: 'H5',
            }
        })
            .then(response => {
                let getTypeData = [];
                for (let i = 0; i < response.data.data.home.length; i++) {
                    getTypeData = response.data.data.home[i];
                    if (getTypeData.type === 'banner') {
                        banners.value = getTypeData.content.list;

                    }
                    if (getTypeData.type === 'menu') {
                        menus.value = getTypeData.content.list;
                    }
                }
            }).catch((error)=> {
                console.log(error);
            });

    }
    getTemplateData();
    return {
        menus,
        banners,
    }
}