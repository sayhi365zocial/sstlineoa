<template>
    <div>
        <div class="modal fade" 
            id="formSuccessAlert" 
            tabindex="-1" 
            aria-labelledby="formSuccessLabelAlert" 
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-0 rounded-1 overflow-hidden">
                        <div class="d-flex flex-column">
                            <div class="bg-theme-green" style="height: 12rem;">
                                <img src="/images/done_cheer.png" alt="" class="img-fluid">
                            </div>
                            <div class="bg-white p-5" style="height: 15rem;">
                                <div class="w-100 d-flex justify-content-center position-relative">
                                    <div class="position-absolute" style="top: -6rem;">
                                        <img src="/images/check1.png" alt="" class="img-fluid" style="height: 5rem;">
                                    </div>
                                </div>
                                <div class="fs-1 text-theme-green text-center fw-bold mb-2">
                                    ส่งคำร้องเรียนสำเร็จ
                                </div>
                                <div class="text-secondary text-center">สามารถติดตามสถานะการดำเนินการต่างๆ ได้ทาง <span class="text-success">Line Official</span> ของเทศบาลตำบลศรีสุนทร</div>
                                <div class="d-flex justify-content-center">
                                    <div class="w-75 my-3">
                                        <button type="button" class="btn bg-theme-green btn-block w-100 text-white" data-bs-dismiss="modal">ปิด</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { Modal } from 'bootstrap'
import { onMounted } from 'vue';

onMounted(() => {
    const myModalAlternative = new Modal('#formSuccessAlert', {
        keyboard: false
    })
    myModalAlternative.show()
});
</script>

<style scoped>
    
</style>