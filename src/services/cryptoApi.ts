import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Params } from 'react-router-dom';

import { API_KEY, API_URL } from '../config/config';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': API_URL,
  'X-RapidAPI-Key': API_KEY
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string): Request => ({
  url,
  headers: cryptoApiHeaders
});

type Request = {
  url: string;
  headers: { [key: string]: string | undefined };
};

type ParamsFetch = {
  coinId: string | undefined;
  timePeriod: string | undefined;
};

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<any, number>({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query<any, string | undefined>({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query<any, ParamsFetch>({
      query: ({ coinId, timePeriod }: any) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi;
