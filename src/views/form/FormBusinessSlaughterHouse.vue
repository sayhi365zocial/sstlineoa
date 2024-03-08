<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">แบบแจ้งและตอบรับการแจ้งฆ่าสัตว์</h1>
                </div>
            </div>
            <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12">
                                <h6>เรื่อง แจ้งการฆ่าสัตว์</h6>
                            </div>
                        </div>
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">มีความประสงค์จะฆ่าสัตว์ ชนิด <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="animal_type" name="animal_type" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">จำนวน (ตัว) <span class="text-danger">*</span></label>
                                <input type="number" step="1" min="0" max="9999" class="form-control " id="qty" name="qty" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ตั้งแต่วันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control " id="from_date" name="from_date" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ตั้งแต่เวลา <span class="text-danger">*</span></label>
                                <input type="time" class="form-control " id="from_time" name="from_time" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">สิ้นสุดวันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control " id="to_date" name="to_date" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">สิ้นสุดเวลา <span class="text-danger">*</span></label>
                                <input type="time" class="form-control " id="to_time" name="to_time" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ในโรงฆ่าสัตว์ชื่อ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_name" name="business_name" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ใบอนุญาตประกอบกิจการฆ่าสัตว์เลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_license" name="business_license" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_house_no">อยู่บ้านเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_house_no" name="business_house_no" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_moo">หมู่ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control " id="business_moo" name="business_moo" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_soi">ตรอก/ซอย</label>
                                <input type="text" class="form-control " id="business_soi" name="business_soi" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_road" name="business_road" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_sub_district" name="business_sub_district" value="">
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_district" name="business_district" value="">
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_province">จังหวัด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_province" name="business_province" value="">
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_telephone_number">โทรศัพท์ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="business_telephone_number" name="business_telephone_number" placeholder="" value="" required>
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>และมีรายละเอียดแหล่งที่มาของสัตว์ ดังนี้</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">๑. ชื่อฟาร์ม/ชื่อผู้ประกอบการ</label>
                                <input type="text" class="form-control " id="farm_owner_name" name="farm_owner_name" placeholder="" value="" required>
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="farm_house_no">ที่ตั้งฟาร์มเลขที่ </label>
                                <input type="text" class="form-control " id="farm_house_no" name="farm_house_no" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="farm_moo">หมู่ </label>
                                <input type="number" class="form-control " id="farm_moo" name="farm_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="farm_soi">ตรอก/ซอย </label>
                                <input type="text" class="form-control " id="farm_soi" name="farm_soi" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="farm_road">ถนน </label>
                                <input type="text" class="form-control " id="farm_road" name="farm_road" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="farm_sub_district">ตำบล/แขวง </label>
                                <input type="text" class="form-control " id="farm_sub_district" name="farm_sub_district" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="farm_district">อำเภอ/เขต </label>
                                <input type="text" class="form-control " id="farm_district" name="farm_district" placeholder="" value="" required>
                                
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="farm_province">จังหวัด</label>
                                <input type="text" class="form-control " id="farm_province" name="farm_province" value="" required>
                                
                            </div>
                        </div>
                        
                        <div class="row">
                        <div class="col-12">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" for="">
                                ฆ่าสัตว์ ชนิดใด
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input " type="checkbox" name="animal_type_pig" value="animal_type_pig" id="animal_type_pig">
                                <label class="form-check-label" for="animal_type_pig">
                                สุกร
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input " type="checkbox" name="animal_type_cow" value="animal_type_cow" id="animal_type_cow">
                                <label class="form-check-label" for="animal_type_cow">
                                วัว
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input " type="checkbox" name="animal_type_buffalo" value="animal_type_buffalo" id="animal_type_buffalo">
                                <label class="form-check-label" for="animal_type_buffalo">
                                กระบือ
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input " type="checkbox" name="animal_type_goat" value="animal_type_goat" id="animal_type_goat">
                                <label class="form-check-label" for="animal_type_goat">
                                แพะ
                                </label>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">เลขทะเบียนฟาร์มมาตรฐาน ที่ (ถ้ามี) หรือตามเอกสารแนบท้าย (แสดงรายละเอียดแหล่งที่มาของสัตว์)<span class="text-danger">*</span></label>
                                <input type="text" class="form-control " id="farm_license" name="farm_license" placeholder="" value="" required>
                                
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-12">
                                <hr>
                            </div>
                            <div class="col-12">
                                <h6>หลักฐานที่นำมาประกอบการพิจารณาคำขออนุญาต</h6>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาบัตรประจำตัวประชาชน ผู้มายื่นคำขอ<span class="text-danger">*</span></label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input " id="applicant_id_card_file_path" name="applicant_id_card_file_path" required accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
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
</script>
