<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-blue-grey text-white shadow-2">
        <q-toolbar-title class="q-pa-md"> Crediexpress </q-toolbar-title>
        <q-btn flat dense round icon="logout" aria-label="Menu" @click="creditStore.clearCredit()"
          v-if="creditStore.credit" />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

import { useCreditStore } from "stores/credit-store";

defineOptions({
  name: "MainLayout",
});

const creditStore = useCreditStore();
// const leftDrawerOpen = ref(false);

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
