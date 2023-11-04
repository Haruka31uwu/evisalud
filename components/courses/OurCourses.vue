<template>
  <section class="our-courses-section">
    <div class="section-title" style="margin-bottom: 2em">
      <h2>Nuestros cursos?</h2>
      <div class="section-decorator"></div>
    </div>
    <div class="our-courses-banner">
      <div class="our-courses-banner-text">
        <p>
          Brindamos <span @click="scrollIntoView('courses-list')">cursos</span> y <span @click="scrollIntoView('programs-list')">programas </span> de
          capacitación orientados a profesionales y estudiantes de diversas
          áreas de la salud.
        </p>
      </div>
    </div>
    <div class="our-couses-description">
        <div class="our-courses-description-text">
            <p>
                Nuestros cursos están enmarcados en dos programas de formación: 
                <br>
                <span @click="scrollIntoView('investigation-courses')">
                    Investigación en salud
                </span>    y   
                <span @click="scrollIntoView('evidences-courses')">
                    Medicina basada en evidencias.
                </span>
            </p>
        </div>
    </div>
  </section>
</template>
<script setup>
import {scrollIntoView} from "/composables/main-composables.js";
</script>