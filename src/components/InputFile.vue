<template>
    <div class="box__input">
        <input class="box__file" type="file" name="`${name}[]`" id="file" data-multiple-caption="{count} files selected" multiple />
        <label for="file">
            <strong>
                <i class="ri-upload-cloud-2-line"></i>
                อัปโหลดเอกสาร
            </strong>
        </label>
        <button class="box__button" type="submit">Upload</button>
    </div>
</template>


<script setup>
defineProps({
    name: String,
});
</script>

<style lang="scss">
    .box__input {
        .box__file, .box__button {
            display: none;
        }

        label {
            cursor: pointer;
            background-color: #E6E9E2;
            width: 100%;
            height: 4rem;
            border: 1px dashed #04543B54;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            color: #04543B;
            border-radius: 0.5rem;
        }
    }
</style>
