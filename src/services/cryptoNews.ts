/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': '76f6a32264msh44a501d4043d188p10191bjsn9783eabc0408'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url: string): Request => ({ url, headers: cryptoNewsHeaders });

type Request = {
    url: string;
    headers: { [key: string]: string };
}

type Params = {
    newsCategory: string;
    count: number;
}

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<any, Params>({
      query: ({ newsCategory, count }: any) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
