<template>
  <div class="bg-gradient-to-b from-teal-600 to-purple-400 min-h-screen text-white">
    <div class="container mx-auto p-8">
     <Actorsdetaisls :detailsactor="acteursdetails" :detailacteurfilm="acteursfilm"  :detailsactortv="acteurstv" />
    </div>
  </div>
</template>

<script>
import Actorsdetaisls from "../components/details_acteur.vue";
import axios from "axios";

export default {
  components: {
    Actorsdetaisls,
  },
  data() {
    return {
 
      acteursdetails: [],
      acteursfilm: [],
      acteurstv: [],
     
       
    };
  },
  mounted() {
    

    this.fetchActeursDetails(this.$route.params.id);
    this.fetchActeursMovies(this.$route.params.id);
    this.fetchActeursTv(this.$route.params.id);
   
  },
  methods: {

fetchActeursDetails
(acteursId) {
      axios
        .get(`https://api.themoviedb.org/3/person/${acteursId}?language=fr_FR`, {
          params: {
            api_key: "10f0f63ae269e673864d7ed70c5147b8",
            language: "fr-FR",
          },
        })
        .then((response) => {
          this.acteursdetails = response.data;
          
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails des acteurs:", error);
        });
    },
fetchActeursMovies
(acteursId) {
      axios
        .get(`https://api.themoviedb.org/3/person/${acteursId}/movie_credits?language=fr-FR`, {
          params: {
            api_key: "10f0f63ae269e673864d7ed70c5147b8",
            language: "fr-FR",
          },
        })
        .then((response) => {
          this.acteursfilm = response.data.cast;
          
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails des acteurs:", error);
        });
    },
fetchActeursTv
(acteursId) {
      axios
        .get(`https://api.themoviedb.org/3/person/${acteursId}/tv_credits?language=fr-FR`, {
          params: {
            api_key: "10f0f63ae269e673864d7ed70c5147b8",
            language: "fr-FR",
          },
        })
        .then((response) => {
          this.acteurstv = response.data.cast;
          
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails des acteurs:", error);
        });
    },
  },
};
</script>

