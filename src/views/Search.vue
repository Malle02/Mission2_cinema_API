<template>
  <div class="bg-gradient-to-b from-teal-600 to-purple-400 min-h-screen text-white">
    <div class="container mx-auto p-8">
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold mb-4">Recherche de Films</h1>
        <p class="text-lg">Trouvez vos films préférés</p>
      </div>

     <SearchBar @search="searchMedia" />

      <div class="max-w-3xl text-center mx-auto">
       
        <MovieList :Movies="AllMovies"  :Tv="AllTV" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import MovieList from "../components/MovieList.vue";
import axios from "axios";
export default {
  components: {
    SearchBar,
    MovieList,
  },
 data() {
    return {
      AllMovies: [],
      AllTV: [],
      AllMedia: [],
    };
  },
  mounted() {
    this.fetchAllMovies();
    this.fetchAllTV();
  },
  methods: {
    fetchAllMovies() {
      axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc'  , {
          params: {
            api_key: '10f0f63ae269e673864d7ed70c5147b8',
          }
        })
        .then(response => {
          this.AllMovies = response.data.results
        })
          .catch(error => {
          console.error('Erreur lors de la récupération des Films  populaires:', error);
        });
    },
       fetchAllTV () {
        axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc', {
           params: {
            api_key: '10f0f63ae269e673864d7ed70c5147b8',
          }
        })
        .then(response => {
          this.AllTV = response.data.results
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des Series  populaires:', error);
        });
    },
     searchMedia(query) {
       axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=fr-FR&page=1`, {
           params: {
            api_key: '10f0f63ae269e673864d7ed70c5147b8',
          }
        })
        .then(response => {
           console.log("Résultats de la recherche :", response.data.results);
          this.AllMedia = response.data.results
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des Donnée   populaires:', error);
        });
    
    }
  },
};
</script>
