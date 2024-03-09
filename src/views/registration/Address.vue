<template>
    <section class="my-5 mx-2">
        <div class="container">
            <Progress :percentage="100" />
            <div class="row">
                <div class="col-12">
                    <div class="text-start fs-5 fw-bold">กรุณากรอกรายละเอียดข้อมูลสำหรับการลงทะเบียน</div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
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
                            
                        </div>
                        <div class="row mb-5">
                            <div class="col-12">
                                <RouterLink to="/" class="btn bg-theme-green btn-block w-100 text-white">Submit</RouterLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>    
</template>

<style scoped>
</style>

<script setup>
    import Progress from '@/components/Progress.vue';
</script>
