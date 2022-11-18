import {
  createApi,
  fetchBaseQuery,
  //   fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';

// import { contactsAxiosInstance } from 'services/axios-instance';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await contactsAxiosInstance({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  //   baseQuery: axiosBaseQuery({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => ({ url: '/contacts', method: 'get' }),
    }),
  }),
});
export const {
  useGetContactsQuery,
  useLazyGetContactsQuery,
} = contactsApi;
