import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '76f6a32264msh44a501d4043d188p10191bjsn9783eabc0408'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string): Request => ({ url, headers: cryptoApiHeaders });

type Request = {
    url: string;
    headers: { [key: string]: string };
}

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<string, void>({
      query: () => createRequest('/coins')
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;
