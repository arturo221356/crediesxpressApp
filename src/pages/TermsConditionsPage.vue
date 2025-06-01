<template>
    <q-page>
        <q-toolbar class="bg-primary text-white">
            <q-btn
                flat
                dense
                icon="home"
                label="ir a inicio"
                :to="{ name: 'home' }"
            />
        </q-toolbar>
        <q-card class="q-pa-md">
            <q-card-section>
                <div class="text-h6 text-center">
                    Términos y Condiciones para la Adquisición de Equipos Celulares a Crédito
                </div>
                <q-separator class="q-my-md" />
                <div>
                    <p>
                        Al aceptar estos Términos y Condiciones, usted ("el Cliente") reconoce y
                        acepta las siguientes disposiciones relacionadas con la adquisición de equipos
                        celulares a crédito.
                    </p>

                    <p><strong>Nombre del vendedor:</strong> {{ proveedor }}</p>
                    <p><strong>Cliente:</strong> {{ client.full_name }}</p>
                    <p><strong>Fecha de Aceptación:</strong> {{ fechaCompra }}</p>
                    <p><strong>Número de Serie del Equipo:</strong> {{ numeroSerie }}</p>
                    <p>
                        <strong>Al adquirir el crédito para este Equipo, el Cliente declara haber leído,
                            comprendido y aceptado la totalidad de los presentes Términos y
                            Condiciones.</strong>
                    </p>
                </div>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
                <div class="text-h6">1. Objeto del Contrato</div>
                <p>
                    El presente contrato tiene por objeto establecer los términos y condiciones bajo
                    los cuales el Cliente adquiere un equipo celular mediante un esquema de pagos a
                    crédito.
                </p>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
                <div class="text-h6">Pagos y Plazos</div>
                <q-list dense>
                    <q-item>
                        <q-item-section>
                            El Cliente se compromete a realizar los pagos acordados por la adquisición
                            del Equipo en las fechas y montos establecidos en el plan de pagos. El
                            incumplimiento de los pagos en las fechas estipuladas generará las
                            consecuencias descritas en la cláusula 3.
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
                <div class="text-h6">
                    3. Consecuencias por Atraso en Pagos y Bloqueo del Equipo
                </div>
                <q-list dense>
                    <q-item>
                        <q-item-section>
                            En caso de que el Cliente se atrase en el pago de cualquiera de las cuotas
                            acordadas, el Vendedor tendrá la facultad de bloquear el funcionamiento del
                            Equipo de forma remota. Este bloqueo podrá inhabilitar parcial o totalmente
                            las funciones del Equipo, incluyendo, pero no limitado a, llamadas,
                            mensajes, acceso a internet y uso de aplicaciones, hasta que el Cliente
                            regularice su situación de pago.
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
                <div class="text-h6">
                    4. Permanencia de la Aplicación de Bloqueo y Prohibición de Venta
                </div>
                <p>
                    La aplicación utilizada para el bloqueo del Equipo permanecerá instalada en el
                    mismo y no será retirada hasta la liquidación total del saldo adeudado por la
                    adquisición de este Equipo. Asimismo, si el Cliente tuviera otros equipos
                    celulares adquiridos a crédito con el Vendedor y presentara adeudos en
                    cualquiera de ellos, la aplicación de bloqueo no será retirada de ningún Equipo
                    hasta que todos los adeudos sean liquidados en su totalidad. El Vendedor se
                    reserva el derecho de bloquear cualquier Equipo asociado a la cuenta del Cliente
                    si existiera algún adeudo pendiente en cualquiera de los contratos de crédito.
                </p>
                <br />

                <q-separator class="q-my-md" />

                <p>
                    Además, el Cliente reconoce y acepta que la venta, traspaso, donación o
                    cualquier otra forma de enajenación del Equipo a terceros está estrictamente
                    prohibida mientras la aplicación de bloqueo permanezca instalada en el Equipo.
                    El Equipo no es considerado de plena propiedad del Cliente hasta que se haya
                    liquidado el total del adeudo y la aplicación de bloqueo haya sido retirada.
                    Cualquier intento de venta o traspaso antes de la liquidación total del adeudo
                    podría resultar en la rescisión del contrato y las acciones legales
                    correspondientes.
                </p>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
                <div class="text-h6">7. Protección de Datos Personales</div>
                <p>
                    El Cliente autoriza al Vendedor a utilizar sus datos personales para fines
                    relacionados con la gestión del crédito, cobranza y el cumplimiento de este
                    contrato, de acuerdo con la legislación vigente en materia de protección de
                    datos.
                </p>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
                <div class="text-h6">7. Protección de Datos Personales</div>
                <p>
                    El Cliente autoriza al Vendedor a utilizar sus datos personales para fines
                    relacionados con la gestión del crédito, cobranza y el cumplimiento de este
                    contrato, de acuerdo con la legislación vigente en materia de protección de
                    datos.
                </p>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
    import { useCreditStore } from "stores/credit-store";
    import moment from "moment";

    const creditStore = useCreditStore();

    export default {
        name: "TermsConditions",
        data() {
            return {
                client: creditStore.credit?.client || "",
                proveedor: creditStore.credit?.brand?.name || "Vendedor",
                fechaCompra:
                    moment(creditStore.credit?.created_at).format("DD-MM-YY HH:MM:SS") ||
                    "01-01-1990",
                numeroSerie: creditStore.credit?.device?.imei || "999999999999999",
                duracionGarantia: "6 meses / 1 año depende proveedor",
                creditStore,
            };
        },
    };
</script>

<style scoped>
    .text-h6 {
        font-weight: bold;
    }
</style>
