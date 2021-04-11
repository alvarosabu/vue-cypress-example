<template>
  <div class="card shadow-lg flex rounded-lg overflow-hidden">
    <img
      v-if="media"
      class="w-1/3 object-cover"
      :src="media"
      alt="Card Image"
    />
    <div
      class="card-content p-4 px-8 w-2/3 text-sm"
      :class="{ 'text-green-400': clicked }"
    >
      <h2 class="font-display text-lg mb-4 font-bold" v-show="!clicked">
        {{ title }}
      </h2>
      <slot></slot>
      <div class="py-4">
        <button
          class="btn px-2 py-1 bg-green-400 text-white text-sm rounded"
          data-cy="card-button"
          @click="handleClick"
        >
          Click me to see the magic
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const props = {
  title: String,
  media: String,
};
export default defineComponent({
  name: "AwesomeCard",
  props,
  setup() {
    const clicked = ref(false);

    function handleClick() {
      clicked.value = true;
    }

    return { clicked, handleClick };
  },
});
</script>

<style>
@import "../../styles/base.css";
</style>
