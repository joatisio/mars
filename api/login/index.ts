import API from 'utils/routes/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type LoginError = {
  data: {
    message: string;
  };
};

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.root }),
  endpoints: (builder) => ({
    register: builder.mutation<unknown, string>({
      query: (phonNumber) => ({
        url: API.AUTH_REGISTER,
        method: 'POST',
        headers: { mobile_no: phonNumber, client: 'web' },
      }),
    }),
    confirm: builder.mutation<unknown, unknown>({
      query: ({ phonNumber, code }) => ({
        url: API.AUTH_TOKEN,
        method: 'POST',
        headers: { mobile_no: phonNumber, client: 'web' },
        body: { code },
      }),
    }),
  }),
});
export const { useRegisterMutation, useConfirmMutation } = loginApi;
