<template>
  <section class="course-metodology">
    <div class="section-title" style="margin-bottom: 2em">
      <h2>Nuestra Metodologia</h2>
      <div class="section-decorator"></div>
    </div>
    <div class="qualities-list">
      <div
        class="quality-item"
        v-for="(quality, index) in qualities"
        :key="`quality-${index}`"
      >
      <div class="quality-content-2" :style="index%2==0?'align-self:flex-start':'align-self:flex-end'">
        <img :src="quality.logo" width="100" height="100"/>
        <div class="quality-content-text-2" >
            <h4>{{ quality.title }}</h4>
            <ul>
              <li v-for="(content, index2) in quality.content" :key="`content-${index2}`">
                {{content}}
              </li>
            </ul>
        </div>
      </div>

    </div>
    </div>
  </section>
</template>
<script setup>
const qualities = ref([
  {
    logo: "/assets/img/class-quality.svg",
    title: "Calidad educativa",
    content:[
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    ]
      
  },
  {
    logo: "/assets/img/hard-to-easy.svg",
    title: "Hacemos sencillo lo difícil:",
    content:[
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    ]
  },
  {
    logo: "/assets/img/learning.svg",
    title: "Aprende haciendo:",
    content:[
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones",
    ]
  },

]);
</script>