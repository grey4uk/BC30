import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dog.ceo/api/breeds/image',
  }),
  tagTypes: ['images', 'posts'],
  endpoints: (builder) => ({
    getImages: builder.query({
      query: (value = 1) => {
        return { url: `/random/${value}` };
      },
      providesTags: ['images'],
    }),
    addImage: builder.mutation({
      query: (image) => ({
        url: '/images',
        body: image,
        method: 'POST',
      }),
      invalidatesTags: ['images'],
    }),
    getPosts: builder.query({
      query: () => '/post',
      providesTags: ['posts'],
    }),
  }),
});
export const {
  useGetImagesQuery,
  useLazyGetImagesQuery,
  use,
} = imagesApi;
