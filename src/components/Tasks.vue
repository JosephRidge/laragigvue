<template>
  <div class="m-10">
    <h1 class=""></h1>
    <hr />
    <!-- <h2>{{ listings }}</h2> -->

    <div v-for="listing in listings" :key="listing.id">
        <div class="my-5">
      <h1 class="capitalize">{{ listing.title }}</h1>
      <h1>#{{ listing.tags }}</h1> 
      <h1>{{ listing.company }}</h1>
      <h1>{{ listing.location }}</h1>
      <h1 class="my-1 text-gray-700" >{{ listing.description }}</h1>

        </div>
        <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { listings: [], loading: true };
  },
  methods: {
    getData() {
      this.loading = true;
      axios
        .get("http://127.0.0.1:8000/api/jobs")
        .then((response) => (this.listings = response.data.listings));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
