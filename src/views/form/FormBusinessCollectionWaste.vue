<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ใบรับแจ้งประกอบกิจการคำขอรับใบอนุญาตรับทำการเก็บขยะมูลฝอยและขนสิ่งปฏิกูล</h1>
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
                                <h6>ขอยื่นคำขอรับใบอนุญาตประกอบกิจการรับทำการเก็บและขนสิ่งปฏิกูลต่อเจ้าพนักงานท้องถิ่น
                                    รายละเอียดดังนี้</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_individual" value="request_by_individual" required>
                                    <label class="form-check-label" for="request_by_individual">
                                        บุคคลธรรมดา
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_business" value="request_by_business">
                                    <label class="form-check-label" for="request_by_business">
                                        นิติบุคคล หรือ รับมอบอำนาจ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment_name">ชื่อสถานประกอบการ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_name" name="business_name" placeholder="" value=""  required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_about">กิจการเกี่ยวกับ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_about" name="business_about" placeholder="" value=""  required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="owner_name">เจ้าของกิจการคือ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_name" name="business_owner_name" placeholder="" value=""  required>
                            </div>
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="is_house_no_type" id="is_house_no" value="is_house_no">
                                    <label class="form-check-label" for="is_house_no">บ้านเลขที่</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="is_house_no_type" id="is_head_quarter_no" value="is_head_quarter_no">
                                    <label class="form-check-label" for="is_head_quarter_no">สำนักงานใหญ่เลขที่</label>
                                </div>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="about">บ้านเลขที่เจ้าของกิจการ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_house_no" name="business_owner_house_no" placeholder="" value="" required>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-12 form-group mb-3">
                                <label for="moo">หมู่<span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="business_owner_moo" name="business_owner_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="soi">ตรอก/ซอย</label>
                                <input type="text" class="form-control" id="business_owner_soi" name="business_owner_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road">ถนน<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_road" name="business_owner_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_sub_district" name="business_owner_sub_district" value="ศรีสุนทร" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_district" name="business_owner_district" value="ถลาง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province">จังหวัด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_province" name="business_owner_province" value="ภูเก็ต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="telephone_number">โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_owner_telephone_number" name="business_owner_telephone_number" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_owner_fax_number">โทรสาร</label>
                                <input type="text" class="form-control" id="business_owner_fax_number" name="business_owner_fax_number" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <hr>
                            </div>
                            <div class="col-12 form-group mb-3 ">
                                <label for="establishment_number">สถานประกอบการเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_house_no" name="business_house_no" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="moo">หมู่<span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="business_moo" name="business_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="soi">ตรอก/ซอย</label>
                                <input type="text" class="form-control" id="business_soi" name="business_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_road" name="business_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district">ตำบล/แขวง</label>
                                <input type="text" class="form-control" id="business_sub_district" name="business_sub_district" value="ศรีสุนทร" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district">อำเภอ/เขต</label>
                                <input type="text" class="form-control" id="business_district" name="business_district" value="ถลาง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province">จังหวัด</label>
                                <input type="text" class="form-control" id="business_province" name="business_province" value="ภูเก็ต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="telephone_number">โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_telephone_number" name="business_telephone_number" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_fax_number">โทรสาร</label>
                                <input type="text" class="form-control" id="business_fax_number" name="business_fax_number" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-12">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="area_owner_type" id="is_owner" value="is_owner" required>
                                <label class="form-check-label" for="is_owner">เป็นเจ้าของสถานที่</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="area_owner_type" id="is_tenant" value="is_tenant">
                                <label class="form-check-label" for="is_tenant">เป็นผู้เช่า</label>
                            </div>
                        </div>
                        <div class="col-12 form-group mb-3">
                            <label for="">รายละเอียดการเช่า</label>
                            <input type="text" class="form-control" id="rent_detail" name="rent_detail" value="">
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">เอกสารแนบการเช่า<span class="text-danger">*</span></label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="rent_document" name="rent_document" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment">สถานประกอบการ(รวมทั้งอาคารประกอบการ)เนื้อที่ (ตารางเมตร)<span
                                        class="text-danger">*</span></label>
                                <input type="number" step="1" min="0" class="form-control" id="business_area" name="business_area" placeholder="" required value="">
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="">
                                        อาคารประกอบการ
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="building" id="building_existing" value="building_existing">
                                    <label class="form-check-label" for="building_existing">มีอยู่เดิม</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="building" id="building_new" value="building_new">
                                    <label class="form-check-label" for="building_new">ก่อสร้างใหม่</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment">สถานที่ประกอบการอยู่ใกล้เคียงกับ<span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="business_nearby" name="business_nearby" placeholder="" required value="">
                                
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" for="">
                                    ประเภท
                                </label>
                            </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="business_collect" id="collect_garbage" value="collect_garbage">
                                    <label class="form-check-label" for="collect_garbage">เก็บขนขยะมูลฝอย</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="business_collect" id="collect_waster" value="collect_waster">
                                    <label class="form-check-label" for="collect_waster">เก็บขนสิ่งปฏิกูล</label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        
                        <div class="row">
                            <div class="col-12">
                                <h6>การควบคุมมลพิษก่อนปล่อยออกมาสู่ภายนอก (ถ้ามี)</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="sewerage_existing" id="sewerage_existing" name="sewerage_existing">
                                    <label class="form-check-label" for="">
                                        การบำบัดหรือปรับปรุงคุณภาพน้ำเสีย
                                    </label>
                                    <div class="p-2">
                                        <input type="text" class="form-control" id="sewerage_existing_text" name="sewerage_existing_text" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="air_pollution_existing" id="air_pollution_existing" name="air_pollution_existing">
                                    <label class="form-check-label" for="">
                                        มลพิษอากาศ / ฝุ่นละออง
                                    </label>
                                    <div class="p-2">
                                        <input type="text" class="form-control" id="air_pollution_existing_text" name="air_pollution_existing_text" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="grease_trap_existing" id="grease_trap_existing" name="grease_trap_existing">
                                    <label class="form-check-label" for="">
                                        บ่อดักไขมัน
                                    </label>
                                    <div class="p-2">
                                        <input type="text" class="form-control" id="grease_trap_existing_text" name="grease_trap_existing_text" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment">อื่นๆ<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="other" name="other" placeholder="">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="work">ทำงานปกติตั้งแต่เวลา (น.)<span class="text-danger">*</span></label>
                                <input type="time" class="form-control" id="open_time" name="open_time" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="time">ถึงเวลา (น.)<span class="text-danger">*</span></label>
                                <input type="time" class="form-control" id="close_time" name="close_time" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="weekly">วันหยุดงานประจำสัปดาห์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="close_day" name="close_day" placeholder="" required value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label for="latitude">ละติจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="latitude" name="latitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="longitude">ลองจิจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="longitude" name="longitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 mt-2 mb-4">
                                <div id="map" style="height: 500px;"></div>
                            </div>
                        </div>
                        
                        <RegistrationFileUpload />

                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">รูปทะเบียนรถ</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="car_registration_book_image" name="car_registration_book_image" accept="image/*,application/pdf" required>
                                    <label class="custom-file-label" for="car_registration_book_image">เลือกไฟล์รูปถ่าย</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สมุดคู่มือการจดทะเบียนรถ</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="car_manual_book_image" name="car_manual_book_image" accept="image/*,application/pdf" required>
                                    <label class="custom-file-label" for="car_manual_book_image">เลือกไฟล์รูปถ่าย</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">รายละเอียดการจดทะเบียนรถ</label>
                                <textarea name="car_registration_detail" class="form-control" id="car_registration_detail" rows="3" required></textarea>
                            </div>
                        </div>
                        

                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">รูปรถ</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="car_image" name="car_image" accept="image/*,application/pdf" required>
                                    <label class="custom-file-label" for="car_image">เลือกไฟล์รูปถ่าย</label>
                                </div>
                            </div>
                        </div>

                        <FormInstruction />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green btn-block text-white">ส่งข้อมูล</button>
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
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
    import RegistrationFileUpload from '@/components/RegistrationFileUpload.vue'
</script>
