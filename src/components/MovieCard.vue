<template>
  <div class="bg-white text-gray-800 p-4 rounded-lg shadow-md">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      <router-link  v-for="movie in movies" :key="movie.id" :to="{ name: 'details', params: { id: movie.id } }" class="bg-white rounded-lg overflow-hidden shadow-lg  bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <img    data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" class="w-full ">
        <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" :alt="movie.title" class="w-full">
        <div class="p-4">
          <h2 class="font-semibold text-black text-lg">{{ movie.title }}</h2>
          <p class="text-gray-600">Aperçu : {{ movie.overview }}</p>
          <p class="text-gray-600">Date de sortie : {{ movie.release_date }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Aos from 'aos';
import 'aos/dist/aos.css'
export default {

  props: {
    movies: Array,
  },
 mounted() {
    Aos.init();
  },
};
</script>


