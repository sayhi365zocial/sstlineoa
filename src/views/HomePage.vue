<template>
    <section class="py-5 px-4">
        <div class="container">
            <div class="row mb-3">
                <div class="col-12">
                    <h1 class="text-white text-center fw-bold">E-Services</h1>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <div class="text-white text-center">
                        บริการออนไลน์จากเทศบาลศรีสุนทร ให้คุณจัดการทุกเรื่องได้ง่าย ๆ ด้วยตัวเองตลอด 24 ชั่วโมง
                    </div>
                </div>
            </div>
            <div class="row mb-2 gx-2">
                <div class="col-8">
                    <RouterLink to="/form" class="text-decoration-none">
                        <div class="rounded-3 p-2 position-relative overflow-hidden" id="form-box">
                            <p class="text-center text-white mb-0 fs-2">แบบฟอร์ม</p>
                            <p class="text-white text-center fs-6">คำร้อง/ใบขออนุญาต</p>
                            <div class="position-absolute">
                                <img src="/images/form.png" alt="">
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-4">
                    <div class="d-flex flex-column">
                        <RouterLink to="/request" class="text-decoration-none">
                            <div class="d-flex justify-content-center flex-column mb-2 p-3 rounded-3 overflow-hidden" id="complain-box">
                                <div class="h-25">
                                    <p class="text-center text-black fs-6 mb-0">ร้องเรียน</p>
                                </div>
                                <div class="position-relative h-75" id="complain-box-img">
                                    <div class="position-absolute d-flex justify-content-center">
                                        <img src="/images/complain.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                        <RouterLink to="/form-normal-request" class="text-decoration-none">
                            <div class="d-flex justify-content-center flex-column mb-2 p-3 rounded-3 overflow-hidden" id="normal-box">
                                <div class="h-25">
                                    <p class="text-center text-black fs-6 mb-0">คำร้องทั่วไป</p>
                                </div>
                                <div class="position-relative h-75" id="normal-box-img">
                                    <div class="position-absolute d-flex justify-content-center">
                                        <img src="/images/normal_request.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="row mb-2 gx-2">
                <div class="col-12">
                    <RouterLink to="/tax" class="text-decoration-none">
                        <div class="rounded-3 p-4 bg-white overflow-hidden d-flex justify-content-between" id="tax-box">
                            <div class="w-50 d-flex align-items-center">
                                <p class="text-center text-black fs-4 mb-0">หมวดหมู่ภาษี</p>
                            </div>
                            <div class="w-50 position-relative">
                                <div class="position-absolute" id="tax-box-img">
                                    <img src="/images/tax.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>

            </div>
            <div class="row mb-2">
                <div class="col-12">
                    <RouterLink to="/form" class="text-decoration-none">
                        <div class="rounded-3 p-4 d-flex flex-row overflow-hidden" id="review-bow">
                            <div class="">
                                <p class="text-white mb-0 fs-6">แบบประเมิน</p>
                                <p class="text-white mb-0 fs-2">การให้บริการ</p>
                            </div>
                            <div class="position-relative pe-1">
                                <div class="position-absolute w-100" id="review-box-img">
                                    <img src="/images/review.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>
    $heightForm: 14rem;
    $marginSpacer: 0.5rem;

    section {        
        background-image: url('./images/bg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
    }

    .container {
        @media screen and (min-width: 420px) {
            width: 25rem;
        }
    }

    #form-box {
        background-color: #e40184;
        height: $heightForm;

        div {

            bottom: -5rem;
            left: 4.5rem;

            img {
                width: 10rem;
            }
        }

    }

    #complain-box {
        background-color: white;
        height: calc(($heightForm / 2) - ($marginSpacer / 2));

        #complain-box-img {
            bottom: -1.5rem;

            img {
                width: 90%
            }
        }
    }

    #normal-box {
        background-color: #CDE633;
        height: calc(($heightForm / 2) - ($marginSpacer / 2));

        #normal-box-img {
            bottom: -2rem;

            img {
                width: 90%
            }
        }
    }

    #tax-box {
        height: calc($heightForm /2);
        &-img {
            width: 80%;
            bottom: -3rem;
            left: 1rem;
        }
    }

    #review-bow {
        height: calc($heightForm /2);
        background-color: #04543b;

        div:nth-child(1) {
            width: 60%;
        }

        div:nth-child(2) {
            width: 40%;

            #review-box-img {
                bottom: -2rem;
            }
        }
        
    }
</style>

<script setup>

</script>