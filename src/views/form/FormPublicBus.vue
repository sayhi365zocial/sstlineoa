<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คําร้องขอใช้รถสองแถว</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        @include('form.top_form', ['topic_placeholder' => 'ระบุเรื่องที่ต้องการใช้รถสองแถว'])
                        <hr>
                        <PersonalInformation />
                        <hr>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="detail">มีความประสงค์ <span class="text-danger">*</span></label>
                                <textarea name="detail" id="detail" class="form-control" rows="15" placeholder="ระบุ ความประสงค์ของท่าน"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6>ทั้งนี้ข้าพเจ้า ฯ ผู้ขอใช้รถสองแถวของเทศบาลตำบลศรีสุนทรยินยอมชดใช้ค่าเสียหายที่อาจเกิดขึ้น และยินยอมรับผิดชอบต่อชีวิต และทรัพย์สินย์ของผู้โดยสาร หากเกิดขึ้นจากการเดินทางในครั้งนี้ด้วย</h6>
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
