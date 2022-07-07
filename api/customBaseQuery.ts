import API from 'utils/routes/api';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RootState } from 'store';
import { clearAuth, setUserAuth } from 'store/slices/auth';

const baseQuery = fetchBaseQuery({
  baseUrl: API.root,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access_token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const state = api.getState() as RootState;
    //@ts-ignore
    const refreshResult: QueryReturnValue<
      { access_token: string; refresh_token: string },
      FetchBaseQueryError,
      FetchBaseQueryMeta
    > = await baseQuery(
      {
        url: '/authserver/refreshtoken',
        method: 'post',
        body: { ...state.auth },
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      api.dispatch(setUserAuth({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    }
    if (refreshResult.error) {
      api.dispatch(clearAuth());
      window.location.replace('/');
    }
  }
  return result;
};
