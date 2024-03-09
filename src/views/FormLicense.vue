<template>
    <section class="my-5 mx-2">
        <FormSuccessAlert />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">แบบฟอร์ม</h1>
                    <h2 class="text-center">คำร้อง/ใบขออนุญาต</h2>
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
import FormSuccessAlert from '@/components/FormSuccessAlert.vue';

const menus = reactive([
    {
        name: 'คำร้องขอใช้น้ำประปา',
        image: 'images/icon-e-service/e-service/05e-service.png',
        link: 'form-water-supply-request',
    }, 
    {
        name: 'คำร้องขอยืมครุภัณฑ์',
        image: 'images/icon-e-service/e-service/06e-service.png',
        link: 'form-durable-article-request',
    },
    {
        name: 'คำร้องขอใช้รถยนต์บรรทุกโดยสาร (สองแถว)',
        image: 'images/icon-e-service/e-service/07e-service.png',
        link: 'form-public-bus',
    },
    {
        name: 'คำร้องขอรับใบอนุญาตประกอบกิจการที่เป็นอันตรายต่อสุขภาพ',
        image: 'images/icon-e-service/e-service/09e-service.png',
        link: 'form-business-health-hazard',
    },
    {
        name: 'คำร้องขออนุญาตก่อสร้าง',
        image: 'images/icon-e-service/e-service/11e-service.png',
        link: 'form-building',
    },
    {
        name: 'คำร้องเก็บขนขยะมูลฝอย',
        image: 'images/icon-e-service/e-service/12e-service.png',
        link: 'form-clearning-waste',
    },
    {
        name: 'คำร้องเก็บขนสิ่งปฏิกูล',
        image: 'images/icon-e-service/e-service/13e-service.png',
        link: 'form-clearning-garbage',
    },
    {
        name: 'แบบแจ้งและตอบรับการแจงฆ่าสัตว์',
        image: 'images/icon-e-service/e-service/14e-service.png',
        link: 'form-business-slaughter-house',
    },
    {
        name: 'ใบขอรับอนุญาตประกอบกิจการรับทำการเก็บ ขน และกำจัดมูลฝอยติดเชื้อ',
        image: 'images/icon-e-service/e-service/15e-service.png',
        link: 'form-business-collect-hazard-waste',
    },
    {
        name: 'ใบรับแจ้งประกอบกิจการสถานที่จำหน่ายและสะสมอาหาร ',
        image: 'images/icon-e-service/e-service/16e-service.png',
        link: 'form-business-collect-food',
    },
    {
        name: 'ใบรับแจ้งประกอบกิจการคำขอรับใบอนุญาตรับทำการเก็บขยะมูลฝอยและขนสิ่งปฏิกูล',
        image: 'images/icon-e-service/e-service/18.png',
        link: 'form-clearning-waste',
    },
    {
        name: 'คำขอรับใบอนุญาตประกอบกิจการการจัดตั้งตลาด',
        image: 'images/icon-e-service/e-service/19.png',
        link: 'form-business-market',
    },
    
])

</script>
