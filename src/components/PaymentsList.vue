<template>
    <div class="col">
        <span class="text-h6">Pagos:</span>
        <q-virtual-scroll :items="creditStore.sortedPayments" virtual-scroll-horizontal v-slot="{ item }" dense>
            <q-item>
                <q-item-section top avatar>
                    <q-item-label>
                        {{ item.description }}
                    </q-item-label>
                    <q-item-label> ${{ item.public_price }} </q-item-label>
                    <q-item-label>
                        <q-icon name="calendar_month" />
                        {{ moment(item.created_at).format("DD-MM-YY HH:m:s") }}
                    </q-item-label>
                </q-item-section>
            </q-item>
            <q-separator spaced inset vertical />
        </q-virtual-scroll>
    </div>
</template>

<script setup>
import { useCreditStore } from "stores/credit-store";
import moment from "moment";

const creditStore = useCreditStore();
</script>
