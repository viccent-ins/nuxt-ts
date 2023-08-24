import { defineStore } from 'pinia';
import IUser from '@/models/users/IUser';
import { IAuthorisation } from '@/models/auth/ILogin';

export const useStores = defineStore('store', {
    state: () => {
      return {
        user: {
            id: 0,
            name: '',
            email: '',
            created_at: '',
            updated_at: '',
        },
        locale: 'kh',
        ip: '',
        authorisation: {
            token: '',
            type: '',
            expires_in: 0,
        },
        auth: false,
        server: 'http://127.0.0.1:8000/',
        addToCarts: <any>[],
        compareProducts: <any>[],
      }
    },
    actions: {
      updateLocale(lang: string) {
          this.locale = lang;
      },
      updateAuthorisation(authorisation: IAuthorisation) {
        this.authorisation = authorisation;
      },
      removeAuthorisation(authorisation: string) {
        this.authorisation.token = authorisation;
        this.auth = false;
      },
  
      updateUser(user: IUser) {
        this.user = user;
      },
      updateAuth(auth: boolean) {
        this.auth = auth;
      },
      addToCart(param: any) {
        const item = this.addToCarts.find((item: any) => item.id === param.id);
        if (item) {
          item.quantity += 1;
        } else {
          this.addToCarts.push(param)
        };
        
      },
      removeCart(element: any) {
        return this.addToCarts.filter((item: any) => item.id !== element.id);
      },
      increaseQty(id: number) {
        const item = this.addToCarts.find((item: any) => item.id === id);
        if (item) item.quantity += 1;
      },
      decreaseQty(id: number) {
        const item = this.addToCarts.find((item: any) => item.id === id);
        if (item.quantity > 1) item.quantity -= 1;
      },
      addCompareProduct(param: any) {
        const item = this.compareProducts.find((item: any) => item.id === param.id);
        if (item) return;
        let elements = this.compareProducts;
        if (elements.includes(param)) return;
        if (this.compareProducts.length > 3)  return;
        this.compareProducts.push(param)
      },
      resetCompare () {
        this.compareProducts = [];
      }
    },
    
    getters: {
      userInfo: (state) => state.user,
      isAuth: (state) => {
        let auth = state.auth;
        if (state.authorisation.token) {
          auth = true;
        }
        return auth;
      },
      apiServer: (state) => {
        return 'https://sc2houduan.bitlandweb.com/addons/shopro';
      },
  
    },
    persist: true,
  })