<template>
    <div class="row">
    <div class="col-12">
        <h6>ข้อมูล</h6>
    </div>
    </div>
    <div class="row">
        <div class="col-12 form-group mb-3">
            <label for="gender" class="form-label mb-3">คำนำหน้านาม <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" name="gender" value="" placeholder="คำนำหน้านาม" required>
        </div>
    </div>
    <div class="row">
        <div class="col-12 form-group mb-3">
            <label for="first_name" class="form-label mb-3">ชื่อ <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" id="first_name" name="first_name" value="" placeholder="ชื่อ" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="last_name" class="form-label mb-3">นามสกุล <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" id="last_name" name="last_name" value="" placeholder="นามสกุล" required>
        </div>
    </div>
    <div class="row">
    <div class="col-12 form-group mb-3 ">
        <label for="id_card" class="form-label mb-3">เลขประจำตัวประชาชน <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg" id="id_card" name="id_card" value="" placeholder="เลขประจำตัวประชาชน" required>
    </div>
    <div class="col-12 form-group mb-3">
            <label for="date_of_birth" class="form-label mb-3">วัน / เดือน / ปี เกิด <span class="text-danger">*</span></label>
            <input type="date" class="form-control form-control-lg" id="date_of_birth" name="date_of_birth" value="" placeholder="วัน / เดือน / ปี เกิด" required>
        </div>
    </div>
    <div class="row">
        <div class="col-12 form-group mb-3">
            <label for="house_no" class="form-label mb-3">อยู่บ้านเลขที่ <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" id="house_no" name="house_no" value="" placeholder="อยู่บ้านเลขที่" required>
        </div>
        <div class="col-6 form-group mb-3">
            <label for="moo" class="form-label mb-3">หมู่</label>
            <input type="text" class="form-control form-control-lg" id="moo" name="moo" value="" placeholder="หมู่" required>
        </div>
        <div class="col-6 form-group mb-3">
            <label for="soi" class="form-label mb-3">ตรอก/ซอย</label>
            <input type="text" class="form-control form-control-lg" id="soi" name="soi" value="" placeholder="ตรอก/ซอย">
        </div>
        <div class="col-12 form-group mb-3">
            <label for="road" class="form-label mb-3">ถนน <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" id="road" name="road" value="" placeholder="ถนน" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="sub_district" class="form-label mb-3">ตำบล</label>
            <input type="text" class="form-control form-control-lg" id="sub_district" name="sub_district" value="" placeholder="ตำบล" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="district" class="form-label mb-3">อำเภอ</label>
            <input type="text" class="form-control form-control-lg" id="district" name="district" value="" placeholder="อำเภอ" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="province" class="form-label mb-3">จังหวัด</label>
            <input type="text" class="form-control form-control-lg" id="province" name="province" value="" placeholder="จังหวัด" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="zip_code" class="form-label mb-3">รหัสไปรษณีย์</label>
            <input type="text" class="form-control form-control-lg" id="zip_code" name="zip_code" value="" placeholder="รหัสไปรษณีย์" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="fax" class="form-label mb-3">เบอร์โทรศัพท์</label>
            <input type="text" class="form-control form-control-lg" id="telephone_number" name="telephone_number" value="" placeholder="เบอร์โทรศัพท์" required>
        </div>
        <div class="col-12 form-group mb-3">
            <label for="fax" class="form-label mb-3">โทรสาร</label>
            <input type="text" class="form-control form-control-lg" id="fax" name="fax" value="" placeholder="โทรสาร">
        </div>
    </div>
</template>

<script setup>
</script>

<style>
</style>