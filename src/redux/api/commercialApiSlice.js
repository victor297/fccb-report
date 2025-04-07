import { apiSlice } from "./apiSlice";

export const commercialApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    commercialMatch: builder.mutation({
      query: (data) => ({
        url: `/connectCommercialMatch`,
        method: "POST",
        body: data,
      }),
    }),
    commercialFullCredit: builder.mutation({
      query: (data) => ({
        url: `/GetCommercialFullCreditReport`,
        method: "POST",
        body: data,
      }),
    }),
    commercialBasicCredit: builder.mutation({
      query: (data) => ({
        url: `/GetCommercialBasicCreditReport`,
        method: "POST",
        body: data,
      }),
    }),
    commercialXScoreFullCredit: builder.mutation({
      query: (data) => ({
        url: `/GetXScoreConsumerFullCreditReport`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCommercialMatchMutation,
  useCommercialBasicCreditMutation,
  useCommercialFullCreditMutation,
  useCommercialXScoreFullCreditMutation
} = commercialApiSlice;
