<template>
  <div class="mb-8">
    <form @submit.prevent="onSearch">
      <input v-model="searchQuery" type="text" class="border border-gray-300 p-2 rounded-md w-full text-black" placeholder="Rechercher des films ou séries..." />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 transition duration-300">Rechercher</button>
    </form>

    <div v-if="searchResults.length > 0" class="mx-auto mt-10 grid  grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
   

      <div v-for="result in searchResults" :key="result.id">
  <router-link v-if="result.media_type === 'movie'" :to="{ name: 'details', params: { id: result.id, type: 'movie' } }">
    <img v-if="result.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path" :alt="result.title" class="w-xs" />
    <h1>{{ result.title }}</h1>
    <h1>{{ result.vote_average }}</h1>
    <h1>{{ result.popularity }}</h1>
    <h1>Date de sortie: {{ result.release_date }}</h1>
  </router-link>


  <router-link v-else-if="result.media_type === 'tv'" :to="{ name: 'TvDetails', params: { id: result.id, type: 'tv' } }">
    <img v-if="result.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path" :alt="result.name" class="w-xs" />
    <h1>{{ result.name }}</h1>
    <h1>{{ result.vote_average }}</h1>
    <h1>{{ result.popularity }}</h1>
    <h1>Date de première diffusion: {{ result.first_air_date }}</h1>
  </router-link>
</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    onSearch() {
      if (this.searchQuery.trim() !== "") {
        axios.get(`https://api.themoviedb.org/3/search/multi?query=${this.searchQuery}&include_adult=false&language=fr-FR&page=1`, {
          params: {
            api_key: '10f0f63ae269e673864d7ed70c5147b8',
          }
        })
        .then(response => {
          this.searchResults = response.data.results;
        })
        .catch(error => {
          console.error('Erreur lors de la recherche :', error);
        });
      }
    },
  },
};
</script>
