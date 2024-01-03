import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

// console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL||''}),
    reducerPath:"adminApi",
    tagTypes:["User","Products","Customers","Transactions","Geography","Sales","Admin"],
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
        }),
        getGeography:build.query({
            query:()=>`client/geography`,
            providesTags:["Geography"]
        }),
        getSales:build.query({
            query:()=>`sales/sales`,
            providesTags:["Sales"]
        }),
        getAdminUsers:build.query({
            query:()=>`management/admin`,
            providesTags:["Admin"]
        }),
       
    })
})

export const  {useGetUserQuery,useGetProductsQuery,useGetCustomersQuery,useGetTransactionsQuery,useGetGeographyQuery,useGetSalesQuery,useGetAdminUsersQuery}=api;