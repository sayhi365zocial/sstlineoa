<template>
<div class="row">
    <div class="col-12">
        <hr>
    </div>
    <div class="col-12">
        <h6>หลักฐานที่นำมาประกอบการพิจารณาคำขออนุญาต</h6>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาบัตรประจำตัวประชาชน ผู้มายื่นคำขอ<span class="text-danger">*</span></label>
        <InputFile name="applicant_id_card_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาทะเบียนบ้าน ผู้มายื่นคำขอ<span class="text-danger">*</span></label>
        <InputFile name="applicant_house_registration_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาทะเบียนบ้านที่ตั้งสถานประกอบการ<span class="text-danger">*</span></label>
        <InputFile name="target_house_registation_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาบัตรประจำตัวประชาชน เจ้าของกิจการ<span class="text-danger">*</span></label>
        <InputFile name="owner_id_card_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาทะเบียนบ้าน เจ้าของกิจการ<span class="text-danger">*</span></label>
        <InputFile name="owner_house_registration_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาสัญญาเช่า<span class="text-danger">*</span></label>
        <InputFile name="house_rent_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนารับรองการจดทะเบียนนิติบุคคล<span class="text-danger">*</span></label>
        <InputFile name="registration_business_file_path"/>
    </div>
    <div class="col-12 mb-2 form-group">
        <label for="detail">สำเนาบัตรประจำตัวของผู้แทนนิติบุคคล<span class="text-danger">*</span></label>
        <InputFile name="business_representor_file_path"/>
    </div>
</div>

</template>

<style>
</style>

<script setup>
import InputFile from './InputFile.vue'
</script>