<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute();

const backgroundColor = ref();

if (['/address', '/otp', '/register'].includes(route.path)) {
  backgroundColor.value = '#F3F5F9';
} else {
  backgroundColor.value = '#FFFFFF'; // white
}

document.querySelector('body').style.backgroundColor = backgroundColor.value;

</script>

<template>
  <RouterView />
</template>

<style>

</style>
