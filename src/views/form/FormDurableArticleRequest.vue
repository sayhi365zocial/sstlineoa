<template>
    <section class="my-5">
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
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="water_tank_500_liter" id="water_tank_500_liter" value="water_tank_500_liter">
                                    <label class="form-check-label" for="">ถังน้ำ ๕๐๐ ลิตร</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="">จำนวน</label>
                                    <div class="p-2">
                                        <input type="text" class="form-control" id="water_tank_500_liter_count" name="water_tank_500_liter_count" placeholder="">
                                    </div>
                                    <label class="form-check-label" for="flexCheckDefault">ถัง</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="box_triangle" id="box_triangle" value="box_triangle">
                                    <label class="form-check-label" for="">ตู้ไฟสามเหลี่ยม</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="">จำนวน</label>
                                    <div class="p-2">
                                        <input type="text" class="form-control" id="box_triangle_count" name="box_triangle_count" placeholder="">
                                    </div>
                                    <label class="form-check-label" for="flexCheckDefault">ตู้</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="other_check" id="other_check" value="other_check">
                                    <label class="form-check-label" for="">
                                        อื่นๆ
                                    </label>
                                    <div class="p-2">
                                        <input type="text" class="form-control" id="other" name="other" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="topic">เพื่อนำไปใช้เกี่ยวกับ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="purpose" name="purpose" placeholder="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group mb-3">
                                <label for="text">สถานที่<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="place" name="place" placeholder="" required>
                            </div>
                            <div class="col-12 col-md-6 form-group mb-3">
                                <label for="text">ซึ่งใช้ในวันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" id="use_date" name="use_date" placeholder="" required>
                            </div>
                            <div class="col-12 col-md-6 form-group mb-3">
                                <label for="text">และจะส่งมอบคืนครุภัณฑ์ในวันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" id="return_date" name="return_date" placeholder="" required>
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
