import { useAuthToken } from "@/hooks/use-auth-token";
import { RootState } from "@/lib/store";
import { INote } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

// Define a service using a base URL and expected endpoints
export const noteAPI = createApi({
  reducerPath: "noteAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNoteByUserId: builder.query<INote[], string>({
      query: (userId) => ({
        url: `note`,
        params: { userId, page: 0, size: 10, sort: "createdAt" },
        method: "GET",
      }),
    }),
    createEmptyNoteByUser: builder.mutation<INote, string>({
      query: (userId) => ({
        url: `note`,
        params: { userId },

        method: "POST",
      }),
    }),
    updateNote: builder.mutation<INote, Omit<INote, "createdAt">>({
      query: ({  ...patch }) => ({
        url: `note`,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteNoteById: builder.mutation<{ success: boolean; id: number }, number>({
      query(noteId) {
        return {
          url: `note`,
          params: { noteId },
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetNoteByUserIdQuery,
  useCreateEmptyNoteByUserMutation,
  useDeleteNoteByIdMutation,
  useUpdateNoteMutation,
} = noteAPI;
