<template>
  <div >
    <h2 class="text-2xl font-bold mb-4">Explorer les films et séries TV</h2>
    <div class="mx-auto mt-10 grid max-w-xs grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
     <div>
        <h3 class="text-xl font-bold mb-4 ">Films</h3>
        <h3 class="  gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"></h3>

        <router-link v-for="Movies in Movies" :key="Movies.id" :to="{ name: 'details', params: { id: Movies.id } }">
          <article class=" mb-8 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              v-if="Movies.poster_path"
              :src="'https://image.tmdb.org/t/p/w500/' + Movies.poster_path"
              :alt="Movies.title"
              class="w-full"
            />
            <h3 class="text-lg font-bold text-black">Titre du film : {{ Movies.title }}</h3>
            <p class="text-gray-500">Date de sortie: {{ Movies.release_date }}</p>
            <p class="text-gray-500">Description: {{ Movies.overview }}</p>
            <p class="text-gray-500">Popularité: {{ Movies.popularity }}</p>
           
          </article>
        </router-link>
      </div>

      <!-- Series Section -->
      <div>
        <h3 class="text-xl font-bold mb-4 ">Séries</h3>
        <h3 class=" gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"></h3>

        <router-link v-for="Tv in Tv" :key="Tv.id" :to="{ name: 'TvDetails', params: { id: Tv.id } }">
          <article class=" mb-8 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              v-if="Tv.poster_path"
              :src="'https://image.tmdb.org/t/p/w500/' + Tv.poster_path"
              :alt="Tv.name"
              class="w-full"
            />
            <h3 class="text-lg font-bold text-black">Titre de la série : {{ Tv.name }}</h3>
            <p class="text-gray-500">Date de sortie: {{ Tv.first_air_date }}</p>
            <p class="text-gray-500">Description: {{ Tv.overview }}</p>
            <p class="text-gray-500">Popularité: {{ Tv.popularity }}</p>
           
          </article>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Aos from 'aos';
import 'aos/dist/aos.css'
export default {
 
 props: {
Movies: Array,
Tv : Array,
 },
mounted(){
  Aos.init();
},

};
</script>
