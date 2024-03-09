<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ใบรับแจ้งประกอบกิจการสถานที่จำหน่ายและสะสมอาหาร</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post"  autocomplete="off" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 ">
                                <div class="alert alert-success" role="alert">
                                <div class="form-check form-check">
                                    <input class="form-check-input" type="radio" name="area_type" id="below_200" value="below_200" required>
                                    <label class="form-check-label" for="below_200">ใบอนุญาติ (พื้นที่มากกว่า 200 ตร.ม. ขึ้นไป)</label>
                                </div>
                                <div class="form-check form-check">
                                    <input class="form-check-input" type="radio" name="area_type" id="above_200" value="above_200">
                                    <label class="form-check-label" for="above_200">หนังสือรับรองการแจ้ง (พื้นที่ไม่เกิน 200 ตร.ม.)</label>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="alert alert-primary" role="alert">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="request_type" id="new_request" value="new_request" required>
                                        <label class="form-check-label" for="new_request">ขออนุญาตรายใหม่</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="request_type" id="extend" value="extend">
                                        <label class="form-check-label" for="extend">ต่ออายุใบอนุญาตเดิม</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12">
                                <h6>ขอยื่นคำขอรับใบอนุญาตประกอบกิจการสถานที่จำหน่ายและสะสมอาหารต่อเจ้าพนักงานท้องถิ่น
                                    รายละเอียดดังนี้</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_individual" value="request_by_individual" required>
                                    <label class="form-check-label" for="request_by_individual">
                                        บุคคลธรรมดา
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_business" value="request_by_business">
                                    <label class="form-check-label" for="request_by_business">
                                        นิติบุคคล หรือ รับมอบอำนาจ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment_name" class="form-label mb-3">ชื่อสถานประกอบการ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_name" name="business_name" placeholder="" value=""  required>
                            </div>
                            <div class="col-12 ">
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="business_type" id="sell_food" value="sell_food">
                                    <label class="form-check-label" for="sell_food">จำหน่ายอาหาร</label>
                                </div>
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="business_type" id="collect_food" value="collect_food">
                                    <label class="form-check-label" for="collect_food">สะสมอาหาร</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="owner_name" class="form-label mb-3">เจ้าของกิจการคือ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_name" name="business_owner_name" placeholder="" value=""  required>
                            </div>
                            <div class="col-12">
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="is_house_no_type" id="is_house_no" value="is_house_no">
                                    <label class="form-check-label" for="is_house_no">บ้านเลขที่</label>
                                </div>
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="is_house_no_type" id="is_head_quarter_no" value="is_head_quarter_no">
                                    <label class="form-check-label" for="is_head_quarter_no">สำนักงานใหญ่เลขที่</label>
                                </div>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="about" class="form-label mb-3">บ้านเลขที่เจ้าของกิจการ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_house_no" name="business_owner_house_no" placeholder="" value="" required>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-6 form-group mb-3">
                                <label for="moo" class="form-label mb-3">หมู่<span class="text-danger">*</span></label>
                                <input type="number" class="form-control form-control-lg" id="business_owner_moo" name="business_owner_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="soi" class="form-label mb-3">ตรอก/ซอย</label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_soi" name="business_owner_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road" class="form-label mb-3">ถนน<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_road" name="business_owner_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district" class="form-label mb-3">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_sub_district" name="business_owner_sub_district" value="ศรีสุนทร" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district" class="form-label mb-3">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_district" name="business_owner_district" value="ถลาง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province" class="form-label mb-3">จังหวัด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_province" name="business_owner_province" value="ภูเก็ต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="telephone_number" class="form-label mb-3">โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_telephone_number" name="business_owner_telephone_number" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_owner_fax_number" class="form-label mb-3">โทรสาร</label>
                                <input type="text" class="form-control form-control-lg" id="business_owner_fax_number" name="business_owner_fax_number" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <hr>
                            </div>
                            <div class="col-12 form-group mb-3 ">
                                <label for="establishment_number" class="form-label mb-3">สถานประกอบการเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_house_no" name="business_house_no" placeholder="" value="" required>
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="moo" class="form-label mb-3">หมู่<span class="text-danger">*</span></label>
                                <input type="number" class="form-control form-control-lg" id="business_moo" name="business_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="soi" class="form-label mb-3">ตรอก/ซอย</label>
                                <input type="text" class="form-control form-control-lg" id="business_soi" name="business_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road" class="form-label mb-3">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_road" name="business_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district" class="form-label mb-3">ตำบล/แขวง</label>
                                <input type="text" class="form-control form-control-lg" id="business_sub_district" name="business_sub_district" value="ศรีสุนทร" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district" class="form-label mb-3">อำเภอ/เขต</label>
                                <input type="text" class="form-control form-control-lg" id="business_district" name="business_district" value="ถลาง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province" class="form-label mb-3">จังหวัด</label>
                                <input type="text" class="form-control form-control-lg" id="business_province" name="business_province" value="ภูเก็ต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="telephone_number" class="form-label mb-3">โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_telephone_number" name="business_telephone_number" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_fax_number" class="form-label mb-3">โทรสาร</label>
                                <input type="text" class="form-control form-control-lg" id="business_fax_number" name="business_fax_number" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-12">
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="radio" name="area_owner_type" id="is_owner" value="is_owner" required>
                                <label class="form-check-label" for="is_owner">เป็นเจ้าของสถานที่</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="radio" name="area_owner_type" id="is_tenant" value="is_tenant">
                                <label class="form-check-label" for="is_tenant">เป็นผู้เช่า</label>
                            </div>
                        </div>
                        <div class="col-12 form-group mb-3">
                            <label for="">ร class="form-label mb-3"ายละเอียดการเช่า</label>
                            <input type="text" class="form-control form-control-lg" id="rent_detail" name="rent_detail" value="">
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail" class="form-label mb-3">เอกสารแนบการเช่า<span class="text-danger">*</span></label>
                            <InputFile name="rent_document" />
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment" class="form-label mb-3">สถานประกอบการ(รวมทั้งอาคารประกอบการ)เนื้อที่ (ตารางเมตร)<span
                                        class="text-danger">*</span></label>
                                <input type="number" step="1" min="0" class="form-control form-control-lg" id="business_area" name="business_area" placeholder="" required value="">
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline mb-3">
                                    <label class="form-check-label" for="">
                                        อาคารประกอบการ
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="building" id="building_existing" value="building_existing">
                                    <label class="form-check-label" for="building_existing">มีอยู่เดิม</label>
                                </div>
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="radio" name="building" id="building_new" value="building_new">
                                    <label class="form-check-label" for="building_new">ก่อสร้างใหม่</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment" class="form-label mb-3">สถานที่ประกอบการอยู่ใกล้เคียงกับ<span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="business_nearby" name="business_nearby" placeholder="" required value="">
                                
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="work" class="form-label mb-3">ทำงานปกติตั้งแต่เวลา (น.)<span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-lg" id="open_time" name="open_time" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="time" class="form-label mb-3">ถึงเวลา (น.)<span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-lg" id="close_time" name="close_time" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="weekly" class="form-label mb-3">วันหยุดงานประจำสัปดาห์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="close_day" name="close_day" placeholder="" required value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label for="latitude" class="form-label mb-3">ละติจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="latitude" name="latitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="longitude" class="form-label mb-3">ลองจิจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="longitude" name="longitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 mt-2 mb-4">
                                <div id="map" style="height: 200px; background-color: green;"><strong>Map</strong></div>
                            </div>
                        </div>

                        <RegistrationFileUpload />

                    
                        <FormInstruction />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green btn-block w-100 text-white">ส่งข้อมูล</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>    
</template>

<style scoped>
    .alert-text {
        font-size: 0.75rem;
    }
</style>

<script setup>
    
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
    import RegistrationFileUpload from '@/components/RegistrationFileUpload.vue'
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import InputFile from '@/components/InputFile.vue'
    
</script>
