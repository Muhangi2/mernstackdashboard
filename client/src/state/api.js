import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

// console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL||''}),
    reducerPath:"adminApi",
    tagTypes:["User","Products","Customers","Transactions"],
    endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`general/user/${id}`,
            providesTags:["User"]
        }),
        getProducts:build.query({
            query:()=>`client/product`,
            providesTags:["Products"]
        }),
        getCustomers:build.query({
            query:()=>`client/customer`,
            providesTags:["Customers"]
        }),
        getTransactions:build.query({
            query:({page,pageSize,sort,search,})=>({
               url:"client/transaction",
               method:"GET",
               params:{page,pageSize,sort,search}
            }),
            providesTags:["Transactions"]
        })
       
    })
})

export const  {useGetUserQuery,useGetProductsQuery,useGetCustomersQuery,useGetTransactionsQuery}=api;