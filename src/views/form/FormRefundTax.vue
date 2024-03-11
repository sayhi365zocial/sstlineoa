<template>
    <section class="my-5 mx-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">คําร้องขอรับเงินภาษีที่ดิน และสิ่งปลูกสร้างคืน ตามมาตรา ๕๔ วรรคสอง แห่งพระราชบัญญัติภาษีที่ดิน และสิ่งปลูกสร้าง พ.ศ. 2562</h1>
                </div>
            </div>
           <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post" enctype="multipart/form-data">
                        <PersonalInformation />
                        <hr>

                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="year">ได้ชําระเงินค่าภาษีที่ดินและสิ่งปลูกสร้าง ประจําปี พ.ศ. <span class="text-danger">*</span></label>
                                <select class="custom-select" name="year">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="price">จํานวน (บาท) <span class="text-danger">*</span></label>
                                <input type="number" step="1" class="form-control form-control-lg" name="price" id="price" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="receipt_no">ตามใบเสร็จับเงินเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" name="receipt_no" id="receipt_no" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="date">ลงวันที่ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-lg" name="date" id="date" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="refund_price">มีความประสงค์ขอรับเงินภาษีที่ดินและสิ่งปลูกสร้างที่จ่ายเกินคืน เป็นจำนวนเงิน (บาท)<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg" name="refund_price" id="refund_price" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="refund_price">เนื่องจาก <span class="text-danger">*</span></label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="reason" id="reason1" value="ไม่มีหน้าที่ต้องเสีย" required>
                                    <label class="form-check-label" for="reason1">
                                        ไม่มีหน้าที่ต้องเสีย
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="reason" id="reason2" value="เสียเกินกว่าที่ควรจะเสีย">
                                    <label class="form-check-label" for="reason2">
                                        เสียเกินกว่าที่ควรจะเสีย
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="receipt_path">ใบเสร็จรับเงินปีที่ผ่านมาหรือหลักฐานการชําระเงิน<span class="text-danger">*</span></label>
                                <InputFile name="receipt_path" />
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="id_card_path">บัตรประจําตัวประชาชน<span class="text-danger">*</span></label>
                                <InputFile name="id_card_path" />
                            </div>
                            <div class="col-12 mb-2 form-group mb-3">
                                <label for="other_path">อื่นๆ</label>
                                <InputFile name="other_path" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                               <DateNow /> 
                            </div>
                        </div>
                        <div class="row mb-3">
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

<style>
</style>

<script setup>
    import PersonalInformation from '@/components/PersonalInformation.vue'
    import DateNow from '@/components/DateNow.vue'
    import InputFile from '@/components/InputFile.vue'
</script>
