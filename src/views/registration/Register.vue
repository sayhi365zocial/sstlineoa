<template>
    <section class="my-5 mx-2">
        <div class="container">
            <Progress :percentage="33" />
            <div class="row mb-3">
                <div class="col-12">
                    <div class="text-start fs-5 fw-bold">กรุณากรอกรายละเอียดข้อมูลสำหรับการลงทะเบียน</div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="gender" class="form-label mb-3">คำนำหน้านาม <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="1" autocomplete="off" checked>
                                    <label class="btn btn-outline-success" for="btnradio1">นาย</label>
    
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="2" autocomplete="off">
                                    <label class="btn btn-outline-success" for="btnradio2">นาง</label>
    
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="3" autocomplete="off">
                                    <label class="btn btn-outline-success" for="btnradio3">นางสาว</label>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" value="4" autocomplete="off">
                                    <label class="btn btn-outline-success" for="btnradio4">อื่น ๆ</label>
                                </div>
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
                            <div class="col-12 form-group mb-3">
                                <label for="fax" class="form-label mb-3">เบอร์โทรศัพท์</label>
                                <input type="text" class="form-control form-control-lg" id="telephone_number" name="telephone_number" value="" placeholder="เบอร์โทรศัพท์" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="fax" class="form-label mb-3">โทรสาร</label>
                                <input type="text" class="form-control form-control-lg" id="fax" name="fax" value="โทรสาร" placeholder="">
                            </div>
                        </div>
                        
                        <div class="row mb-5">
                            <div class="col-12">
                                <RouterLink to="/otp" class="btn bg-theme-green btn-block w-100 text-white">ถัดไป</RouterLink>
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
    import Progress from '@/components/Progress.vue';
</script>
