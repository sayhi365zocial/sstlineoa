<template>
    <section class="my-5 mx-2">
        <div class="container">
            <Progress :percentage="66" />
            <div class="row mb-3">
                <div class="col-12">
                    <div class="text-start fs-5 fw-bold">ยืนยันตัวตนของท่านผ่าน SMS OTP</div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
                        <div class="row g-2">
                            <div class="col-12 form-group">
                                <label for="first_name" class="form-label mb-3">กรุณากรอกรหัส OTP ที่ท่านได้รับทาง SMS</label>
                            </div>
                            <div class="col-7">
                                <input type="text" name="" id="" class="form-control form-control-lg" placeholder="รหัส OTP ที่ท่านได้รับ">
                            </div>
                            <div class="col-5">
                                <RouterLink to="/address" class="btn bg-theme-green btn-block w-100 h-100 text-white" style="line-height: 2rem;">ยืนยัน</RouterLink>
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
