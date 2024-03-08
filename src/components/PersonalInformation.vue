<template>
    <div class="row">
    <div class="col-12">
        <h6>ข้อมูล</h6>
    </div>
    </div>
    <div class="row">
        <div class="col-12 form-group mb-3">
            <label for="gender">คำนำหน้านาม <span class="text-danger">*</span></label>
            <input type="text" class="form-control" name="gender" value="" required>
        </div>
    </div>
    <div class="row">
        <div class="col-12 form-group mb-3">
            <label for="first_name">ชื่อ <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="first_name" name="first_name" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="last_name">นามสกุล <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="last_name" name="last_name" value="" required>
        </div>
    </div>
    <div class="row">
    <div class="col-12 form-group mb-3 ">
        <label for="id_card">เลขประจำตัวประชาชน <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="id_card" name="id_card" value="" required>
    </div>
    <div class="col-12 form-group mb-3">
            <label for="date_of_birth">วัน / เดือน / ปี เกิด <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="date_of_birth" name="date_of_birth" value="" required>
        </div>
    </div>
    <div class="row">
        <div class="col-12 form-group mb-3">
            <label for="house_no">อยู่บ้านเลขที่ <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="house_no" name="house_no" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="soi">ซอย</label>
            <input type="text" class="form-control" id="soi" name="soi" value="">
        </div>
        <div class="col-12 form-group mb-3">
            <label for="road">ถนน <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="road" name="road" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="moo">หมู่</label>
            <input type="text" class="form-control" id="moo" name="moo" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="sub_district">ตำบล</label>
            <input type="text" class="form-control" id="sub_district" name="sub_district" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="district">อำเภอ</label>
            <input type="text" class="form-control" id="district" name="district" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="province">จังหวัด</label>
            <input type="text" class="form-control" id="province" name="province" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="zip_code">รหัสไปรษณีย์</label>
            <input type="text" class="form-control" id="zip_code" name="zip_code" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="fax">เบอร์โทรศัพท์</label>
            <input type="text" class="form-control" id="telephone_number" name="telephone_number" value="" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="fax">โทรสาร</label>
            <input type="text" class="form-control" id="fax" name="fax" value="">
        </div>
    </div>
</template>

<script setup>
</script>

<style>
</style>