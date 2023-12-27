import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL||''}),
    reducerPath:"adminApi",
    tagTypes:["User"],
    endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`/general/user/${id}`,
            providesTags:["User"]
        })
       
    })
})

export const  {useGetUserQuery}=api;