<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ร้องเรียน / ร้องทุกข์ทั่วไป</h1>
                </div>
            </div>
          <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="topic">เรื่อง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="topic" name="topic" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="to">เรียน</label>
                                <input type="text" class="form-control form-control-lg" id="to" name="to" value="นายกเทศมนตรีตําบลศรีสุนทร" placeholder="นายกเทศมนตรีตําบลศรีสุนทร" disabled>
                            </div>
                        </div>
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">ได้รับความเดือดร้อนเนื่องจาก <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="detail" name="detail" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">1. สำเนาบัตรประจำตัวประชาชน <span class="text-danger">*</span></label>
                                <InputFile name="applicant_id_card_file_path" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">2. สำเนาทะเบียนบ้านฉบับเจ้าบ้าน <span class="text-danger">*</span></label>
                                <InputFile name="target_house_registation_file_path" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">3. บัญชีรายชื่อผู้ได้รับความเดือดร้อน</label>
                                <InputFile name="other_applicant_id_card_file_path" />
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-12 form-group mb-3">
                                <label for="text">4. เอกสารอื่นๆ (ระบุ)</label>
                                <InputFile name="other_file_path" />
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

<style>
</style>

<script setup>
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
    import InputFile from '@/components/InputFile.vue'
</script>
