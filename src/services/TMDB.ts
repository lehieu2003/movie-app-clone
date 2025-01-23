import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";

/**
 * The `tmdbApi` object provides methods to interact with the TMDB (The Movie Database) API.
 * It includes endpoints to fetch shows and show details.
 *
 * @constant
 * @type {object}
 * @property {function} getShows - Fetches a list of shows based on the provided parameters.
 * @property {function} getShow - Fetches detailed information about a specific show.
 *
 * @example
 * // Fetch shows with a search query
 * const { data, error } = useGetShowsQuery({ category: 'movie', searchQuery: 'Inception', page: 1 });
 *
 * @example
 * // Fetch similar shows
 * const { data, error } = useGetShowsQuery({ category: 'movie', showSimilarShows: true, id: 123 });
 *
 * @example
 * // Fetch show details
 * const { data, error } = useGetShowQuery({ category: 'movie', id: 123 });
 */
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),

  endpoints: (builder) => ({
    getShows: builder.query({
      query: ({
        category,
        type,
        searchQuery,
        page,
        showSimilarShows,
        id,
      }: {
        category: string | undefined;
        type?: string;
        page?: number;
        searchQuery?: string;
        showSimilarShows?: boolean;
        id?: number;
      }) => {
        if (searchQuery) {
          return `search/${category}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
        }

        if (showSimilarShows) {
          return `${category}/${id}/similar?api_key=${API_KEY}`;
        }

        return `${category}/${type}?api_key=${API_KEY}&page=${page}`;
      },
    }),

    getShow: builder.query({
      query: ({ category, id }: { category: string; id: number }) =>
        `${category}/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetShowsQuery, useGetShowQuery } = tmdbApi;
