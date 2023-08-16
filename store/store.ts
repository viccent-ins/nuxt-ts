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