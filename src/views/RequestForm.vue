<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ร้องเรียน</h1>
                   
                </div>
            </div>
            <div class="row">
                <div class="col-12" v-for="(menu, index) in menus" :key="index">
                    <Menu :link="menu.link" :name="menu.name" :icon="menu.image" linkBgColor="bg-custom-green" />
                </div>
            </div>
        </div>
    </section>    
</template>

<style scoped>
    
</style>

<script setup>
import { reactive } from 'vue'


import Menu from '@/components/Menu.vue'

const menus = reactive([
    {
        name: 'ร้องเรียนการทุจริต',
        image: 'images/icon-e-service/e-service/03e-service.png',
        link: 'form-normal-request',
    },
    {
        name: 'ร้องเรียนร้องทุกข์',
        image: 'images/icon-e-service/e-service/04e-service.png',
        link: 'form-complain-request',
    },
])

</script>
