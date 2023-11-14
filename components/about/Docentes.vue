<template>
    <section>
      <div  class="section-title d-flex flex-column justify-content-center align-items-center">
       <div style="position: relative;">
        <h2>Plana Docente</h2>
        <img src="/assets/img/courses/docentes-item.svg" style="bottom:0;right: -1em;position: absolute;"  />
       </div>
       <input type="text" style="position: absolute;right:2em;top:5em" v-model="inputDoctor" class="search-input" placeholder="Buscar Docente"/>
      </div>
      <div class="section-items">
        <about-docente-item
          v-for="docente in docentes.filter(docente=>docente.name.toLowerCase().includes(inputDoctor.toLowerCase()))"
          :key="docente.id"
          :docente="docente"
        />
      </div>
    </section>
  </template>
  <script>
  import { onBeforeMount, ref } from 'vue';
  import { getAllDocentes } from '/composables/docentes-composables.js'
  export default {
    setup() {
      const inputDoctor=ref("");
      const docentes = ref([]);
      onBeforeMount(async () => {
        try {
           docentes.value=getAllDocentes();
           console.log(docentes.value);
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        docentes,
        inputDoctor
      };
    }
  }
  </script>
  
  <style scoped>
  section {
    background: var(--EVI-DARK-005, #1c1c24);
    box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.2);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 2em 0;
  }
  
  
  img {
    margin-top: -2.2em;
  }.section-items{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 70%;
      margin-top: 2em;
      height: auto;
  }
  </style>