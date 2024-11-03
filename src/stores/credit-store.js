import { defineStore } from "pinia";

import axios from "axios";

export const useCreditStore = defineStore("credit", {
  state: () => ({
    reference: null,

    credit: null,
  }),
  persist: true,

  getters: {
    doubleCount: (state) => 10,
  },
  actions: {
    clearReference() {
      this.reference = null;
    },

    clearCredit() {
      this.credit = null;
      this.reference = null;
    },

    async fetchCredit() {
      axios
        .get(
          `https://www.crediexpress.net/api/credit-externo/${this.reference}`,
        )
        .then((response) => {
          this.credit = response.data.data;
        })
        .catch((e) => {
          // Capturamos los errores
        });
    },
  },
  getters: {
    sortedPayments: (state) =>
      state.credit.payments.sort(function (a, b) {
        return b.id - a.id;
      }),
  },
});
