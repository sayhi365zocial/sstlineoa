<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ร้องเรียนการทุจริต</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <PersonalInformation />
                        <div class="row">
                            <div class="col-12">
                                <h6>ขอยื่นหนังสือร้องเรียนต่อนายกเทศมนตรีตำบลศรีสุนทร กรณีการทุจริตดังต่อไปนี้ </h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="text">วัน เดือน ปี <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-lg" id="date" name="date" value="" placeholder="" required>
                               
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                               
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">เวลา <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-lg" id="time" name="time" value="" placeholder="" required>
                                
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                               
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">สถานที่เกิดเหตุ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="place" name="place" value="" placeholder="" required>
                               
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                               
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">รายละเอียด<span class="text-danger">*</span></label>
                                <textarea name="detail" value="" class="form-control form-control-lg" id="detail" rows="10" required></textarea>
                               
                                <div id="" class="invalid-feedback">
                                    {{ $message }}
                                </div>
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 1<span class="text-danger">*</span></label>
                                <InputFile name="attach_file_path1" />
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 2</label>
                                <InputFile name="attach_file_path2" />
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 3</label>
                                <InputFile name="attach_file_path3" />
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 4</label>
                                <InputFile name="attach_file_path4" />
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="detail">พร้อมแนบพยานหลักฐานประกอบ 5</label>
                                <InputFile name="attach_file_path5" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>ข้าพเจ้าขอรับรองว่า ข้อความและเอกสารหลักฐานดังกล่าวมาข้างต้น
                                    เป็นความจริงทุกประการจึงได้ลงลายมือชื่อไว้เป็นหลักฐาน</h6>
                            </div>
                        </div>

                        <FormInstruction />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green w-100 btn-blocktext-white text-white">ส่งข้อมูล</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>    
</template>

<style>
</style>

<script setup>
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
    import InputFile from '@/components/InputFile.vue'
</script>
