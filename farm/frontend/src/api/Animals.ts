import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "./Common";
import { Animal } from "../types/Animals";

export const ANIMAL_API_REDUCER_KEY = "tasksApi";
export const animalApi = createApi({
  reducerPath: ANIMAL_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
  }),
  tagTypes: ["Animals"],
  endpoints: (builder) => ({
    getAnimals: builder.query<Animal[], void>({
      query() {
        return {
          url: `/animals`,
        };
      },
      providesTags: ["Animals"],
    }),
    createAnimal: builder.mutation<Animal, Animal>({
      query(data) {
        return {
          url: "/animals",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Animals"],
    }),
    deleteAnimal: builder.mutation<Animal, string>({
      query(name) {
        return {
          url: `/animals/${name}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Animals"],
    }),
  }),
});

export const {
  useGetAnimalsQuery,
  useCreateAnimalMutation,
  useDeleteAnimalMutation,
} = animalApi;
