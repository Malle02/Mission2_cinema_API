<template>

  <div class="bg-gradient-to-b from-teal-600 to-purple-400 min-h-screen text-white">
 
          <div class="text-center py-8">
      <p class="text-lg font-semibold mb-2">Explorez davantage et trouvez vos films préférés !</p>
      <router-link to="/search" class="inline-block bg-blue-500 text-2xl font-bold px-6 py-3 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white">Rechercher des films</router-link>
    </div>
      
    <div class="container mx-auto p-8">
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold mb-4">Bienvenue dans le Monde du Cinéma</h1>
        <p class="text-lg">Découvrez les films populaires du moment</p>

        <h1 class="text-lg mt-5 bg-blue-500 text-2xl font-bold text-black">Voici le TOP6 des films les plus populaires du moment</h1>
      </div>

      <MovieCard :movies="popularMovies" />
    </div>

  
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
import axios from 'axios';

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      popularMovies: [],
    };
  },
  mounted() {
    this.fetchPopularMovies();
  },
  methods: {
    fetchPopularMovies() {
      axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
          params: {
            api_key: '10f0f63ae269e673864d7ed70c5147b8',
          }
        })
        .then(response => {
          this.popularMovies = response.data.results.slice(0, 6);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des films populaires:', error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
