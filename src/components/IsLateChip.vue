<template>
    <q-chip :icon="useIsLate(props.dueDate).icon" :label="useIsLate(props.dueDate).isLateMessage"
        :color="useIsLate(props.dueDate).color" text-color="white" v-if="useIsLate(props.dueDate).isLate"></q-chip>
</template>

<script setup>
import moment from "moment";
import { useIsLate } from "src/helpers/isLate";

const now = moment.now();

const props = defineProps({
    dueDate: { String },
});
</script>
