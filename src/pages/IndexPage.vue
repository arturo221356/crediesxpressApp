<template>
  <CreditPage v-if="creditStore.credit" />

  <NoReferencePage v-else />

  {{ route.query.referencia }}
</template>

<script setup>
import NoReferencePage from "pages/NoReferencePage.vue";

import CreditPage from "pages/CreditPage.vue";

import { useCreditStore } from "stores/credit-store";

import { useRoute } from "vue-router";

import { onMounted, watch } from "vue";

const creditStore = useCreditStore();

const route = useRoute();

defineOptions({
  name: "IndexPage",
});

defineProps({
  reference: String,
});

onMounted(() => {
  if (route?.params?.reference || route.query?.referencia) {
    creditStore.reference = route.query?.referencia || route.params.reference;

    creditStore.fetchCredit();
  }
});
</script>
