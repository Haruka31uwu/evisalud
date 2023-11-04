<template>
  <section class="our-programs-section" id="programs-list" >
    <div class="section-title">
      <h2>Nuestros Programas</h2>
      <div class="section-decorator"></div>
    </div>
    <h3>
      Descubre nuestros programas exclusivos: ¡paquetes de cursos diseñados para
      potenciar tus habilidades!
    </h3>
    <div class="programs-container" >
      <courses-program-item
        v-for="program in programs.programsList"
        :key="program.id"
        :program="program"
      />
    </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import programsData from "/src/data/programs.json";
export default defineComponent({
  setup() {
    const programs = ref(programsData);
    return {
      programs,
    };
  },
});
</script>
