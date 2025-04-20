import { apiSlice } from "./apiSlice";

export const consumerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    consumerReports: builder.mutation({
      query: (data) => ({
        url: `/consumerreports`, 
        method: "POST",
        body: data,
      }),
    }),
    consumerMatch: builder.mutation({
      query: (data) => ({
        url: `/connectConsumerMatch`, 
        method: "POST",
        body: data,
      }),
    }),
    consumerFullCredit: builder.mutation({
      query: (data) => ({
        url: `/GetConsumerFullCreditReport`,
        method: "POST",
        body: data,
      }),
    }),
    consumerBasicTrace: builder.mutation({
      query: (data) => ({
        url: `/GetConsumerBasicTraceReport`,
        method: "POST",
        body: data,
      }),
    }),
    consumerBasicCredit: builder.mutation({
      query: (data) => ({
        url: `/GetConsumerBasicCreditReport`,
        method: "POST",
        body: data,
      }),
    }),
    consumerXScoreFullCredit: builder.mutation({
      query: (data) => ({
        url: `/GetXScoreConsumerFullCreditReport`,
        method: "POST",
        body: data,
      }),
    }),
    consumerXScorePrime: builder.mutation({
      query: (data) => ({
        url: `/GetXScoreConsumerPrimeReport`,
        method: "POST",
        body: data,
      }),
    }),
    consumerIScore: builder.mutation({
      query: (data) => ({
        url: `/iScore`,
        method: "POST",
        body: data,
      }),
    }),
    consumerKYCVerification: builder.mutation({
      query: (data) => ({
        url: `/GetConsumerKYCVerificationReport`,
        method: "POST",
        body: data,
      }),
    }),
    consumerSnapcheck: builder.mutation({
      query: (data) => ({
        url: `/snapcheck`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useConsumerReportsMutation,
  useConsumerMatchMutation,
  useConsumerFullCreditMutation,
  useConsumerBasicTraceMutation,
  useConsumerBasicCreditMutation,
  useConsumerXScoreFullCreditMutation,
  useConsumerXScorePrimeMutation,
  useConsumerIScoreMutation,
  useConsumerKYCVerificationMutation,
  useConsumerSnapcheckMutation
} = consumerApiSlice;
