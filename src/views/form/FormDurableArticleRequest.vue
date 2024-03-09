<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องขอยืมครุภัณฑ์</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
                        <PersonalInformation />
                        <div class="row">
                            <div class="col-12">
                                <h6>มีความประสงค์จะขอยืมครุภัณฑ์ของเทศบาลตำบลศรีสุนทร</h6>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-5 d-flex align-items-center">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="water_tank_500_liter" id="water_tank_500_liter" value="water_tank_500_liter">
                                    <label class="form-check-label" for="water_tank_500_liter">ถังน้ำ ๕๐๐ ลิตร</label>
                                </div>
                            </div>
                            <div class="col-7">
                                <label class="input-group-text border-0 bg-transparent pe-0 w-100" data-counter="ถัง">
                                    <input type="text" class="form-control form-control-lg w-100" id="water_tank_500_liter_count" name="water_tank_500_liter_count" placeholder="จำนวน" />
                                </label>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-5 d-flex align-items-center">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="box_triangle" id="box_triangle" value="box_triangle">
                                    <label class="form-check-label" for="box_triangle">ตู้ไฟสามเหลี่ยม</label>
                                </div>
                            </div>
                            <div class="col-7">
                                <label class="input-group-text border-0 bg-transparent pe-0 w-100" data-counter="ตู้">
                                    <input type="text" class="form-control form-control-lg w-100" id="box_triangle_count" name="box_triangle_count" placeholder="จำนวน" />
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5 d-flex align-items-center">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="other_check" id="other_check" value="other_check">
                                    <label class="form-check-label" for="other_check">อื่นๆ</label>
                                </div>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control form-control-lg pe-0 w-100" id="other" name="other" placeholder="ระบุจำนวนครุภัณฑ์" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="topic">เพื่อนำไปใช้เกี่ยวกับ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="purpose" name="purpose" placeholder="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="text">สถานที่<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" id="place" name="place" placeholder="" required>
                            </div>
                            <div class="col-12 col-md-6 form-group mb-3">
                                <label for="text">ซึ่งใช้ในวันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-lg" id="use_date" name="use_date" placeholder="" required>
                            </div>
                            <div class="col-12 col-md-6 form-group mb-3">
                                <label for="text">และจะส่งมอบคืนครุภัณฑ์ในวันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-lg" id="return_date" name="return_date" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>ในการยืมครุภัณฑ์ดังกล่าว ข้าพเจ้ายินยอมปฏิบัติตามหลักเกณฑ์ของเทศบาล และรับผิดชอบในความเสียหายของครุภัณฑ์และความเสียหายอื่นๆ ที่อาจเกิดขึ้นจากการยืมครุภัณฑ์ในครั้งนี้ทุกกรณี ซึ่งหากจำเป็นจะต้องชดใช้เป็นเงินค่าเสียหายให้เต็มจำนวนเงินตามที่ทางเทศบาลตำบลศรีสุนทรเรียกร้อง</h6>
                            </div>
                        </div>
                       
                        <FormInstruction />

                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn w-100 bg-theme-green btn-block text-white">ส่งข้อมูล</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>    
</template>

<style scoped>
    .input-group-text {

        &:after {
            content: '.' attr(data-counter);
            position: absolute;
            top: 15px;
            right: 10px;
            font-size: 1.25rem;
            display: block;
            color: rgba(0, 0, 0, 0.6);
            font-weight: bold;
        }
        
        &, input {
            position: relative;
            display: block;
            padding-right: 50px;
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>

<script setup>
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import DateNow from '@/components/DateNow.vue'
    import FormInstruction from '@/components/FormInstruction.vue'
</script>
