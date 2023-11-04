<template>
  <div>
    <courses-course-hero :courseInfo="courseData" />
    <courses-courses-details-course-description :courseInfo="courseData" />
    <courses-course-metodology />
    <courses-courses-details-docentes/>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCourse } from "/composables/courses-composables.js";
export default {
  setup() {
    const courseId = ref(null);
    const courseData = reactive({});
    const route = useRoute();

    onMounted(() => {
      const params = route.params;

      if (params.courseId) {
        console.log(params.courseId);
        courseId.value = params.courseId;
        courseData.value = getCourse(courseId.value);
      }
    });

    return { courseId, courseData };
  },
};
</script>

