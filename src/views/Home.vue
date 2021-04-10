<template>
  <div class="home flex h-full">
    <div class="w-1/3 mx-auto">
      <AwesomeCard
        title="This is the way"
        media="https://images.unsplash.com/photo-1611250535839-94b88cf88bba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
      >
        Arepa ipsum dolor amet parchita coroto Quisque eu le eche los perros
        amet cuál es la guachafita; A hallaca soplar el bistec criolla amet!
        Edgar Rámirez tequeños
      </AwesomeCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AwesomeCard from "@/components/awesome-card/AwesomeCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    AwesomeCard,
  },
});
</script>
