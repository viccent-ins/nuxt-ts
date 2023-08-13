import { IAxiosPromise } from '@/models/axiosPromise';
import ApiResponse from '@/models/apiResponse';
import { ILogin, ILoginResponse } from '@/models/auth/ILogin';
import apiCalling from './apiCalling';
import { IRegisterRequest, IRegisterResponse } from '@/models/auth/IRegisterRequest';
import IBaseResponse from '@/models/IBaseResponse';
import { IUserResponse } from '@/models/auth/IUser';

const getResponse = (response: IAxiosPromise) => response.then((value) => new ApiResponse(value.data)).catch((error) => new ApiResponse(error.data));
export default {
    register(request: IRegisterRequest): Promise<ApiResponse<IRegisterResponse>> {
        const response = getResponse(apiCalling.register(request));
        return response;
      },
    login(request: ILogin): Promise<ApiResponse<ILoginResponse>> {
        const response = apiCalling.login(request);
        return getResponse(response);
      },
    logout(): Promise<ApiResponse<IBaseResponse>> {
        const response = apiCalling.logout();
        return getResponse(response);
      },
    async refreshToken(): Promise<void> {
        const response = await apiCalling.refreshToken();
        apiCalling.renewAxiosInstanceToken(response.data.Data.Authorization);
      },
    getUsers(): Promise<ApiResponse<IUserResponse>>{
        const response = apiCalling.getUser();
        return getResponse(response);
    },
};
