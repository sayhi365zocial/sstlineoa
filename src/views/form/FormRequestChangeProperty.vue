<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">แบบแจ้งการเปลี่ยนแปลงการใช้ประโยชน์ในที่ดินหรือสิ่งปลูกสร้าง</h1>
                </div>
            </div>
            <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <hr>
                        <PersonalInformation />
                        <div class="row">
                            <div class="col-12">
                                ขอยื่นแบบแจ้งการเปลี่ยนแปลงการใช้ประโยชน์ในที่ดินหรือสิ่งปลูกสร้างต่อองค์กรปกครองส่วนท้องถิ่น ดังมีความต่อไปนี้
                            </div>
                            <div class="col-12">
                                ข้าพเจ้ามีทรัพย์สินประเภท
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="owner_type" id="land" value="land" onclick="toggleInput('land')">
                                    <label class="form-check-label" for="land">ที่ดิน</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="owner_type" id="building" value="building" onclick="toggleInput('building')">
                                    <label class="form-check-label" for="building">สิ่งปลูกสร้าง</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="owner_type" id="room" value="room" onclick="toggleInput('room')">
                                    <label class="form-check-label" for="room">อาคารชุด/ห้องชุด</label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row land d-none">
                            <div class="col-12 form-group mb-3">
                                <label for="land_qty">๑. ที่ดิน จำนวน (แปลง) <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="land_qty" class="form-control">
                            </div>
                        </div>
                        <div class="row land d-none">
                            <div class="col-12 form-group mb-3">
                                <label for="land_number">แปลงที่ <span class="text-danger">*</span></label>
                                <input type="text" name="land_number" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_moo">ตั้งอยู่หมู่ที่ <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="land_moo" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" name="land_road" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_sub_district">ตำบล <span class="text-danger">*</span></label>
                                <input type="text" name="land_sub_district" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_district">อำเภอ <span class="text-danger">*</span></label>
                                <input type="text" name="land_district" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_province">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" name="land_province" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_deed_number">เลขที่โฉนดหรือหนังสือสำคัญ <span class="text-danger">*</span></label>
                                <input type="text" name="land_deed_number" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_area_rai">เนื้อที่ดิน (ไร่) <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="land_area_rai" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_area_ngan">เนื้อที่ดิน (งาน) <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="land_area_ngan" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_area_waa">เนื้อที่ดิน (วา) <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="land_area_waa" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_old_purpose">เดิมที่ดินแปลงนี้ใช้ทำประโยชน์ <span class="text-danger">*</span></label>
                                <textarea name="land_old_purpose" id="land_old_purpose" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_new_purpose">บัดนี้ ที่ดินแปลงดังกล่าวใช้ทำประโยชน์ <span class="text-danger">*</span></label>
                                <textarea name="land_new_purpose" id="land_new_purpose" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="land_change_since">ตั้งแต่วันที่ <span class="text-danger">*</span></label>
                                <input type="date" name="land_change_since" class="form-control">
                            </div>
                        </div>

                        <div class="row building d-none">
                            <div class="col-12 form-group mb-3">
                                <label for="building_qty">๒. สิ่งปลูกสร้าง จำนวน (แปลง) <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="building_qty" class="form-control">
                            </div>
                        </div>
                        <div class="row building d-none">
                            <div class="col-12 form-group mb-3">
                                <label for="building_number">หลังที่ <span class="text-danger">*</span></label>
                                <input type="text" name="building_number" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_moo">ตั้งอยู่หมู่ที่ <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="building_moo" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" name="building_road" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_sub_district">ตำบล <span class="text-danger">*</span></label>
                                <input type="text" name="building_sub_district" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_district">อำเภอ <span class="text-danger">*</span></label>
                                <input type="text" name="building_district" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_province">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" name="building_province" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_deed_number">บนที่ดินเลขที่โฉนดหรือหนังสือสำคัญ <span class="text-danger">*</span></label>
                                <input type="text" name="building_deed_number" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_area">ขนาดพื้นที่สิ่งปลูกสร้าง (ตารางเมตร) <span class="text-danger">*</span></label>
                                <input type="text" name="building_area" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_old_purpose">เดิมที่สิ่งปลูกสร้างนี้ใช้ทำประโยชน์ <span class="text-danger">*</span></label>
                                <textarea name="building_old_purpose" id="building_old_purpose" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_new_purpose">บัดนี้ สิ่งปลูกสร้างดังกล่าวใช้ทำประโยชน์ <span class="text-danger">*</span></label>
                                <textarea name="building_new_purpose" id="building_new_purpose" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="building_change_since">ตั้งแต่วันที่ <span class="text-danger">*</span></label>
                                <input type="date" name="building_change_since" class="form-control">
                            </div>
                        </div>

                        <div class="row room d-none">
                            <div class="col-12 form-group mb-3">
                                <label for="room_qty">๓. อาคารชุด/ห้องชุด จำนวน (แปลง) <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="room_qty" class="form-control">
                            </div>
                        </div>
                        <div class="row room d-none">
                            <div class="col-12 form-group mb-3">
                                <label for="room_number">เลขที่/ห้องที่ <span class="text-danger">*</span></label>
                                <input type="text" name="room_number" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_moo">ตั้งอยู่หมู่ที่ <span class="text-danger">*</span></label>
                                <input type="number" step="1" name="room_moo" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" name="room_road" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_sub_district">ตำบล <span class="text-danger">*</span></label>
                                <input type="text" name="room_sub_district" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_district">อำเภอ <span class="text-danger">*</span></label>
                                <input type="text" name="room_district" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_province">จังหวัด <span class="text-danger">*</span></label>
                                <input type="text" name="room_province" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_deed_number">บนที่ดินเลขที่โฉนดหรือหนังสือสำคัญ <span class="text-danger">*</span></label>
                                <input type="text" name="room_deed_number" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_area">ขนาดพื้นที้อาคารชุด/ห้องชุด (ตารางเมตร) <span class="text-danger">*</span></label>
                                <input type="text" name="room_area" class="form-control">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_old_purpose">เดิมที่อาคารชุด/ห้องชุดนี้ใช้ทำประโยชน์ <span class="text-danger">*</span></label>
                                <textarea name="room_old_purpose" id="room_old_purpose" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_new_purpose">บัดนี้ อาคารชุด/ห้องชุดดังกล่าวใช้ทำประโยชน์ <span class="text-danger">*</span></label>
                                <textarea name="room_new_purpose" id="room_new_purpose" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="room_change_since">ตั้งแต่วันที่ <span class="text-danger">*</span></label>
                                <input type="date" name="room_change_since" class="form-control">
                            </div>
                        </div>

                        <FormInstruction />
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn bg-theme-green btn-block text-white">ส่งข้อมูล</button>
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
