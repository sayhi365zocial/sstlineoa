<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องเก็บขนขยะมูลฝอย</h1>
                </div>
            </div>
            <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
                       
                        <PersonalInformation />
                        
                        <div class="row">
                            <div class="col-12">
                                <h6>มีความประสงค์ต่อเทศบาลตำบลศรีสุนทร ให้เข้าจัดเก็บขยะมลูฝอย</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="for_house_no">โดยถังขยะตั้งอยู่บ้านเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="for_house_no" name="for_house_no" placeholder="" value="" required>
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="for_moo">หมู่ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control form-control-lg" id="for_moo" name="for_moo" placeholder="" value="">
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="for_soi">ตรอก/ซอย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="for_soi" name="for_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="for_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="for_road" name="for_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="for_sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="for_sub_district" name="for_sub_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="for_district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="for_district" name="for_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="for_province">จังหวัด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="for_province" name="for_province" value="" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 mb-3">
                                <div class="form-check">
                                    <label class="form-check-label" for="">ประเภทอาคาร
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="building" id="building_existing" value="building_existing">
                                    <label class="form-check-label" for="building_existing">บ้านอยู่อาศัย</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="building" id="building_new" value="building_new">
                                    <label class="form-check-label" for="building_new">สถานประกอบการ</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-12 mb-3">
                                <label for="latitude">ละติจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="latitude" name="latitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="longitude">ลองจิจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="longitude" name="longitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 mt-2 mb-4">
                                <div id="map" style="height: 200px; background-color: green;"><strong>Map</strong></div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">ทั้งนี้ ข้าพเจ้ายินดีปฏิบัติตามเทศบัญญัติตำบลศรีสุนทร หรือตามเงื่อนไขที่กำหนด
                                    และยินดีชำระค่าธรรมเนียมการจัดเก็บขยะเป็นรายเดือนๆ ละ (บาท) <span
                                        class="text-danger">*</span></label>
                                <input type="number" class="form-control form-control-lg" id="price" name="price" placeholder="เฉพาะเจ้าหน้าที่">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="every_1_m" name="every_1_m" id="every_1_m">
                                    <label class="form-check-label" for="every_1_m">
                                        เป็นรายเดือน
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="every_3_m" name="every_3_m" id="every_3_m">
                                    <label class="form-check-label" for="every_3_m">
                                        เป็นราย 3 เดือน
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="every_6_m" name="every_6_m" id="every_6_m">
                                    <label class="form-check-label" for="every_6_m">
                                        เป็นราย 6 เดือน
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="every_12_m" name="every_12_m" id="every_12_m">
                                    <label class="form-check-label" for="every_12_m">
                                        เป็นราย 12 เดือน
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>โดยมีความประสงค์จ่ายค่าธรรมเนียมการจัดขยะ</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="by_myself" id="by_myself" name="by_myself">
                                    <label class="form-check-label" for="by_myself">
                                        ด้วยตนเอง
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="by_staff" id="by_staff" name="by_staff">
                                    <label class="form-check-label" for="by_staff">
                                        ให้พนักงานของเทศบาลเป็นผู้เข้าไปจัดเก็บ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <h6>หากข้าพเจ้าฝ่าฝืนข้อบังคับตามเทศบัญญัติฯ หรือเงื่อนไขใดๆ
                                    ตามคำร้องและแบบบันทึกหลักฐานการรับและการใช้ถังขยะ ยินดีให้
                                    เทศบาลตำบลศรีสุนทรดำเนินการตามข้อกฎหมายที่เกี่ยวข้องต่อไป</h6>
                            </div>
                        </div>

                       <FormInstruction />
                        <div class="row mb-3">
                            <div class="col-12">
                                <button type="submit" class="btn w-100 bg-theme-green btn-block text-white">ส่งข้อมูล</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>    
</template>

<style>
</style>

<script setup>
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
</script>
