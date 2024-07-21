<template>
  <div class="bg-gradient-to-b from-teal-600 to-purple-400 min-h-screen text-white">
    <div class="container mx-auto p-8">
     <MovieDetails :movie="selectedMovie" :realisateur="acteurs"  :equipeRea="equipage" />
    </div>
  </div>
</template>

<script>
import MovieDetails from "../components/Moviedetails.vue";
import axios from "axios";

export default {
  components: {
    MovieDetails,
  },
  data() {
    return {
      selectedMovie: [],
       acteurs: null,
       equipage: null,
    };
  },
  mounted() {
    
    this.fetchMovieDetails(this.$route.params.id);
    // this.fetchTvDetails(this.$route.params.id);
    this.fetchMovieralisateur(this.$route.params.id);
  },
  methods: {
    fetchMovieDetails(movieId) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: "10f0f63ae269e673864d7ed70c5147b8",
             language: "fr-FR",
          },
        })
        .then((response) => {
          this.selectedMovie = response.data;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails du film:", error);
        });
    },
    // fetchTvDetails(tvId) {
    //   axios
    //     .get(`https://api.themoviedb.org/3/tv/${tvId}`, {
    //       params: {
    //         api_key: "10f0f63ae269e673864d7ed70c5147b8",
    //          language: "fr-FR",
    //       },
    //     })
    //     .then((response) => {
    //       this.selectedMovie = response.data;
    //     })
    //     .catch((error) => {
    //       console.error("Erreur lors de la récupération des détails du film:", error);
    //     });
    // },

fetchMovieralisateur(movieId) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=fr-FR`, {
          params: {
            api_key: "10f0f63ae269e673864d7ed70c5147b8",
            language: "fr-FR",
          },
        })
        .then((response) => {
          this.acteurs = response.data.cast;
          this.equipage = response.data.crew;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails des acteurs:", error);
        });
    },
  },
};
</script>

