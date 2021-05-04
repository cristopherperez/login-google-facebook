<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


import Navbar from "@/components/Navbar";

export default {
  components:{Navbar},
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
