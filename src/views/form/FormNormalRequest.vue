<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คำร้องทั่วไป</h1>
                </div>
            </div>
            <DateNow />
            <div class="row">
                <div class="col-12">
                    <form action="" method="post">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label mb-3">* เรื่อง</label>
                            <input type="text" class="form-control form-control-lg" id="formGroupExampleInput" placeholder="ระบุเรื่องที่ต้องการร้องเรียน">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label mb-3">เรียน</label>
                            <input type="text" class="form-control disabled" id="formGroupExampleInput2" placeholder="นายกเทศมนตรีตำบลศรีสุนทร" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label mb-3">มีความประสงค์</label>
                            <textarea name="" id="" class="form-control form-control-lg" rows="10" placeholder="ระบุความประสงค์ของท่าน"></textarea>
                        </div>
                        <FormInstruction />
                        <div class="mb-3">
                            <button class="btn btn-success text-white w-100">ส่งคำร้อง</button>
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
    import FormInstruction from '@/components/FormInstruction.vue'
    import DateNow from '@/components/DateNow.vue'
</script>
