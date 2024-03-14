<template>
  <div class="bg-white text-gray-800 p-8 rounded-lg shadow-md">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-3xl font-bold">{{ movie.original_title }}</h2>
      <span class="text-lg">date de sortie {{ movie.release_date }}</span>
    </div>

    <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" class="mb-4 rounded-lg">

    <p class="text-base mb-6">{{ movie.overview }}</p>
    <p class="text-base mb-6">Popularité : {{ movie.popularity }}</p>
   <p class="text-base mb-6">Studios de production :
      <span v-for="(company, index) in movie.production_companies" :key="index">
        {{ company.name }} pays :{{company.origin_country }}{{ index < movie.production_companies.length - 1 ? ', ' : '' }}
      </span>
    </p>
<p class="text-base mb-6" >Le genre de films :
  <span v-for="(type, index) in movie.genres" :key="index">
    {{type.name}} {{index < movie.genres.length -1 ? ', ':'.'}}
  </span>
  
   </p>

   <p class="text-base mb-6"> Le pays de production 
    <span v-for="(pays, index) in movie.production_countries" :key="index">
      {{pays.name}} 
    </span>
   </p>
   <p class="text-base mb-6"> Langue parlé  
    <span v-for="(pays, index) in movie.spoken_languages" :key="index">
      {{pays.name}} 
    </span>
   </p>
    
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    realisateur:  Array,
    equipeRea:  Array,
  },
  methods: {

    getImageUrl(posterPath) {
      return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : ''; 
    },
  },
};
</script>
