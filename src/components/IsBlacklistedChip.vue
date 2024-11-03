<template>
    <q-chip icon="mobile_off" label="IMEI reportado" color="black" text-color="white"
        v-if="props.isBlacklisted"></q-chip>
</template>

<script setup>
const props = defineProps({
    isBlacklisted: { Boolean, default: false },
});
</script>
