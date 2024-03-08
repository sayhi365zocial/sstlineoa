<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คําร้องขอใช้รถสองแถว</h1>
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
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        @include('form.top_form', ['topic_placeholder' => 'ระบุเรื่องที่ต้องการใช้รถสองแถว'])
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="detail">มีความประสงค์ <span class="text-danger">*</span></label>
                                <textarea name="detail" id="detail" class="form-control rounded-0 @error('detail') is-invalid @enderror" rows="15" placeholder="ระบุ ความประสงค์ของท่าน"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>ทั้งนี้ข้าพเจ้า ฯ ผู้ขอใช้รถสองแถวของเทศบาลตำบลศรีสุนทรยินยอมชดใช้ค่าเสียหายที่อาจเกิดขึ้น และยินยอมรับผิดชอบต่อชีวิต และทรัพย์สินย์ของผู้โดยสาร หากเกิดขึ้นจากการเดินทางในครั้งนี้ด้วย</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="alert alert-warning" role="alert">
                                    <p>ข้อปฏิบัติการใช้งานแบบฟอร์มออนไลน์</p>
                                    <p>1.กรอกข้อมูลที่แท้จริงให้ครบถ้วนเพื่อสะดวกในการติดต่อกลับ กรณีจำเป็น</p>
                                    <p>2.ใช้ถ้อยคำที่สุภาพในการเขียนคำร้อง</p>
                                    <p>3.เครื่องหมาย * แสดงถึงช่องกรอกข้อมูลที่จำเป็นต้องระบุ</p>
                                    <p>4.ตรวจสอบความเรียบร้อยและความถูกต้องก่อน ส่งข้อมูล</p>
                                </div>    
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green btn-block rounded-0 text-white">ส่งข้อมูล</button>
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
</script>
