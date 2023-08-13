import { useApiBridge } from "~/axios/axios";
import { IAxiosPromise } from '@/models/axiosPromise';
import { IAuthorisation, IAuthorizationResponse, ILogin, ILoginResponse } from '@/models/auth/ILogin';
import { IRegisterRequest, IRegisterResponse } from '@/models/auth/IRegisterRequest';
import IApiResponse from '@/models/apiResponse';
import { IUserResponse } from '@/models/auth/IUser';
import { useStores } from "~/store/store";

export default {
  async renewAxiosInstanceToken(authorisation: IAuthorisation) {
    const stores = useStores();
    await stores.updateAuthorisation(authorisation);
    navigateTo('/profile');
 },
    login: function(request: ILogin): IAxiosPromise<ILoginResponse> {
        const response = useApiBridge().instance.post(`login`, request);
        return response;
    },
    register(request: IRegisterRequest): IAxiosPromise<IRegisterResponse> {
        const response = useApiBridge().instance.post(`register`, request);
        return response;
    },
    logout(): IAxiosPromise<IApiResponse> {
        const response = useApiBridge().instance.post(`logout`);
        return response;
    },
    refreshToken(): IAxiosPromise<IAuthorizationResponse> {
        return useApiBridge().instance.get(`refresh`);
    },
    getUser(): IAxiosPromise<IUserResponse> {
        const response = useApiBridge().instance.get(`getUsers`);
        return response;
    },
};
