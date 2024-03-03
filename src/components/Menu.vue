<template>
    <RouterLink :to="link" class="text-decoration-none text-black">
        <div 
            class="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
            :class="linkBgColor"
        >
            <div class="form-menu-icon-box">
                <img :src="icon" alt="" class="img-fluid">
            </div>
            <div class="form-menu-name-box">
                {{ name }}
            </div>
            <div class="form-menu-arrow-box tex-center">
                <i class="fs-3 ri-arrow-right-s-line"></i>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  link: String,
  icon: String,
  name: String,
  linkBgColor: String,
})

</script>

<style scoped>
    .form-menu-icon-box {
        width: 15%;
    }

    .form-menu-name-box {
        width: 65%
    }

    .form-menu-arrow-box {
        width: 10%;
    }

    .bg-custom-pink {
        background-color: #fcdde7;
    }

    .bg-custom-green {
        background-color: #e7fcf7;
    }
</style>