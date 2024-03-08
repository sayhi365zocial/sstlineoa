<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องขออนุญาตก่อสร้าง</h1>
                </div>
            </div>
            <div class="row">
                <DateNow />
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
                       
                        <div class="row">
                            <div class="col-12">
                                <p>เจ้าของอาคาร/ตัวแทนเจ้าของอาคาร/สถานที่ก่อสร้าง</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="owner_firstname">ชื่อ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="owner_firstname" name="owner_firstname" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="owner_lastname">นามสกุล <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="owner_lastname" name="owner_lastname" value="" placeholder="" required>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">หมู่ที่ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="building_moo" name="building_moo" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ตำบล <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="" name="building_sub_district" value="" placeholder="ศรีสุนทร" readonly>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">อำเภอ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="" name="building_district" value="" placeholder="ถลาง" readonly>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="" name="building_province" value="" placeholder="ภูเก็ต" readonly>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ลักษณะอาคาร (ชั้น) <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="building_type" name="building_type" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">จำนวน (หลัง/คูหา) <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="building_qty" name="building_qty" value="" placeholder="" required>
                            </div>
                        </div>

                        <div class="row py-4">
                            <div class="col-12">
                                <h5 class="text-center">คำขออนุญาตก่อสร้างอาคาร ดัดแปลงอาคาร หรือรื้อถอนอาคาร</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-right">
                                <p>วัน / เดือน / ปี พ.ศ.</p>
                            </div>
                            <div class="col-12 text-right">
                                <p></p>
                            </div>
                        </div>
                        @include('form.personal_information')
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox"  id="is_business" name="is_business" value="">
                                    <label class="form-check-label" for="is_business">
                                        เป็นนิติบุคคลประเภท
                                    </label>
                                    <div class="p-2">
                                        <input type="text" class="form-control rounded-0" id="is_business_text" name="is_business_text" value="" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">จดทะเบียนเมื่อ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control rounded-0" id="registration_date" name="registration_date" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">เลขทะเบียน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_number" name="registration_number" value="" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="business_house_no">มีสำนักงานตั้งอยู่เลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_house_no" name="business_house_no" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_moo">หมู่ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="business_moo" name="business_moo" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_soi">ตรอก/ซอย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_soi" name="business_soi" value="" placeholder="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_road" name="business_road" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_sub_district" name="business_sub_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_district" name="business_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_province">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_province" name="business_province" value="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="registration_by">โดย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_by" name="registration_by" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_house_no">ผู้มีอำนาจลงชื่อแทนนิติบุคคล ผู้ขออนุญาตอยู่บ้านเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_house_no" name="registration_house_no" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_moo">หมู่ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="registration_moo" name="registration_moo" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_soi">ตรอก/ซอย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_soi" name="registration_soi" value="" placeholder="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_road" name="registration_road" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_sub_district" name="registration_sub_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_district" name="registration_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="registration_province">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="registration_province" name="registration_province" value="" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="to_receive">ขอยื่นคำขอรับใบอนุญาต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="to_receive" name="to_receive" value="" placeholder="" required>
                            </div>

                            <div class="col-12 form-group mb-3">
                                <p>ต่อเจ้าพนักงานท้องถิ่น ดังต่อไปนี้ </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="modify_house_no">ข้อ 1 ทำการก่อสร้างอาคาร/ดัดแปลงอาคาร/รื้อถอนอาคาร/บ้านเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_house_no" name="modify_house_no" value="" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="modidy_moo">หมู่ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="modidy_moo" name="modidy_moo" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_soi">ตรอก/ซอย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_soi" name="modify_soi" value="" placeholder="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_road" name="modify_road" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_sub_district" name="modify_sub_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_district" name="modify_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_province">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_province" name="modify_province" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_by">โดย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_by" name="modify_by" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="modify_deed_number">เป็นเจ้าของอาคารในที่ดินโฉนดที่ดิน เลขที่/นส.3กเลขที่/สด.1เลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_deed_number" name="modify_deed_number" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="modify_deed_owner">เป็นที่ดินของ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="modify_deed_owner" name="modify_deed_owner" value="" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>ข้อ 2 เป็นอาคาร</p>
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="building_target_type">(1) ชนิด <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="building_target_type" name="building_target_type" value="" placeholder="" required>
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="building_target_qty">จำนวน <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="building_target_qty" name="building_target_qty" value="" placeholder="" required>
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="building_target_purpose">เพื่อใช้เป็น <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="building_target_purpose" name="building_target_purpose" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_target_car_parking_qty">โดยมีที่จอดรถ ที่กลับรถ และทางเข้าออกของรถ จำนวน (คัน) <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="building_target_car_parking_qty" name="building_target_car_parking_qty" value="" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>ตามแผนผังบริเวณ แบบแปลน รายการประกอบแปลน และรายการคำนวณที่แนบมาพร้อมนี้</p>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="engineer_name">ข้อ 3 มีผู้ควบคุมงานชื่อ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="engineer_name" name="engineer_name" value="" placeholder="" required>
                            </div>
                            <div class="col-12">
                                <p>เป็นผู้ออกแบบ และคำนวณ</p>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="deadline">ข้อ 4 กำหนดแล้วเสร็จใน (วัน) นับตั้งแต่วันที่ได้รับใบอนุญาต<span class="text-danger">*</span></label>
                                <input type="date" class="form-control rounded-0" id="deadline" name="deadline" value="" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                เอกสารหลักฐานที่ท่านต้องจัดเตรียม
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>แบบแปลนพร้อมแผนผัง จำนวน 3 ชุด </li>
                                    <li>คำร้องขออนุญาตปลูกสร้างอาคาร (แบบ ข.1)</li>
                                    <li>หนังสือมอบอำนาจ (กรณีที่ยื่นขออนุญาตเรื่องแทนเจ้าของอาคารที่ก่อสร้าง)</li>
                                    <li>หนังสือยินยอมให้ปลูกสร้างอาคารในที่ดิน (กรณีจะก่อสร้างในที่ดินของผู้อื่น)</li>
                                    <li>หนังสือสำคัญแสดงการยินยอมให้ปลูกสร้างอาคารใช้ผังร่วมกัน</li>
                                    <li>สำเนาโฉนด / น.ส. 3 / น.ส. 3ก / ส.ค.1 จำนวน 1 ชุด</li>
                                    <li>หนังสือแสดงความยินยอม และรับรองของผู้ประกอบวิชาชีพวิศวกรรมควบคุม</li>
                                    <li>หนังสือแสดงความยินยอม และรับรองของผู้ประกอบวิชาชีพสถาปัตยกรรม</li>
                                    <li>หนังสือแสดงความยินยอมของผู้ควบคุมงาน </li>
                                    <li>สำเนาทะเบียนบ้านผู้ขออนุญาต </li>
                                    <li>ผู้รับมอบอำนาจ </li>
                                    <li>เจ้าของที่ดิน </li>
                                    <li>สำเนาบัตรประจำตัวประชาชนผู้ขออนุญาต </li>
                                    <li>หลักฐานอื่นๆ </li>

                                    <li>(1) แผนผังบริเวณ แบบแปลน รายการประกอบแบบแปลน </li>
                                    <li>(2) รายการคำนวณหนึ่งชุด (กรณีที่เป็นอาคารสาธารณะ อาคารพิเศษ หรืออาคารที่ก่อสร้างวัตถุถาวร และวัตถุทนไฟเป็นส่วนใหญ่) </li>
                                    <li>(3) หนังสือแสดงความเป็นตัวแทนของเจ้าของอาคาร (กรณีที่ตัวแทนเจ้าของอาคารเป็นผู้ขออนุญาต) </li>
                                    <li>(4) สำเนาหนังสือรับรองการจดทะเบียน วัตถุประสงค์ และผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาต ที่ออกให้ไม่เกินหกเดือน (กรณีที่นิติบุคคลเป็นผู้ขออนุญาต) </li>
                                    <li>(5) หนังสือแสดงว่าเป็นผู้จัดการหรือผู้แทนซึ่งเป็นผู้ดำเนินกิจการของนิติบุคคล (กรณีที่นิติบุคคลเป็นผู้ขออนุญาต) </li>
                                    <li>(6) หนังสือแสดงความยินยอมและรับรองของผู้ออกแบบและคำนวณอาคาร พร้อมทั้งสำเนาใบอนุญาต เป็นผู้ประกอบวิชาวิศวกรรมควบคุม หรือวิชาชีพสถาปัตยกรรมควบคุม (กรณีที่เป็นอาคารมีลักษณะ ขนาด อยู่ในประเภทเป็นวิชาชีพวิศวกรรมควบคุมหรือวิชาชีพสถาปัตยกรรมควบคุม แล้วแต่กรณี)</li>
                                    <li>(7) สำเนาหรือภาพถ่ายโฉนดที่ดิน (เลขที่/น.ส.3เลขที่/น.ส.3ก เลขที่/ส.ค.เลขที่ ) หรือหนังสือยินยอมของเจ้าของที่ดิน </li>
                                    <li>(8) หนังสือแสดงความยินยอมของผู้ควบคุมงานตามข้อ 3 </li>
                                    <li>(9) สำเนาภาพถ่ายใบอนุญาตเป็นประกอบวิชาชีพวิศวกรรมควบคุม หรือวิชาชีพสถาปัตยกรรมควบคุมของผู้ควบคุมงาน (เฉพาะกรณีที่เป็นอาคารมีลักษณะ ขนาด อยู่ในประเภทเป็นวิชาชีพวิศวกรรมควบคุมหรือวิชาชีพสถาปัตยกรรมควบคุม แล้วแต่กรณี)</li>
                                    <li>(10) เอกสารอื่นๆ (ถ้ามี)</li>
                                </ul>
                            </div>
                        </div>

                       <FormInstruction />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green btn-block rounded-0 text-white">ส่งข้อมูล</button>
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

</script>
