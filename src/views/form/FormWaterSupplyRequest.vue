<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องขอใช้น้ำประปา</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12">
                                <p>เรียน นายกเทศมนตรีตำบลศรีสุนทร</p>
                            </div>
                        </div>
                        <PersonalInformation />
                        <div class="row">
                            <div class="col-12">
                                <p class="text-center">มีความประสงค์ให้ส่วนการประปาเทศบาลตำบลศรีสุนทรดำเนินการดังต่อไปนี้</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="request_water_meter_installation" id="request_water_meter_installation" name="request_water_meter_installation" checked required>
                                    <label class="form-check-label" for="request_water_meter_installation">
                                        ขอติดตั้งมาตรวัดน้ำ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="house_no">อยู่บ้านเลขที่</label>
                                <input type="text" class="form-control" id="for_house_no" name="for_house_no" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="moo">หมู่</label>
                                <input type="number" class="form-control" id="for_moo" name="for_moo" value="" placeholder="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="soi">ตรอก/ซอย</label>
                                <input type="text" class="form-control" id="for_soi" name="for_soi" value="" placeholder="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road">ถนน</label>
                                <input type="text" class="form-control" id="for_road" name="for_road" value="" placeholder="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district">ตำบล/แขวง</label>
                                <input type="text" class="form-control" id="for_sub_district" name="for_sub_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district">อำเภอ/เขต</label>
                                <input type="text" class="form-control" id="for_district" name="for_district" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province">จังหวัด</label>
                                <input type="text" class="form-control" id="for_province" name="for_province" value="" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="detail">บันทึกการตรวจสอบเอกสาร</label>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาบัตรประชาชนผู้ขอ<span class="text-danger">*</span></label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="" name="applicant_idcard_file_path" required accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                                </div>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาทะเบียนบ้านผู้ขอ<span class="text-danger">*</span></label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="" name="applicant_house_registation_file_path" required accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                                </div>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาทะเบียนบ้านที่ขอใช้ (หากไม่มีที่อยู่เดียวกับผู้ขอ)</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="" name="target_house_registation_file_path" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <p class="text-center">โดยข้าพเจ้ายินดีที่จะให้ความสะดวกแก่เจ้าหน้าที่ส่วนประปา เทศบาลตำบลศรีสุนทร
                                    ในการสำรวจ และปฏิบัติตามระเบียบข้อบังคับของเทศบาลตำบลศรีสุนทร ในการขอใช้น้ำประปาทุกประการ</p>
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
