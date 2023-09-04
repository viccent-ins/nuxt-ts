import { defineStore } from 'pinia';

export const useStores = defineStore('store', {
    state: () => {
      return {
        user: {
            id: 0,
            name: '',
            phone: '',
            created_at: '',
            updated_at: '',
        },
        locale: 'en',
        ip: '',
        authorisation: {
            token: '',
            type: '',
            expires_in: 0,
        },
        token: '',
        auth: false,
        server: 'http://127.0.0.1:8000/',
        addToCarts: [],
        compareProducts: [],
        addToWishlists: [],
      }
    },
    actions: {
      updateLocale(lang) {
        this.locale = lang;
      },
      updateAuthorisation(authorisation) {
        this.authorisation = authorisation;
      },
      removeAuthorisation(authorisation) {
        this.authorisation.token = authorisation;
        this.auth = false;
      },

      updateUser(user) {
        this.user = user;
      },
      updateAuth(auth) {
        this.auth = auth;
      },
      addToCart(param) {
        const item = this.addToCarts.find((item) => item.id === param.id);
        if (item) {
          item.quantity += 1;
        } else {
          this.addToCarts.push(param)
        }

      },
      addToWishlist(param) {
        const item = this.addToWishlists.find((item) => item.id === param.id);
        if (item) {
          item.quantity += 1;
        } else {
          this.addToWishlists.push(param)
        }

      },
      removeCart(elementId) {
        this.addToCarts = this.addToCarts.filter((item) => item.id !== elementId);
      },
      removeWishList(elementId) {
        this.addToWishlists = this.addToWishlists.filter((item) => item.id !== elementId);
      },
      increaseQty(id) {
        const item = this.addToCarts.find((item) => item.id === id);
        if (item) item.quantity += 1;
      },
      decreaseQty(id) {
        const item = this.addToCarts.find((item) => item.id === id);
        if (item.quantity > 1) item.quantity -= 1;
      },
      addCompareProduct(param) {
        const item = this.compareProducts.find((item) => item.id === param.id);
        if (item) return;
        let elements = this.compareProducts;
        if (elements.includes(param)) return;
        if (this.compareProducts.length > 2) return;
        this.compareProducts.push(param)
      },
      resetCompare() {
        this.compareProducts = [];
      },

    },
    getters: {
      userInfo: (state) => state.user,
      isAuth: (state) => {
        let auth = false;
        if (state.token) {
          auth = true;
        }
        return auth;
      },
      apiServer: (state) => {
        return 'https://sc2houduan.bitlandweb.com/addons/shopro';
      },
    },
    persist: {
      storage: persistedState.localStorage,
    },
  })