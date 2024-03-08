<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">หมวดหมู่ภาษี</h1>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-12" v-for="(menu, index) in menus" :key="index">
                    <Menu :link="menu.link" :name="menu.name" :icon="menu.image" linkBgColor="bg-custom-pink" />
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
        name: 'ภาษีที่ดินและสิ่งปลูกสร้าง',
        image: 'images/icon-e-service/tax/02tax.png',
        link: '',
    },
    {
        name: 'ภาษีป้าย',
        image: 'images/icon-e-service/tax/04sign.png',
        link: '',
    },
    {
        name: 'ประชาสัมพันธ์ข่าวสารงานจัดเก็บรายได้',
        image: 'images/icon-e-service/tax/05tax.png',
        link: '',
    },
    {
        name: 'คำร้องคัดค้านประเมิณภาษีหรือการเรียกเก็บภาษีที่ดินและสิ่งปลูกสร้าง',
        image: 'images/icon-e-service/tax/05tax.png',
        link: 'form-objection-tax',
    },
    {
        name: 'คำร้องขอรับเงินภาษีที่ดินและสิ่งปลูกสร้างคืน',
        image: 'images/icon-e-service/tax/02tax.png',
        link: 'form-refund-tax',
    },
    {
        name: 'แบบแจ้งการเปลี่ยนแปลงการใช้ประโยชน์ในที่ดินหรือสิ่งปลูกสร้าง',
        image: 'images/icon-e-service/tax/02tax.png',
        link: 'form-request-change-property',
    }

])

</script>
