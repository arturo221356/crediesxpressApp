<template>
    <q-chip icon="signal_wifi_bad" :label="`Ultima conexión hace ${diff} ${diasMsg}`" color="negative"
        text-color="white" v-if="diff >= 1" />
</template>

<script setup>
import moment from "moment";
import { computed } from "vue";

const now = moment.now();

const props = defineProps({
    lastConnection: { String },
});
const diff = computed(() => {
    return moment(props.lastConnection).diff(now, "days") * -1;
});

const diasMsg = computed(() => {
    return moment(props.lastConnection).diff(now, "days") * -1 > 1 ? "días" : "dia";
});
</script>
