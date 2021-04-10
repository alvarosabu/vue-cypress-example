<template>
  <q-btn color="primary" :label="label" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
const props = {
  label: String,
};
export default defineComponent({
  name: "AwesomeButton",
  props,
});
</script>

<style></style>
