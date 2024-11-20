<template>
  <CreditPage v-if="creditStore.credit" />

  <NoReferencePage v-else />
</template>

<script setup>
import { onMounted, defineAsyncComponent, onServerPrefetch } from "vue";

import { useCreditStore } from "stores/credit-store";

import { useRoute } from "vue-router";

const creditStore = useCreditStore();

const route = useRoute();

defineOptions({
  name: "IndexPage",
});

defineProps({
  reference: String,
});

const NoReferencePage = defineAsyncComponent(() => import("pages/NoReferencePage.vue"));
const CreditPage = defineAsyncComponent(() => import("pages/CreditPage.vue"));

const name = async () => {
  if (route?.params?.reference || route.query?.referencia) {
    creditStore.reference = route.query?.referencia || route.params.reference;

    await creditStore.fetchCredit();
  }
};

name();
</script>
