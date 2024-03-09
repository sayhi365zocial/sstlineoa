<template>
    <div class="row mb-3">
        <div class="col-4">
            <div class="progress" role="progressbar" aria-label="Success example" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" :style="{'width': percentage + '%'}"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    percentage: Number,
});
</script>

<style>
    .progress {
        height: 0.5rem;
    }
</style>