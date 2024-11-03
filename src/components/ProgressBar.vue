<template>
    <q-linear-progress :value="(creditStore.credit.payments.length - 1) / creditStore.credit.installments" rounded
        color="primary" track-color="grey" size="30px">
        <div class="absolute-full flex flex-center">
            <q-badge color="blue-grey" text-color="white" :label="progressLabel" />
        </div>
    </q-linear-progress>
</template>

<script setup>
import { computed } from "vue";

import { useCreditStore } from "stores/credit-store";

const creditStore = useCreditStore();

const progressLabel = computed(() => {
    return `Pagos: ${creditStore.credit.payments.length - 1} de ${creditStore.credit.installments
        }`;
});
</script>
