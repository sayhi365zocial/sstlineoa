<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ใบขอรับอนุญาตประกอบกิจการรับทำการเก็บ ขน และกำจัดมูลฝอยติดเชื้อ</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_individual" value="request_by_individual" required>
                                    <label class="form-check-label" for="request_by_individual">
                                        บุคคลธรรมดา
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_business" value="request_by_business">
                                    <label class="form-check-label" for="request_by_business">
                                        นิติบุคคล
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="business">
                            <div class="col-12 form-group mb-3 ">
                                <label for="to">โดย <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="request_by_name" name="request_by_name" placeholder="ชื่อผู้มีอำนาจลงนาม / กรรมการ" required>
                            </div>
                            <div class="col-12 form-group mb-3 ">
                                <label for="to">ปรากฎตาม <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="request_by_follow_by" name="request_by_follow_by" placeholder="หนังสือรับรองจดทะเบียนบริษัทเลขที่" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>ผู้ขออนุญาตขอยื่นคำขอรับใบอนุญาตประกอบกิจการรับทำการเก็บ ขน และกำจัดมูลฝอยติดเชื้อ
                                    ต่อเจ้าพนักงานท้องถิ่น พร้อมคำขอนี้ ข้าพเจ้าได้แนบเอกสารหลักฐานต่างๆ มาด้วยแล้ว ดังนี้</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาบัตรประจำตัวประชาชน/ข้าราชการ/พนักงานรัฐวิสาหกิจ/อื่นๆ ระบุ<span class="text-danger">*</span></label>
                                <InputFile name="applicant_idcard_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาใบอนุญาตตามกฎหมายที่เกี่ยวข้อง<span class="text-danger">*</span></label>
                                <InputFile name="other_license_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">หนังสือให้ความเห็นชอบการประเมิณผลกระทบต่อสิ่งแวดล้อม<span class="text-danger">*</span></label>
                                <InputFile name="approval_natural_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">สำเนาหนังสือรับรองการจดทะเบียนเป็นนิติบุคคล<span class="text-danger">*</span></label>
                                <InputFile name="registration_business_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">หลักฐานที่แสดงการเป็นผู้มีอำนาจลงนามแทนนิติบุคคล<span class="text-danger">*</span></label>
                                <InputFile name="business_representor_file_path"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">รูปถ่าย หน้าสถานประกอบการ (ปัจจุบัน)<span class="text-danger">*</span></label>
                                <InputFile name="business_image"/>
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="detail">รูปถ่ายรถขนขยะติดเชื้อ<span class="text-danger">*</span></label>
                                <InputFile name="truck_image"/>
                            </div>
                        </div>

                        <FormInstruction />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green btn-block w-100 text-white">ส่งข้อมูล</button>
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
    import InputFile from '@/components/InputFile.vue'
</script>
