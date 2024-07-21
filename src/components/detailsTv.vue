<template>
  <div class="bg-white text-gray-800 p-8 rounded-lg shadow-md">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-3xl font-bold">{{ movie.name }}</h2>
      <span class="text-lg">Date de sortie last episode {{ movie.last_air_date }}</span>
    </div>

    <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" class="mb-4 rounded-lg">

    <p class="text-base mb-6">{{ movie.overview }}</p>
    <p class="text-base mb-6">Popularité : {{ movie.popularity }}</p>
  
<p class="text-base mb-6" >Le genre de films :
  <span v-for="(type, index) in movie.genres" :key="index">
    {{type.name}} {{index < movie.genres.length -1 ? ', ':'.'}}
  </span>
  
   </p>

   <p class="text-base mb-6"> Le pays de production 
    <span v-for="(pays, index) in movie.origin_country " :key="index">
      {{pays.name}} 
    </span>
   </p>
   <p class="text-base mb-6"> Langue parlé  
    <span v-for="(pays, index) in movie.spoken_languages" :key="index">
      {{pays.name}} 
    </span>
   </p>
    

    
<!-- Entrainement E5  -->

<h1>La liste des acteur de film : </h1>
<ul>

<router-link  v-for="realisateur in realisateur" :key="realisateur.id" :to="{ name: 'ActeurDetails', params: { id: realisateur.id } }" class="bg-white rounded-lg overflow-hidden shadow-lg  bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
 <p>Nom {{realisateur.name}}</p>
 <img :src="getImageUrl(realisateur.profile_path)" alt="Movie Poster" class="mb-4 rounded-lg">
  ================================================
  ================================================
    


   </router-link>
</ul>

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
