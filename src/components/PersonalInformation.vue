<template>
    <div class="row">
    <div class="col-12">
        <h6>ข้อมูล</h6>
    </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 form-group">
            <label for="gender">คำนำหน้านาม <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-0" name="gender" value="{{ Auth::user()->gender }}" required>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 form-group">
            <label for="first_name">ชื่อ <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-0" id="first_name" name="first_name" value="{{ Auth::user()->firstname }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="last_name">นามสกุล <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-0" id="last_name" name="last_name" value="{{ Auth::user()->lastname }}" required>
        </div>
    </div>
    <div class="row">
    <div class="col-12 col-md-6 form-group ">
        <label for="id_card">เลขประจำตัวประชาชน <span class="text-danger">*</span></label>
        <input type="text" class="form-control rounded-0" id="id_card" name="id_card" value="{{ Auth::user()->id_card }}" required>
    </div>
    <div class="col-12 col-md-6 form-group">
            <label for="date_of_birth">วัน / เดือน / ปี เกิด <span class="text-danger">*</span></label>
            <input type="date" class="form-control rounded-0" id="date_of_birth" name="date_of_birth" value="{{ Auth::user()->date_of_birth }}" required>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 form-group">
            <label for="house_no">อยู่บ้านเลขที่ <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-0" id="house_no" name="house_no" value="{{ Auth::user()->house_no }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="soi">ซอย</label>
            <input type="text" class="form-control rounded-0" id="soi" name="soi" value="{{ Auth::user()->soi }}">
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="road">ถนน <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-0" id="road" name="road" value="{{ Auth::user()->road }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="moo">หมู่</label>
            <input type="text" class="form-control rounded-0" id="moo" name="moo" value="{{ Auth::user()->moo }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="sub_district">ตำบล</label>
            <input type="text" class="form-control rounded-0" id="sub_district" name="sub_district" value="{{ Auth::user()->sub_district }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="district">อำเภอ</label>
            <input type="text" class="form-control rounded-0" id="district" name="district" value="{{ Auth::user()->district }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="province">จังหวัด</label>
            <input type="text" class="form-control rounded-0" id="province" name="province" value="{{ Auth::user()->province }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="zip_code">รหัสไปรษณีย์</label>
            <input type="text" class="form-control rounded-0" id="zip_code" name="zip_code" value="{{ Auth::user()->zip_code }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="fax">เบอร์โทรศัพท์</label>
            <input type="text" class="form-control rounded-0" id="telephone_number" name="telephone_number" value="{{ Auth::user()->telephone }}" required>
        </div>
        <div class="col-12 col-md-6 form-group">
            <label for="fax">โทรสาร</label>
            <input type="text" class="form-control rounded-0" id="fax" name="fax" value="{{ Auth::user()->fax }}">
        </div>
    </div>
</template>

<script setup>
</script>

<style>
</style>