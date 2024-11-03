<template>
    <q-chip icon="assignment_turned_in" label="Liquidado" color="positive" text-color="white"
        v-if="!!props.finished_at"></q-chip>
</template>

<script setup>
import moment from "moment";

const now = moment.now();

const props = defineProps({
    finished_at: { String, default: null },
});
</script>
