<template>
    <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">ใบรับแจ้งประกอบกิจการคำขอรับใบอนุญาตประกอบกิจการที่เป็นอันตรายต่อสุขภาพ</h1>
                </div>
            </div>
            <DateNow />
            <div class="row">
                <div class="col-12">
                    <form class="form mt-1" action="" method="post"  autocomplete="off" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 ">
                                <div class="alert alert-success" role="alert">
                                <div class="form-check form-check">
                                    <input class="form-check-input" type="radio" name="area_type" id="below_200" value="below_200" required>
                                    <label class="form-check-label" for="below_200">ใบอนุญาติ (พื้นที่มากกว่า 200 ตร.ม. ขึ้นไป)</label>
                                </div>
                                <div class="form-check form-check">
                                    <input class="form-check-input" type="radio" name="area_type" id="above_200" value="above_200">
                                    <label class="form-check-label" for="above_200">หนังสือรับรองการแจ้ง (พื้นที่ไม่เกิน 200 ตร.ม.)</label>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 ">
                                <div class="alert alert-primary" role="alert">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="request_type" id="new_request" value="new_request" required>
                                        <label class="form-check-label" for="new_request">ขออนุญาตรายใหม่</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="request_type" id="extend" value="extend">
                                        <label class="form-check-label" for="extend">ต่ออายุใบอนุญาตเดิม</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <PersonalInformation />
                       
                        <div class="row">
                            <div class="col-12">
                                <h6>ขอยื่นคำขอรับใบอนุญาตประกอบกิจการสถานที่เป็นอันตรายต่อสุขภาพต่อเจ้าพนักงานท้องถิ่น
                                    รายละเอียดดังนี้</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_individual" value="request_by_individual" required>
                                    <label class="form-check-label" for="request_by_individual">
                                        บุคคลธรรมดา
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="request_by" id="request_by_business" value="request_by_business">
                                    <label class="form-check-label" for="request_by_business">
                                        นิติบุคคล หรือ รับมอบอำนาจ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment_name">ชื่อสถานประกอบการ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_name" name="business_name" placeholder="" value=""  required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_about">กิจการเกี่ยวกับ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_about" name="business_about" placeholder="" value=""  required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="owner_name">เจ้าของกิจการคือ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_name" name="business_owner_name" placeholder="" value=""  required>
                            </div>
                            <div class="col-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="is_house_no_type" id="is_house_no" value="is_house_no">
                                    <label class="form-check-label" for="is_house_no">บ้านเลขที่</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="is_house_no_type" id="is_head_quarter_no" value="is_head_quarter_no">
                                    <label class="form-check-label" for="is_head_quarter_no">สำนักงานใหญ่เลขที่</label>
                                </div>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="about">บ้านเลขที่เจ้าของกิจการ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_house_no" name="business_owner_house_no" placeholder="" value="" required>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-12 form-group mb-3">
                                <label for="moo">หมู่<span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="business_owner_moo" name="business_owner_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="soi">ตรอก/ซอย</label>
                                <input type="text" class="form-control rounded-0" id="business_owner_soi" name="business_owner_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road">ถนน<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_road" name="business_owner_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district">ตำบล/แขวง <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_sub_district" name="business_owner_sub_district" value="ศรีสุนทร" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district">อำเภอ/เขต <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_district" name="business_owner_district" value="ถลาง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province">จังหวัด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_province" name="business_owner_province" value="ภูเก็ต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="telephone_number">โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_owner_telephone_number" name="business_owner_telephone_number" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_owner_fax_number">โทรสาร</label>
                                <input type="text" class="form-control rounded-0" id="business_owner_fax_number" name="business_owner_fax_number" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                               
                            </div>
                            <div class="col-12 form-group mb-3 ">
                                <label for="establishment_number">สถานประกอบการเลขที่ <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_house_no" name="business_house_no" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="moo">หมู่<span class="text-danger">*</span></label>
                                <input type="number" class="form-control rounded-0" id="business_moo" name="business_moo" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="soi">ตรอก/ซอย</label>
                                <input type="text" class="form-control rounded-0" id="business_soi" name="business_soi" placeholder="" value="">
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="road">ถนน <span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_road" name="business_road" placeholder="" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="sub_district">ตำบล/แขวง</label>
                                <input type="text" class="form-control rounded-0" id="business_sub_district" name="business_sub_district" value="ศรีสุนทร" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="district">อำเภอ/เขต</label>
                                <input type="text" class="form-control rounded-0" id="business_district" name="business_district" value="ถลาง" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="province">จังหวัด</label>
                                <input type="text" class="form-control rounded-0" id="business_province" name="business_province" value="ภูเก็ต" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="telephone_number">โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_telephone_number" name="business_telephone_number" value="" required>
                            </div>
                            <div class="col-12 form-group mb-3">
                                <label for="business_fax_number">โทรสาร</label>
                                <input type="text" class="form-control rounded-0" id="business_fax_number" name="business_fax_number" placeholder="" value="">
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-12">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="area_owner_type" id="is_owner" value="is_owner" required>
                                <label class="form-check-label" for="is_owner">เป็นเจ้าของสถานที่</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="area_owner_type" id="is_tenant" value="is_tenant">
                                <label class="form-check-label" for="is_tenant">เป็นผู้เช่า</label>
                            </div>
                        </div>
                        <div class="col-12 form-group mb-3">
                            <label for="">รายละเอียดการเช่า</label>
                            <input type="text" class="form-control rounded-0" id="rent_detail" name="rent_detail" value="">
                        </div>
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="detail">เอกสารแนบการเช่า</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="rent_document" name="rent_document" accept="image/*,application/pdf">
                                <label class="custom-file-label" for="">เลือกไฟล์สำเนา</label>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-12 mb-2 form-group mb-3">
                            <label for="cars">ประเภทกิจการ</label>
                            <select name="business_type_dropdown" id="business_type_dropdown" class="form-control rounded-0" required>
                            <optgroup label="(๑) กิจการที่เกี่ยวกับการเลี้ยงสัตว์">
                                <option>(๑.๑) การเลี้ยงสัตว์บก สัตว์ปีก สัตว์น้ำ สัตว์เลื้อยคลานหรือแมลง</option>
                                <option>(๑.๒) การเลี้ยงสัตว์เพื่อรีดเอานม</option>
                                <option>(๑.๓) การประกอบกิจการเลี้ยง รวบรวมสัตว์ หรือธุรกิจอื่นใดอันมีลักษณะทํานองเดียวกันเพื่อให้ประชาชนเข้าชมหรือเพื่อประโยชน์ของกิจการนั้น ทั้งนี้ จะมีการเรียกเก็บค่าดูหรือค่าบริการไม่ว่าทางตรงหรือทางอ้อมหรือไม่ก็ตาม</option>
                            </optgroup>
                            <optgroup label="(๒) กิจการที่เกี่ยวกับสัตว์และผลิตภัณฑ์">
                                <option>(๒.๑) การฆ่าสัตว์ ยกเว้นในสถานที่จําหน่ายอาหาร การเร่ขาย การขายในตลาดและการฆ่าเพื่อบริโภคในครัวเรือน</option>
                                <option>(๒.๒) การฟอกหนังสัตว์ ขนสัตว์ การสะสมหนังสัตว์ ขนสัตว์ที่ยังมิได้ฟอก</option>
                                <option>(๒.๓) การสะสมเขาสัตว์ กระดูกสัตว์ที่ยังมิได้แปรรูป</option>
                                <option>(๒.๔) การเคี่ยวหนังสัตว์ เอ็นสัตว์ ไขสัตว์</option>
                                <option>(๒.๕) การต้ม การตาก การเผาเปลือกหอย เปลือกปู เปลือกกุ้ง ยกเว้นในสถานที่จําหน่ายอาหาร การเร่ขาย และการขายในตลาด</option>
                                <option>(๒.๖) การประดิษฐ์เครื่องใช้หรือผลิตภัณฑ์อื่น ๆ จากเปลือกหอย กระดูกสัตว์ เขาสัตว์หนังสัตว์ ขนสัตว์ หรือส่วนอื่น ๆ ของสัตว์</option>
                                <option>(๒.๗) การผลิต การโม่ การป่น การบด การผสม การบรรจุ การสะสม หรือการกระทําอื่นใดต่อสัตว์หรือพืช หรือส่วนหนึ่งส่วนใดของสัตว์หรือพืชเพื่อเป็นอาหารสัตว์</option>
                                <option>(๒.๘) การสะสมหรือการล้างครั่ง</option>
                            </optgroup>
                            <optgroup label="(๓) กิจการที่เกี่ยวกับอาหาร เครื่องดื่ม น้ำดื่ม">
                                <option>(๓.๑) การผลิตเนย เนยเทียม</option>
                                <option>(๓.๒) การผลิตกะปิ น้ำพริกแกง น้ำพริกเผา น้ำปลา น้ำเคย น้ำบูดู ไตปลา เต้าเจี้ยว ซีอิ๊ว หอยดอง หรือซอสปรุงรสอื่น ๆ ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๓) การผลิต การหมัก การสะสมปลาร้า ปลาเจ่า กุ้งเจ่า ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๔) การตากเนื้อสัตว์ การผลิตเนื้อสัตว์เค็ม การเคี่ยวมันกุ้ง ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๕) การนึ่ง การต้ม การเคี่ยว การตาก หรือวิธีอื่นใดในการผลิตอาหารจากสัตว์ พืช ยกเว้นในสถานที่จําหน่ายอาหาร การเร่ขาย การขายในตลาด และการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๖) การเคี่ยวน้ำมันหมู การผลิตกุนเชียง หมูยอ ไส้กรอก หมูตั้ง ยกเว้นในสถานที่จําหน่ายอาหาร การเร่ขาย การขายในตลาด และการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๗) การผลิตเส้นหมี่ ขนมจีน ก๋วยเตี๋ยว เต้าฮวย เต้าหู้ วุ้นเส้น เกี้ยมอี๋</option>
                                <option>(๓.๘) การผลิตแบะแซ</option>
                                <option>(๓.๙) การผลิตอาหารบรรจุกระป๋อง ขวด หรือภาชนะอื่นใด</option>
                                <option>(๓.๑๐) การประกอบกิจการการทำขนมปังสด ขนมปังแห้ง จันอับ ขนมเปี๊ยะ</option>
                                <option>(๓.๑๑) การแกะ การล้างสัตว์น้ำ ที่ไม่ใช้ส่วนหนึ่งของกิจการห้องเย็น ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๑๒) การผลิตน้ำอัดลม น้ำหวาน น้ำโซดา น้ำถั่วเหลือง เครื่องดื่มชนิดต่าง ๆ บรรจุกระป๋อง ขวดหรือภาชนะอื่นใด ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๑๓) การผลิต การแบ่งบรรจุน้ำตาล</option>
                                <option>(๓.๑๔) การผลิตผลิตภัณฑ์จากน้ำนมวัว</option>
                                <option>(๓.๑๕) การผลิต การแบ่งบรรจุเอททิลแอลกอฮอล์ สุรา เบียร์ น้ำส้มสายชู</option>
                                <option>(๓.๑๖) การคั่วกาแฟ</option>
                                <option>(๓.๑๗) การผลิตลูกชิ้นด้วยเครื่องจักร</option>
                                <option>(๓.๑๘) การผลิตผงชูรส</option>
                                <option>(๓.๑๙) การผลิตน้ำกลั่น น้ำบริโภค</option>
                                <option>(๓.๒๐) การตาก การหมัก การดองผัก ผลไม้ หรือพืชอย่างอื่น ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๒๑) การผลิต การบรรจุใบชาแห้ง ชาผงหรือเครื่องดื่มชนิดผงอื่น ๆ</option>
                                <option>(๓.๒๒) การผลิตไอศกรีม ยกเว้นการผลิตเพื่อบริโภคในครัวเรือน</option>
                                <option>(๓.๒๓) การผลิตบะหมี่ มักกะโรนี หรือผลิตภัณฑ์อื่น ๆ ที่คล้ายคลึงกัน</option>
                                <option>(๓.๒๔) การประกอบกิจการห้องเย็น แช่แข็งอาหาร</option>
                                <option>(๓.๒๕) การผลิตน้ำแข็ง ยกเว้นการผลิตเพื่อใช้ในสถานที่จำหน่ายอาหารและเพื่อการบริโภคในครัวเรือน</option>
                                <option>(๓.๒๖) การเก็บ การถนอมอาหารด้วยเครื่องจักรที่มีกําลังตั้งแต่ ๕ แรงม้าขึ้นไป</option>
                            </optgroup>
                            <optgroup label="(๔) กิจการที่เกี่ยวกับยา เวชภัณฑ์  อุปกรณ์การแพทย์ เครื่องสําอาง ผลิตภัณฑ์ชําระล้าง">
                                <option>(๔.๑) การผลิต การโม่ การบด การผสม การบรรจุยาด้วยเครื่องจักร</option>
                                <option>(๔.๒) การผลิต การบรรจุยาสีฟัน แชมพู ผ้าเย็น กระดาษเย็น เครื่องสําอางต่าง ๆ</option>
                                <option>(๔.๓) การผลิตสําลี ผลิตภัณฑ์จากสําลี</option>
                                <option>(๔.๔) การผลิตผ้าพันแผล ผ้าปิดแผล ผ้าอนามัย ผ้าอ้อมสําเร็จรูป</option>
                                <option>(๔.๕) การผลิตสบู่ผงซักฟอก ผลิตภัณฑ์ชําระล้างต่าง ๆ</option>
                            </optgroup>
                            <optgroup label="(๕) กิจการที่เกี่ยวกับการเกษตร">
                                <option>(๕.๑) การอัด การสกัดเอาน้ำมันจากพืช</option>
                                <option>(๕.๒) การล้าง การอบ การรม การสะสมยางดิบ</option>
                                <option>(๕.๓) การผลิตแป้งมันสําปะหลัง แป้งสาคูหรือแป้งอื่น ๆ ในทํานองเดียวกันด้วยเครื่องจักร</option>
                                <option>(๕.๔) การสีข้าวด้วยเครื่องจักร</option>
                                <option>(๕.๕) การผลิตยาสูบ</option>
                                <option>(๕.๖) การขัด การกระเทาะ การบดเมล็ดพืช การนวดข้าวด้วยเครื่องจักร</option>
                                <option>(๕.๗) การผลิต การสะสมปุ๋ย</option>
                                <option>(๕.๘) การผลิตใยมะพร้าวหรือวัตถุคล้ายคลึงด้วยเครื่องจักร</option>
                                <option>(๕.๙) การตาก การสะสมหรือการขนถ่ายมันสําปะหลัง</option>
                            </optgroup>
                            <optgroup label="(๖) กิจการที่เกี่ยวกับโลหะหรือแร่">
                                <option>(๖.๑) การผลิตโลหะเป็นภาชนะ เครื่องมือ เครื่องจักร อุปกรณ์หรือเครื่องใช้ต่าง ๆ</option>
                                <option>(๖.๒) การหลอม การหล่อ การถลุงแร่หรือโลหะทุกชนิด ยกเว้นกิจการใน (๖.๑)</option>
                                <option>(๖.๓) การกลึง การเจาะ การเชื่อม การตี การตัด การประสาน การรีด การอัดโลหะด้วยเครื่องจักรหรือก๊าซหรือไฟฟ้า ยกเว้นกิจการใน (๖.๑)</option>
                                <option>(๖.๔) การเคลือบ การชุบโลหะด้วยตะกั่ว สังกะสี ดีบุก โครเมี่ยม นิเกิลหรือโลหะอื่นใด ยกเว้นกิจการใน (๖.๑)</option>
                                <option>(๖.๕) การขัด การล้างโลหะด้วยเครื่องจักร สารเคมี หรือวิธีอื่นใด ยกเว้นกิจการ ใน (๖.๑)</option>
                                <option>(๖.๖) การทําเหมืองแร่ การสะสม การแยก การคัดเลือกหรือการล้างแร่</option>
                            </optgroup>
                            <optgroup label="(๗) กิจการที่เกี่ยวกับยานยนต์ เครื่องจักรหรือเครื่องกล">
                                <option>(๗.๑) การต่อ การประกอบ การเคาะ การปะผุ การพ่นสี การพ่นสารกันสนิมยานยนต์</option>
                                <option>(๗.๒) การตั้งศูนย์ถ่วงล้อ การซ่อม การปรับแต่งระบบปรับอากาศหรืออุปกรณ์ที่เป็นส่วนประกอบของยานยนต์ เครื่องจักรหรือเครื่องกล</option>
                                <option>(๗.๓) การประกอบธุรกิจเกี่ยวกับยานยนต์ เครื่องจักรหรือเครื่องกล ซึ่งมีไว้บริการหรือจําหน่าย และในการประกอบธุรกิจนั้นมีการซ่อมหรือปรับปรุงยานยนต์ เครื่องจักรหรือเครื่องกลดังกล่าวด้วย</option>
                                <option>(๗.๔) การล้าง การอัดฉีดยานยนต์</option>
                                <option>(๗.๕) การผลิต การซ่อม การอัดแบตเตอรี่</option>
                                <option>(๗.๖) การปะ การเชื่อมยาง</option>
                                <option>(๗.๗) การอัดผ้าเบรก ผ้าครัช</option>
                            </optgroup>
                            <optgroup label="(๘) กิจการที่เกี่ยวกับไม้">
                                <option>(๘.๑) การผลิตไม้ขีดไฟ</option>
                                <option>(๘.๒) การเลื่อย การซอย การขัด การไส การเจาะ การขุดร่อง การทําคิ้ว หรือการตัดไม้ด้วยเครื่องจักร</option>
                                <option>(๘.๓) การประดิษฐ์ไม้ หวายเป็นสิ่งของด้วยเครื่องจักร หรือการพ่น การทาสารเคลือบเงาสี หรือการแต่งสําเร็จ  ผลิตภัณฑ์จากไม้หรือหวาย</option>
                                <option>(๘.๔) การอบไม้</option>
                                <option>(๘.๕) การผลิตธูปด้วยเครื่องจักร</option>
                                <option>(๘.๖) การประดิษฐ์สิ่งของ เครื่องใช้ เครื่องเขียนด้วยกระดาษ</option>
                                <option>(๘.๗) การผลิตกระดาษต่าง ๆ</option>
                                <option>(๘.๗) การเผาถ่าน หรือการสะสมถ่าน</option>
                            </optgroup>
                            <optgroup label="(๙) กิจการที่เกี่ยวกับการบริการ">
                                <option>(๙.๑) กิจการสปาเพื่อสุขภาพ เว้นแต่เป็นการให้บริการในสถานพยาบาลตามกฎหมายว่าด้วยสถานพยาบาล</option>
                                <option>(๙.๒) การประกอบกิจการอาบ อบ นวด เว้นแต่เป็นการให้บริการใน (๙.๑) หรือในสถานพยาบาลตามกฎหมาย     ว่าด้วยสถานพยาบาล</option>
                                <option>(๙.๓) การประกอบกิจการสถานที่อาบน้ำ อบไอน้ำ อบสมุนไพร เว้นแต่เป็นการ ให้บริการใน (๙.๑) หรือในสถานพยาบาลตามกฎหมายว่าด้วยสถานพยาบาล</option>
                                <option>(๙.๔) การประกอบกิจการโรงแรมหรือกิจการอื่นในทํานองเดียวกัน</option>
                                <option>(๙.๕) การประกอบกิจการหอพัก อาคารชุดให้เช่า ห้องเช่า ห้องแบ่งเช่า หรือกิจการอื่นในทํานองเดียวกัน</option>
                                <option>(๙.๖) การประกอบกิจการโรงมหรสพ</option>
                                <option>(๙.๗) การจัดให้มีการแสดงดนตรี เต้นรํา รําวง รองแง็ง ดิสโก้เทค คาราโอเกะ หรือการแสดงอื่น ๆ ในทํานองเดียวกัน</option>
                                <option>(๙.๘) การประกอบกิจการสระว่ายน้ำ หรือกิจการอื่น ๆ ในทํานองเดียวกัน เว้นแต่เป็นการให้บริการใน (๙.๑)</option>
                                <option>(๙.๙) การจัดให้มีการเล่นสเก็ตโดยมีแสงหรือเสียงประกอบ หรือการเล่นอื่น ในทํานองเดียวกัน</option>
                                <option>(๙.๑๐) การประกอบกิจการเสริมสวยหรือแต่งผม เว้นแต่กิจการที่อยู่ในบังคับตามกฎหมายว่าด้วยการประกอบวิชาชีพเวชกรรม</option>
                                <option>(๙.๑๑) การประกอบกิจการให้บริการควบคุมน้ำหนัก โดยวิธีการควบคุมทางโภชนาการ ให้อาหารที่มีวัตถุประสงค์พิเศษ การบริหารร่างกายหรือโดยวิธีอื่นใด เว้นแต่เป็นการให้บริการใน</option>
                                <option>(๙.๑) หรือในสถานพยาบาลตามกฎหมายว่าด้วยสถานพยาบาล</option>
                                <option>(๙.๑๒) การประกอบกิจการสวนสนุก ตู้เกม</option>
                                <option>(๙.๑๓) การประกอบกิจการสนามกอล์ฟหรือสถานฝึกซ้อมกอล์ฟ</option>
                                <option>(๙.๑๔) การประกอบกิจการห้องปฏิบัติการทางการแพทย์ การสาธารณสุขวิทยาศาสตร์ และสิ่งแวดล้อม</option>
                                <option>(๙.๑๕) การสักผิวหนัง การเจาะหูหรือเจาะอวัยวะอื่น</option>
                                <option>(๙.๑๖) การประกอบกิจการให้บริการเลี้ยงและดูแลเด็กที่บ้าน</option>
                            </optgroup>
                            <optgroup label="(๑๐) กิจการที่เกี่ยวกับสิ่งทอ">
                                <option>(๑๐.๑) การปั่นด้าย การกรอด้าย การทอผ้าด้วยเครื่องจักร หรือการทอผ้าด้วยกี่กระตุกตั้งแต่ ๕ กี่ขึ้นไป</option>
                                <option>(๑๐.๒) การสะสมปอ ป่าน ฝ้ายหรือนุ่น</option>
                                <option>(๑๐.๓) การปั่นฝ้ายหรือนุ่นด้วยเครื่องจักร</option>
                                <option>(๑๐.๔) การทอเสื่อ กระสอบ พรม หรือสิ่งทออื่น ๆ ด้วยเครื่องจักร</option>
                                <option>(๑๐.๕) การเย็บผ้าด้วยเครื่องจักรตั้งแต่ ๕ เครื่องขึ้นไป</option>
                                <option>(๑๐.๖) การพิมพ์ผ้า หรือการพิมพ์บนสิ่งทออื่น ๆ</option>
                                <option>(๑๐.๗) การซัก การอบ การรีด การอัดกลีบผ้าด้วยเครื่องจักร</option>
                                <option>(๑๐.๘) การย้อม การกัดสีผ้าหรือสิ่งทออื่น ๆ</option>
                            </optgroup>
                            <optgroup label="(๑๑) กิจการที่เกี่ยวกับหิน ดิน ทราย ซีเมนต์ หรือวัตถุที่คล้ายคลึง">
                                <option>(๑๑.๑) การผลิตภาชนะดินเผาหรือผลิตภัณฑ์ดินเผา</option>
                                <option>(๑๑.๒) การระเบิด การโม่ การป่นหินด้วยเครื่องจักร</option>
                                <option>(๑๑.๓) การผลิตเครื่องใช้ด้วยซีเมนต์หรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๑.๔) การสะสม การผสมซีเมนต์ หิน ทราย หรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๑.๕) การเจียระไนเพชร พลอย หิน กระจก หรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๑.๖) การเลื่อย การตัด หรือการประดิษฐ์หินเป็นสิ่งของต่าง ๆ</option>
                                <option>(๑๑.๗) การผลิตชอล์ค ปูนปาสเตอร์ ปูนขาว ดินสอพอง หรือการเผาหินปูน</option>
                                <option>(๑๑.๘) การผลิตผลิตภัณฑ์ต่าง ๆ ที่มีแร่ใยหินเป็นส่วนประกอบหรือส่วนผสม เช่น ผ้าเบรค ผ้าครัช กระเบื้องมุงหลังคา กระเบื้องยาง ฝ้าเพดาน ท่อน้ำ เป็นต้น</option>
                                <option>(๑๑.๙) การผลิตกระจกหรือผลิตภัณฑ์แก้ว</option>
                                <option>(๑๑.๑๐) การผลิตกระดาษทราย</option>
                                <option>(๑๑.๑๑) การผลิตใยแก้วหรือผลิตภัณฑ์จากใยแก้ว</option>
                            </optgroup>
                            <optgroup label="(๑๒) กิจการที่เกี่ยวกับปิโตรเลียม ถ่านหิน สารเคมี">
                                <option>(๑๒.๑) การผลิต การบรรจุ การสะสม การขนส่งกรด ด่าง สารออกซิไดส์ หรือสารตัวทําละลาย</option>
                                <option>(๑๒.๒) การผลิต การบรรจุ การสะสม การขนส่งก๊าซ</option>
                                <option>(๑๒.๓) การผลิต การกลั่น การสะสม การขนส่งน้ำมันปิโตรเลียม หรือผลิตภัณฑ์ปิโตรเลียมต่าง ๆ</option>
                                <option>(๑๒.๔) การผลิต การสะสม การขนส่งถ่านหิน ถ่านโค้ก</option>
                                <option>(๑๒.๕) การพ่นสี ยกเว้นกิจการใน (๗.๑)</option>
                                <option>(๑๒.๖) การประดิษฐ์สิ่งของเครื่องใช้ด้วยยาง ยางเทียม พลาสติก เซลลูลอยด์ เบเกอร์ไลท์ หรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๒.๗) การโม่ การบดชัน</option>
                                <option>(๑๒.๘) การผลิตสีหรือน้ำมันผสมสี</option>
                                <option>(๑๒.๙) การผลิต การล้างฟิล์มรูปถ่ายหรือฟิล์มภาพยนตร์</option>
                                <option>(๑๒.๑๐) การเคลือบ การชุบวัตถุด้วยพลาสติก เซลลูลอยด์ เบเกอร์ไลท์ หรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๒.๑๑) การผลิตพลาสติก เซลลูลอยด์ เบเกอร์ไลท์ หรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๒.๑๒) การผลิต การบรรจุสารเคมีดับเพลิง</option>
                                <option>(๑๒.๑๓) การผลิตน้ำแข็งแห้ง</option>
                                <option>(๑๒.๑๔) การผลิต การสะสม การขนส่งดอกไม้เพลิงหรือสารเคมีอันเป็นส่วนประกอบในการผลิตดอกไม้เพลิง</option>
                                <option>(๑๒.๑๕) การผลิตแชลแล็คหรือสารเคลือบเงา</option>
                                <option>(๑๒.๑๖) การผลิต การบรรจุ การสะสม การขนส่งกําจัดศัตรูพืชหรือพาหะนําโรค</option>
                                <option>(๑๒.๑๗) การผลิต การบรรจุ การสะสมกาว</option>
                            </optgroup>
                            <optgroup label="(๑๓) กิจการอื่น ๆ">
                                <option>(๑๓.๑) การพิมพ์หนังสือหรือสิ่งพิมพ์อื่นที่มีลักษณะเดียวกันด้วยเครื่องจักร</option>
                                <option>(๑๓.๒) การผลิต การซ่อมเครื่องอิเล็กทรอนิกส์เครื่องไฟฟ้า อุปกรณ์อิเล็กทรอนิกส์อุปกรณ์ไฟฟ้า</option>
                                <option>(๑๓.๓) การผลิตเทียน เทียนไขหรือวัตถุที่คล้ายคลึง</option>
                                <option>(๑๓.๔) การพิมพ์แบบ พิมพ์เขียว หรือการถ่ายเอกสาร</option>
                                <option>(๑๓.๕) การสะสมวัตถุหรือสิ่งของที่ชํารุด ใช้แล้วหรือเหลือใช้</option>
                                <option>(๑๓.๖) การประกอบกิจการโกดังสินค้า</option>
                                <option>(๑๓.๗) การล้างขวด ภาชนะหรือบรรจุภัณฑ์ที่ใช้แล้ว</option>
                                <option>(๑๓.๘) การพิมพ์สีลงบนวัตถุที่มิใช้สิ่งทอ</option>
                                <option>(๑๓.๙) การก่อสร้าง</option>
                                <option>(๑๓.๑๐) กิจการท่าเทียบเรือประมง สะพานปลา หรือแพปลา</option>
                            </optgroup>
                            </select>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment">สถานประกอบการ(รวมทั้งอาคารประกอบการ)เนื้อที่ (ตารางเมตร)<span
                                        class="text-danger">*</span></label>
                                <input type="number" step="1" min="0" class="form-control rounded-0" id="business_area" name="business_area" placeholder="" required value="">
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-12 ">
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="">
                                        อาคารประกอบการ
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="building" id="building_existing" value="building_existing">
                                    <label class="form-check-label" for="building_existing">มีอยู่เดิม</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="building" id="building_new" value="building_new">
                                    <label class="form-check-label" for="building_new">ก่อสร้างใหม่</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mb-3">
                                <label for="establishment">สถานที่ประกอบการอยู่ใกล้เคียงกับ<span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="business_nearby" name="business_nearby" placeholder="" required value="">
                                
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="work">ทำงานปกติตั้งแต่เวลา (น.)<span class="text-danger">*</span></label>
                                <input type="time" class="form-control rounded-0" id="open_time" name="open_time" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="time">ถึงเวลา (น.)<span class="text-danger">*</span></label>
                                <input type="time" class="form-control rounded-0" id="close_time" name="close_time" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-4 form-group mb-3">
                                <label for="weekly">วันหยุดงานประจำสัปดาห์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="close_day" name="close_day" placeholder="" required value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label for="latitude">ละติจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="latitude" name="latitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="longitude">ลองจิจูด<span class="text-danger">*</span></label>
                                <input type="text" class="form-control rounded-0" id="longitude" name="longitude" placeholder="" required value="">
                            </div>
                            <div class="col-12 mt-2 mb-4">
                                <div id="map" style="height: 500px;"></div>
                            </div>
                        </div>

                        <RegistrationFileUpload />

                    
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
    import RegistrationFileUpload from '@/components/RegistrationFileUpload.vue'
</script>
