<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องคัดค้านการประเมิณภาษีหรือการเรียกเก็บภาษีที่ดินและสิ่งปลูกสร้าง</h1>
                </div>
            </div>
            <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" autocomplete="off" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">ตามที่พนักงานประเมิณได้แจ้งการประเมิณหรือเรียกเก็บภาษีที่ดินและสิ่งปลูกสร้าง
                                    ประจำปี (พ.ศ) <span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="tax_year" name="tax_year" value="" placeholder="" required>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">ตามหนังสือแจ้งการประเมิณ เลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="book_no" name="book_no" value="" placeholder="" required>
                            </div>

                            <div class="col-12 form-group mb-3">
                                <label for="text">วัน เดือน ปี <span class="text-danger">*</span></label>
                                <input type="date" class="form-control rounded-0" id="book_no_date" name="book_no_date" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">ซึ่งข้าพเจ้าได้รับเมื่อวันที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="book_no_receive" name="book_no_receive" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">วัน เดือน ปี <span class="text-danger">*</span></label>
                                <input type="date" class="form-control rounded-0" id="book_no_date_receive" name="book_no_date_receive" value="" placeholder="" required>
                            </div>
                        </div>
                        <PersonalInformation />
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">ขอยื่นคำร้องคัดค้านการประเมิณภาษีหรือการเรียกเก็บภาษีไม่ถูกต้อง เนื่องจาก <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="detail" name="detail" value="" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">โดยข้าพเจ้าได้แนบเอกสารหลักฐาน ดังต่อไปนี้ <span
                                        class="text-danger">*</span></label>
                                <input type="file" class="form-control rounded-0" id="attrach_file_path" name="attrach_file_path" placeholder="" required accept="image/*,application/pdf">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <p>มาเพื่อประกอบการพิจารณาทบทวนการประเมิณหรือการเรียกเก็บภาษีใหม่</p>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">อีเมล <span class="text-danger">*</span></label>
                                <input type="email" class="form-control rounded-0" id="email" name="email" value="" placeholder="" required>
                            </div>
                        </div>

                        <div class="row">
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">สำเนาบัตรประชาชน<span class="text-danger">*</span></label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="id_card_path" name="id_card_path" required accept="image/*,application/pdf">
                                <label class="custom-file-label" for="id_card_path">เลือกไฟล์สำเนา</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">ทะเบียนบ้าน<span class="text-danger">*</span></label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="house_registration_path" name="house_registration_path" required accept="image/*,application/pdf">
                                <label class="custom-file-label" for="house_registration_path">เลือกไฟล์สำเนา</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">ภาพถ่ายประกอบการยื่นคัดค้าน<span class="text-danger">*</span></label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="objection_image" name="objection_image" required accept="image/*,application/pdf">
                                <label class="custom-file-label" for="objection_image">เลือกไฟล์รูปภาพ</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">อนุญาตก่อสร้าง (ถ้ามี) อช.1</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="ac_1_path" name="ac_1_path" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="ac_1_path">เลือกไฟล์</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">อช.6 </label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="ac_6_path" name="ac_6_path" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="ac_6_path">เลือกไฟล์</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">สัญญาซื้อขาย</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="sell_and_purchase_agreement_path" name="sell_and_purchase_agreement_path" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="sell_and_purchase_agreement_path">เลือกไฟล์</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">สัญญาเช่า</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="rent_agreement_path" name="rent_agreement_path" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="rent_agreement_path">เลือกไฟล์</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">สำเนาโฉนด</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="deed_path" name="deed_path" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="deed_path">เลือกไฟล์</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">เอกสารประกอบอื่น</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="other_path" name="other_path" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="other_path">เลือกไฟล์</label>
                            </div>
                        </div>
                        </div>


                       <FormInstruction />
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
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
    
</script>
