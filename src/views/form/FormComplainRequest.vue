<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ร้องเรียน / ร้องทุกข์ทั่วไป</h1>
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
                        <div class="row">
                            <div class="col-12 text-right">
                                <p>วัน / เดือน / ปี พ.ศ.</p>
                            </div>
                            <div class="col-12 text-right">
                                <p>{{ new Date() }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="topic">เรื่อง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0 @error('topic') is-invalid @enderror" id="topic" name="topic" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group">
                                <label for="to">เรียน</label>
                                <input type="text" class="form-control rounded-0" id="to" name="to" value="นายกเทศมนตรีตําบลศรีสุนทร" placeholder="นายกเทศมนตรีตําบลศรีสุนทร" disabled>
                            </div>
                        </div>
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="text">ได้รับความเดือดร้อนเนื่องจาก <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0 @error('detail') is-invalid @enderror" id="detail" name="detail" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group">
                                <label for="detail">1. สำเนาบัตรประจำตัวประชาชน <span class="text-danger">*</span></label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input @error('applicant_id_card_file_path') is-invalid @enderror" id="" name="applicant_id_card_file_path" required accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group">
                                <label for="detail">2. สำเนาทะเบียนบ้านฉบับเจ้าบ้าน <span class="text-danger">*</span></label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input @error('target_house_registation_file_path') is-invalid @enderror" id="" name="target_house_registation_file_path" required accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group">
                                <label for="detail">3. บัญชีรายชื่อผู้ได้รับความเดือดร้อน</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="" name="other_applicant_id_card_file_path" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-12 form-group">
                                <label for="text">4. เอกสารอื่นๆ (ระบุ)</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="other_file_path" name="other_file_path" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="">เลือกไฟล์รูปภาพ</label>
                                </div>
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
