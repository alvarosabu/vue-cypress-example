<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.png" />
    <AwesomeButton :label="'Hellooo'" />
  </q-page>
</template>

<style></style>

<script>
import AwesomeButton from "../components/button/AwesomeButton.vue";

export default {
  name: "HelloWorld",
  components: {
    AwesomeButton,
  },
};
</script>
