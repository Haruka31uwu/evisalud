<template>
  <section class="section-explorer">
    <div class="section-content" style="position: relative">
      <input
        type="text"
        style="align-self: flex-end"
        :style="currentWindowWidth < 1024 ? 'width: 90%;margin:0 auto;margin-bottom:1em' : 'width:300px'"
        class="search-input"
        placeholder="Buscar curso"
        v-model="courseInput"
      />
      <div
        class="courses-list-container"
        v-for="(programtype, index) in courses.coursesTypes"
        :key="`typeProgram-${index}`"
      >
        <h4
          :id="
            programtype.id == 1 ? 'investigation-courses' : 'evidences-courses'
          "
          class="ms-5"
        >
          {{ programtype.title }}
        </h4>
        <hr />
        <div
          class="courses-items-container"
          :id="`courses-container-${programtype.id}`"
          
        >
          <courses-course-item
            
            v-for="(course, index2) in courses.coursesList.filter(
              (course) =>
                course.type == programtype.id &&
                course.title.toLowerCase().includes(courseInput.toLowerCase())
            )"
            :key="`course-${index2}`"
            :course="course"
          />
        </div>
        <div v-if="currentWindowWidth < 1024" class="courses-pages">
          <div
            class="page"
            :class="pages[programtype.id] == i2 + 1 ? 'active' : ''"
            @click="changePage(i2 + 1, programtype.id)"
            v-for="(i1, i2) in courses.coursesList.filter(
              (course) =>
                course.type == programtype.id &&
                course.title.toLowerCase().includes(courseInput.toLowerCase())
            )"
            :key="i2"
          ></div>
        </div>
        <div
        class="d-flex justify-content-center my-5" 
        v-if="courses.coursesList.filter(
              (course) =>
                course.type == programtype.id &&
                course.title.toLowerCase().includes(courseInput.toLowerCase())
            ).length==0">
          <span style="font-size: 2em;">No Se encuentran Resultados</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import coursesData from "/src/data/courses.json";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    let currentWindowWidth = ref(null);
    let pages = ref([1, 1,1]);
    const changePage = (pagev, programId) => {
      const element = document.getElementById(`courses-container-${programId}`);
      console.log(element.scrollWidth, element.scrollLeft, element.clientWidth);
      element.scrollLeft = (pagev - 1) * 400;
      console.log(pages)
      pages.value[programId] = pagev;
    };
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const courses = ref(coursesData);
    const courseInput = ref("");
    return {
      courses,
      courseInput,
      currentWindowWidth,
      pages,
      changePage,
    };
  },
});
</script>
<style scoped>
.courses-pages {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}
.page {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #515166;
  margin: 0 5px;
  cursor: pointer;
}
.active {
  background: #00a9c3;
}
</style>