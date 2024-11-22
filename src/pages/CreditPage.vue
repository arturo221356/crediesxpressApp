<template>
  <q-page>
    <q-pull-to-refresh @refresh="refresh">
      <div
        style="max-width: 800px"
        class="col"
      >
        <div>
          <div class="q-ma-lg">
            <q-img
              src="~assets/crediexpress-logo-no-background.jpeg"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <q-card-section>
            <IsBlacklistedChip :is-blacklisted="creditStore.credit.is_imei_blacklisted" />
            <IsSettledChip :finished_at="creditStore.credit.finished_at" />
            <IsLateChip :due-date="creditStore.credit.due_at" />
            <LastConnectedChip
              :last-connection="creditStore.credit.last_connected_at"
              v-if="!creditStore.credit.finished_at"
            />
          </q-card-section>

          <q-card-section>
            <q-item-label class="text-h5">Hola, {{ creditStore.credit.client.name }}
              {{ creditStore.credit.client.middlename }}
            </q-item-label>
          </q-card-section>
          <q-card-section>
            <q-item-label
              class="text-body1"
              v-if="!creditStore.credit.finished_at"
            >
              Fecha limite de pago :
              {{ moment(creditStore.credit.due_at).format("DD-MM-YY") }}
            </q-item-label>
            <q-item-label class="text-body1">
              Referencia: {{ creditStore.credit.reference }}
            </q-item-label>
            <q-item-label class="text-body1">
              Equipo: {{ creditStore.credit.device_name }}
            </q-item-label>

            <q-item-label class="text-body1">
              Parcialidad: ${{ creditStore.credit.installment_amount }}
            </q-item-label>
            <!-- <q-item-label>
              Por liquidar: ${{ creditStore.credit.settlement_amount }}
            </q-item-label> -->
          </q-card-section>

          <q-card-section>
            <ProgressBar />
          </q-card-section>

          <q-card-section>
            <PaymentsList />
          </q-card-section>
        </div>
      </div>

      <div class="q-my-xl">
        <q-toolbar class="bg-white text-primary">
          <q-btn
            flat
            dense
            icon="smartphone"
            label="garantia"
            :to="{ name: 'garantia' }"
          />
        </q-toolbar>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script setup>
  import { useCreditStore } from "stores/credit-store";
  import ProgressBar from "components/ProgressBar.vue";
  import PaymentsList from "components/PaymentsList.vue";
  import { defineAsyncComponent, onMounted, onBeforeUnmount } from "vue";
  import moment from "moment";

  const creditStore = useCreditStore();

  const LastConnectedChip = defineAsyncComponent(() =>
    import("components/LastConnectedChip.vue")
  );
  const IsLateChip = defineAsyncComponent(() => import("components/IsLateChip.vue"));
  const IsSettledChip = defineAsyncComponent(() => import("components/IsSettledChip.vue"));
  const IsBlacklistedChip = defineAsyncComponent(() =>
    import("components/IsBlacklistedChip.vue")
  );

  onMounted(() => {
    creditStore.fetchCredit();

    Echo.channel(`credits.${creditStore.credit.id}`).listen("CreditUpdated", (e) => {
      creditStore.fetchCredit();
    });
  });

  const refresh = async (done) => {
    await creditStore.fetchCredit();

    done();
  };
</script>
