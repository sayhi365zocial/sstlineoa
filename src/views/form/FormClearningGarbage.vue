<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องเก็บขนสิ่งปฏิกูล</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post">
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="house_type" id="building_type" name="building_type" required>
                                    <label class="form-check-label" for="building_type">
                                        บ้านพักอาศัย
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="business_type" id="building_type" name="building_type">
                                    <label class="form-check-label" for="building_type">
                                        สถานประกอบกิจการ
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="other_type" id="building_type" name="building_type">
                                    <label class="form-check-label" for="building_type">
                                        อื่นๆ
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                        <div class="col-12">
                            <p>
                            มีความประสงค์ให้เทศบาลไปเก็บขนสิ่งปฏิกูล ณ ที่อยู่ตามที่ระบุในข้างต้น
                            </p>
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
