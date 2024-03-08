<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ร้องเรียนการทุจริต</h1>
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
                        <!-- code hear -->
                        <div class="row">
                            <div class="col-12 text-right">
                                <p>วัน / เดือน / ปี พ.ศ.</p>
                            </div>
                            <div class="col-12 text-right">
                                <p>{{ new Date() }}</p>
                            </div>
                        </div>
                        <PersonalInformation />
                        <div class="row">
                            <div class="col-12">
                                <h6>ขอยื่นหนังสือร้องเรียนต่อนายกเทศมนตรีตำบลศรีสุนทร กรณีการทุจริตดังต่อไปนี้ </h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="text">วัน เดือน ปี <span class="text-danger">*</span></label>
                                <input type="date" class="form-control rounded-0 @error('date') is-invalid @enderror" id="date" name="date" value="" placeholder="" required>
                                @error('date')
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="text">เวลา <span class="text-danger">*</span></label>
                                <input type="time" class="form-control rounded-0 @error('time') is-invalid @enderror" id="time" name="time" value="" placeholder="" required>
                                @error('time')
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                            <div class="col-12 form-group">
                                <label for="text">สถานที่เกิดเหตุ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0 @error('place') is-invalid @enderror" id="place" name="place" value="" placeholder="" required>
                                @error('place')
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                            <div class="col-12 form-group">
                                <label for="text">รายละเอียด<span class="text-danger">*</span></label>
                                <textarea name="detail" value="" class="form-control rounded-0 @error('detail') is-invalid @enderror" id="detail" rows="10" required></textarea>
                                @error('detail')
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 1<span
                                        class="text-danger">*</span></label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input @error('attach_file_path1') is-invalid @enderror" id="attach_file_path1" name="attach_file_path1" required accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="attach_file_path1">เลือกไฟล์พยานหลักฐาน</label>
                                    @error('attach_file_path1')
                                    <div id="" class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-12 form-group">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 2</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="attach_file_path2" name="attach_file_path2" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="attach_file_path2">เลือกไฟล์พยานหลักฐาน</label>
                                </div>
                            </div>
                            <div class="col-12 form-group">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 3</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="attach_file_path3" name="attach_file_path3" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="attach_file_path3">เลือกไฟล์พยานหลักฐาน</label>
                                </div>
                            </div>
                            <div class="col-12 form-group">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 4</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="attach_file_path4" name="attach_file_path4" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="attach_file_path4">เลือกไฟล์พยานหลักฐาน</label>
                                </div>
                            </div>
                            <div class="col-12 form-group">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 5</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="attach_file_path5" name="attach_file_path5" accept="image/*,application/pdf">
                                    <label class="custom-file-label" for="attach_file_path5">เลือกไฟล์พยานหลักฐาน</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>ข้าพเจ้าขอรับรองว่า ข้อความและเอกสารหลักฐานดังกล่าวมาข้างต้น
                                    เป็นความจริงทุกประการจึงได้ลงลายมือชื่อไว้เป็นหลักฐาน</h6>
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
