<template>
  <section class="reasons-list">
    <div class="reason-list-content">
      <div v-for="(reason, index) in reasonsList" :key="`reason-${index}`" class="reason-list-item">
        <div class="reason-header">
          <img :src="reason.icon" />
          <h3>{{ reason.title }}</h3>
        </div>
          <ul>
            <li
              v-for="(reasonItem, itemIndex) in reason.reasons"
              :key="`reason-item-${itemIndex}`"
            >{{ reasonItem }}</li>
          </ul>
          <button class="btn-blue" @click="redirectTo('/courses',reason.id)">Ver Cursos</button>
        </div>
      </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import {redirectTo} from "/composables/main-composables.js";
export default defineComponent({
  setup() {
    const reasonsList = ref([
      {
        icon: "/assets/img/lupa.svg",
        title: "¿Por qué aprender a realizar investigación de calidad?",
        id: "investigation-courses",
        reasons: [
          "Potencia tu perfil profesional y tu producción científica",
          "Investigaciones mal realizadas llevan a decisiones perjudiciales",
          "No es ético hacer investigación con métodos inapropiados",
          "Evita retrasar el avance científico",
        ],
      },
      {
        icon: "/assets/img/board.svg",
        title: "¿Por qué aprender a tomar decisiones basadas en evidencia?",
        id: "evidences-courses",
        reasons: [
          "A la vanguardia en el campo clínico",
          "Mejora la calidad de la atención de salud: mejora resultados en salud, evita daños innecesarios a los pacientes ",
          "Minimiza el error y la variabilidad en el manejo clínico",
          "Evita retrasar el avance científico",
        ],
      },
    ]);
    return {
      reasonsList,
    };
  },
});
</script>
