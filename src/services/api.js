// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorage } from './utils'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', 
  prepareHeaders: (headers ) => {
    const token = getStorage('AuthToken')
    console.log(token)
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
}),
  tagTypes:['EmployeeList'],
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => 'employee',
      providesTags:['EmployeeList']
    }),

    getEmployeeById: builder.query({
      query: (id) => ({
        url: `employee/${id}`,
        method: 'GET',
      }),
    }),

    createEmployee: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
       query: (payload ) => ({
         url: 'employee',
         method: 'POST',
         body: payload,
       }),
     }),

     updateEmployee: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
       query: ({ id, ...payload} ) => ({
         url: `employee/${id}`,
         method: 'PUT',
         body: payload,
       }),
     }),
 
     deleteEmployee: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
       query: (id) => ({
         url: `employee/${id}`,
         method: 'DELETE',

       }),
       invalidatesTags:['EmployeeList']
     }),

     login: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
       query: (payload) => ({
         url: '/employee/login',
         method: 'POST',
         body: payload

       }),
      
     }),
     
 
  }),
  
 
    
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery, useCreateEmployeeMutation ,useDeleteEmployeeMutation, useGetEmployeeByIdQuery, useUpdateEmployeeMutation, useLoginMutation} = baseApi