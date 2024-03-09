<template>
    <section class="my-5 mx-2">
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
                                <p class="fs-5">เรียน นายกเทศมนตรีตำบลศรีสุนทร</p>
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
                                <label for="house_no" class="form-label mb-3">อยู่บ้านเลขที่</label>
                                <input type="text" class="form-control form-control-lg" id="for_house_no" name="for_house_no" placeholder="อยู่บ้านเลขที่" value="" required>
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="moo" class="form-label mb-3">หมู่</label>
                                <input type="number" class="form-control form-control-lg" id="for_moo" name="for_moo" value="" placeholder="หมู่">
                            </div>
                            <div class="col-6 form-group mb-3">
                                <label for="soi" class="form-label mb-3">ตรอก/ซอย</label>
                                <input type="text" class="form-control form-control-lg" id="for_soi" name="for_soi" value="" placeholder="ซอย">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road" class="form-label mb-3">ถนน</label>
                                <input type="text" class="form-control form-control-lg" id="for_road" name="for_road" value="" placeholder="ถนน">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district" class="form-label mb-3">ตำบล/แขวง</label>
                                <input type="text" class="form-control form-control-lg" id="for_sub_district" name="for_sub_district" value="" placeholder="ตำบล/แขวง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district" class="form-label mb-3">อำเภอ/เขต</label>
                                <input type="text" class="form-control form-control-lg" id="for_district" name="for_district" value="" placeholder="อำเภอ/เขต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province" class="form-label mb-3">จังหวัด</label>
                                <input type="text" class="form-control form-control-lg" id="for_province" name="for_province" value="" placeholder="จังหวัด" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="detail" class="form-label mb-3">บันทึกการตรวจสอบเอกสาร</label>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail" class="form-label mb-3">สำเนาบัตรประชาชนผู้ขอ<span class="text-danger">*</span></label>
                                <InputFile name="applicant_idcard_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail" class="form-label mb-3">สำเนาทะเบียนบ้านผู้ขอ<span class="text-danger">*</span></label>
                                <InputFile name="applicant_house_registation_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail" class="form-label mb-3">สำเนาทะเบียนบ้านที่ขอใช้ (หากไม่มีที่อยู่เดียวกับผู้ขอ)</label>
                                <InputFile name="target_house_registation_file_path"/>
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
                                <button type="submit" class="btn w-100 bg-theme-green btn-block text-white">ส่งข้อมูล</button>
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
    import InputFile from '@/components/InputFile.vue'
</script>
