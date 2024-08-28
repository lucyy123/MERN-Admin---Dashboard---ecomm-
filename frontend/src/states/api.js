
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// const b=process.env.REACT_BASE_URL
// console.log('b:', b)


export const api = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl:"http://localhost:5000/api/v1/"}),
    tagTypes: ["User", 'Products', 'Customers', 'Transactions','Geography','Sales','Admin','Dashboard'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: builder.query({
            query: () => 'client/products',
            providesTags: ['Products'],
        }),
        getCustomers: builder.query({
            query: () => 'client/customers',
            providesTags: ["Customers"]
        }),
        getTransactions: builder.query({
            query: ({
                page, pageSize, search, sort
            }) => ({
                url: 'client/transactions',
                method: 'GET',
                params: { page, pageSize, sort, search }
            }),
            providesTags: ['Transactions']
        }),
        getGeography:builder.query({
            query:()=>'client/geography',
            providesTags:['Geography']
        }),
        getSales:builder.query({
            query:()=>'sales/sales',
            providesTags:['Sales']
        }),
        getAdmin:builder.query({
            query:()=>'managment/admin',
            providesTags:['Admin']
        }),
        getDashboard:builder.query({
            query:()=>'general/dashboard',
            providesTags:['Dashboard']
        })




    })


})

export const { useGetUserQuery, 
    useGetProductsQuery,
     useGetCustomersQuery,
      useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminQuery,
    useGetDashboardQuery
    } = api