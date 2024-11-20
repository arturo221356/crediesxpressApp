<template>
  <q-page>
    <q-toolbar class="bg-primary text-white">
      <q-btn flat dense icon="home" label="ir a inicio" :to="{ name: 'home' }" />
    </q-toolbar>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6 text-center">
          Documento de Garantía para Equipos Celulares
        </div>
        <q-separator class="q-my-md" />
        <div>
          <p><strong>Nombre del vendedor:</strong> {{ proveedor }}</p>
          <p><strong>Fecha de Compra:</strong> {{ fechaCompra }}</p>
          <p><strong>Número de Serie del Equipo:</strong> {{ numeroSerie }}</p>
          <p><strong>Duración de la Garantía:</strong> {{ duracionGarantia }}</p>
        </div>
      </q-card-section>

      <q-separator class="q-my-md" />

      <q-card-section>
        <div class="text-h6">Alcance de la Garantía</div>
        <p>
          Este documento establece los términos y condiciones bajo los cuales el proveedor
          ofrece garantía limitada para el equipo celular adquirido. La garantía cubre
          exclusivamente defectos de fabricación en el equipo.
        </p>
      </q-card-section>

      <q-separator class="q-my-md" />

      <q-card-section>
        <div class="text-h6">Condiciones para la Aplicación de la Garantía</div>
        <q-list dense>
          <q-item>
            <q-item-section
              >El cliente debe presentar el comprobante de compra original junto con este
              documento.</q-item-section
            >
          </q-item>
          <q-item>
            <q-item-section
              >El equipo debe ser entregado en su estado original, sin alteraciones
              externas o internas no autorizadas.</q-item-section
            >
          </q-item>
          <q-item>
            <q-item-section
              >El diagnóstico técnico será realizado únicamente en un centro de servicio
              autorizado por el proveedor.</q-item-section
            >
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator class="q-my-md" />

      <q-card-section>
        <div class="text-h6">Causas de Invalidez de la Garantía</div>
        <q-list dense>
          <q-item>
            <q-item-section>
              <strong>Reparaciones no autorizadas:</strong> Intervención, manipulación o
              reparación realizada por talleres, técnicos o centros de servicio no
              certificados por el proveedor, o uso de piezas no originales.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Daños físicos:</strong> Golpes, caídas, deformaciones, rayaduras,
              grietas o cualquier otro daño mecánico provocado por mal manejo o accidente.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Daños por líquidos:</strong> Exposición a líquidos de cualquier
              tipo, incluso en equipos con certificación de resistencia al agua.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Uso indebido:</strong> Condiciones de uso diferentes a las
              especificadas en el manual del usuario o instalación de software no
              autorizado.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Alteración del equipo:</strong> Eliminación del número de serie,
              etiqueta o sello de garantía.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Olvido del patrón de desbloqueo:</strong> La garantía no cubre
              problemas relacionados con el olvido de contraseñas, patrones de desbloqueo
              o cualquier medida de seguridad configurada por el usuario que impida el
              acceso al dispositivo.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Equipos a Crédito:</strong> Si el equipo fue adquirido bajo un
              esquema de financiamiento o crédito, el cliente deberá estar al corriente
              con sus pagos para acceder al servicio de garantía. La falta de pagos anula
              la cobertura.
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator class="q-my-md" />

      <q-card-section>
        <div class="text-h6">Vigencia de la Garantía</div>
        <p>
          La duración de la garantía dependerá de la política del proveedor y será de
          <strong>6 meses</strong> o <strong>1 año</strong> a partir de la fecha de
          compra. El plazo no se extiende por reparaciones realizadas bajo garantía.
        </p>
      </q-card-section>

      <q-separator class="q-my-md" />

      <q-card-section>
        <div class="text-h6">Proceso para Reclamar la Garantía</div>
        <ol>
          <li>
            El cliente debe notificar al proveedor sobre el problema dentro del período de
            garantía.
          </li>
          <li>
            El equipo deberá ser entregado en un centro autorizado junto con la
            documentación requerida.
          </li>
          <li>
            El diagnóstico inicial se realizará en un plazo estimado de
            <strong>10 días hábiles</strong>.
          </li>
          <li>
            El tiempo total para la resolución del caso será de
            <strong>10 a 45 días naturales</strong>, dependiendo de la disponibilidad de
            repuestos y/o autorización del fabricante.
          </li>
        </ol>
      </q-card-section>

      <q-separator class="q-my-md" />
    </q-card>
  </q-page>
</template>

<script>
import { useCreditStore } from "stores/credit-store";
import moment from "moment";

const creditStore = useCreditStore();

export default {
  name: "GarantiaEquiposCelulares",
  data() {
    return {
      proveedor: creditStore.credit?.brand?.name || "Vendedor",
      fechaCompra:
        moment(creditStore.credit?.created_at).format("DD-MM-YY") || "01-01-1990",
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
