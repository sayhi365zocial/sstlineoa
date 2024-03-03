<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องทั่วไป</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-end">
                        <div class="bg-secondary py-2 px-3 rounded-2">
                            05 / กุมภาพันธ์ / 2567
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form action="" method="post">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">* เรื่อง</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="ระบุเรื่องที่ต้องการร้องเรียน">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">เรียน</label>
                            <input type="text" class="form-control disabled" id="formGroupExampleInput2" placeholder="นายกเทศมนตรีตำบลศรีสุนทร" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">มีความประสงค์</label>
                            <textarea name="" id="" class="form-control" rows="10" placeholder="ระบุความประสงค์ของท่าน"></textarea>
                        </div>
                        <div class="alert alert-warning alert-text" role="alert">
                            ข้อปฏิบัติการใช้งานแบบฟอร์มออนไลน์
                            <ol class="ps-3">
                                <li>กรอกข้อมูลที่แท้จริงให้ครบถ้วนเพื่อสะดวกในการติดต่อกลับ กรณีจำเป็น</li>
                                <li>ใช้ถ้อยคำที่สุภาพในการเขียนคำร้อง</li>
                                <li>เครื่องหมาย * แสดงถึงช่องกรอกข้อมูลที่จำเป็นต้องระบุ</li>
                                <li>ตรวจสอบความเรียบร้อยและความถูกต้องก่อน ส่งข้อมูล</li>
                            </ol>
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-success text-white w-100">ส่งคำร้อง</button>
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

</script>
