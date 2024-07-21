<template>
  <div class="bg-white text-gray-800 p-8 rounded-lg shadow-md">
    <h1>Detail acteur</h1>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-3xl font-bold"> Nom et prenom: {{ detailsactor.name }}</h2>
      <span class="text-lg">date de naissance {{ detailsactor.birthday }}</span>
      <span class="text-lg">lieu de naissance {{ detailsactor.place_of_birth }}</span>
    </div>

    <img :src="getImageUrl(detailsactor.profile_path)" alt="detailsactor Poster" class="mb-4 rounded-lg">

    <p class="text-base mb-6">Role-jouer {{ detailsactor.character }}</p>

    <p>les surnom : {{detailsactor.also_known_as}}</p>
    ---------------------------------------------------------
    <p>Biographie  : {{detailsactor.biography}}</p>

  

 <h2>les film  </h2>
  <router-link v-for="detailacteurfilm in detailacteurfilm" :key="detailacteurfilm.id" :to="{ name: 'details', params: { id: detailacteurfilm.id } }">
          <article class=" mb-8 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              v-if="detailacteurfilm.poster_path"
              :src="'https://image.tmdb.org/t/p/w500/' + detailacteurfilm.poster_path"
              :alt="detailacteurfilm.title"
              class="w-full max-w-xs h-auto max-h-64"
            />
            <h3 class="text-lg font-bold text-black">Titre du film : {{ detailacteurfilm.title }}</h3>
            <p class="text-gray-500">Date de sortie: {{ detailacteurfilm.release_date }}</p>
            <p class="text-gray-500">Description: {{ detailacteurfilm.overview }}</p>
            <p class="text-gray-500">Popularité: {{ detailacteurfilm.popularity }}</p>
           
          </article>
        </router-link>

 <h2>les les series </h2>
  <router-link v-for="detailsactortv in detailsactortv" :key="detailsactortv.id" :to="{ name: 'TvDetails', params: { id: detailsactortv.id } }">
          <article class=" mb-8 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              v-if="detailsactortv.poster_path"
              :src="'https://image.tmdb.org/t/p/w500/' + detailsactortv.poster_path"
              :alt="detailsactortv.name"
              class="w-full max-w-xs h-auto max-h-64"
            />
            <h3 class="text-lg font-bold text-black">Titre de la série : {{ detailsactortv.name }}</h3>
            <p class="text-gray-500">Date de sortie: {{ detailsactortv.first_air_date }}</p>
            <p class="text-gray-500">Description: {{ detailsactortv.overview }}</p>
            <p class="text-gray-500">Popularité: {{ detailsactortv.popularity }}</p>
           
          </article>
        </router-link>

 </div>
</template>

<script>
export default {
  props: {
   
    detailsactor: Object,
    detailsactortv: Object,
    detailacteurfilm: Object,

   
  },
  methods: {

    getImageUrl(profile_path) {
      return profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : ''; 
    },
  },
};
</script>
