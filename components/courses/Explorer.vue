<template>
  <section class="section-explorer">
    <div class="section-content">
      <div class="courses-search-container">
        <div
          class="course-search"
          ref="editableDiv"
          contenteditable="true"
          @input="updateText"
          @blur="searchCourse"
          v-html="editableContent"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M16.832 15.8483L12.3659 11.3821C13.4938 9.99558 14.0466 8.2292 13.9106 6.44696C13.7745 4.66484 12.9598 3.00294 11.6344 1.80373C10.3091 0.604641 8.5742 -0.0402426 6.78742 0.00194683C5.0006 0.0443157 3.29809 0.770488 2.03098 2.03099C0.770525 3.29815 0.0443375 5.00072 0.001949 6.78747C-0.0402641 8.5743 0.604599 10.3092 1.80372 11.6345C3.00296 12.9599 4.66485 13.7746 6.44692 13.9107C8.22903 14.0467 9.99543 13.4939 11.382 12.366L15.8482 16.8321C16.0279 16.986 16.2732 17.0384 16.5001 16.9714C16.7269 16.9043 16.9043 16.7268 16.9714 16.5001C17.0384 16.2733 16.986 16.0279 16.8321 15.8482L16.832 15.8483ZM3.01488 10.9147C1.96749 9.86797 1.37888 8.44785 1.37856 6.96711C1.37825 5.48621 1.96626 4.06593 3.01317 3.01869C4.06024 1.97145 5.48036 1.38311 6.96124 1.38311C8.44197 1.38311 9.86225 1.97145 10.9092 3.01869C11.9562 4.06593 12.5442 5.48621 12.5439 6.96711C12.5436 8.44785 11.9548 9.86797 10.9074 10.9147C9.8652 11.9694 8.444 12.5631 6.96124 12.5631C5.47832 12.5631 4.05713 11.9694 3.01488 10.9147Z"
            fill="#515166"
          />
        </svg>
      </div>
      <div
        id="courses-list"
        class="courses-list-container"
        v-for="(programtype, index) in courses.coursesTypes"
        :key="`typeProgram-${index}`"
      >

        <h4 :id="programtype.id==1?'investigation-courses':'evidences-courses'">
          {{ programtype.title }}
        </h4>
        <hr>
        <div class="courses-items-container">
          <courses-course-item
            v-for="(course, index2) in courses.coursesList.filter((course) => course.type == programtype.id)"
            :key="`course-${index2}`"
            :course="course"
          />
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
    const courses = ref(coursesData);
    const editableContent = ref("");
    const searchInput = ref("");
    const input = ref(null);
    const search = () => {
      console.log(searchInput.value);
    };
    const searchCourse = () => {};

    return {
      searchInput,
      input,
      search,
      editableContent,
      courses,
    };
  },
});
</script>
