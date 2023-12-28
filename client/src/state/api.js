import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL||''}),
    reducerPath:"adminApi",
    tagTypes:["User","Products"],
    endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`general/user/${id}`,
            providesTags:["User"]
        }),
        getProducts:build.query({
            query:()=>`client/product`,
            providesTags:["Products"]
        })
       
    })
})

export const  {useGetUserQuery,useGetProductsQuery}=api;