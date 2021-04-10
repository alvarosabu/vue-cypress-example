<template>
  <div class="card shadow-lg flex rounded-lg overflow-hidden">
    <img
      v-if="media"
      class="w-1/3 object-cover"
      :src="media"
      alt="Card Image"
    />
    <div class="card-content p-4 px-8 w-2/3 text-sm">
      <h2 class="font-display text-lg mb-4 font-bold">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const props = {
  title: String,
  media: String,
};
export default defineComponent({
  name: "AwesomeCard",
  props,
  setup(props) {
    return {};
  },
});
</script>

<style>
@import "../../styles/base.css";
</style>
