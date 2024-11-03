<template>
    <q-page class="flex flex-center">
        <div class="col" style="max-width: 800px">
            <q-card class="q-pa-xl">
                <div class="q-ma-lg">
                    <q-img src="~assets/crediexpress-logo-no-background.jpeg" spinner-color="primary"
                        spinner-size="82px" />
                </div>

                <q-card-section>
                    <div class="text-h6">Escribe tu numero de referencia:</div>
                    <q-input v-model="reference" type="text" label="Referencia" />
                </q-card-section>
                <q-card-section class="text-center">
                    <q-btn color="primary" icon="check" label="Consultar" @click="onClick" rounded />
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script setup>
import { useCreditStore } from "stores/credit-store";
import { ref } from "vue";

const creditStore = useCreditStore();

const reference = ref(creditStore.reference);

const onClick = () => {
    creditStore.reference = reference.value;

    creditStore.fetchCredit();
};
</script>
