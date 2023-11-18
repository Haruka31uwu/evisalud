<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <div class="section-title d-flex mb-5">
      <h2>Blog</h2>
      <div class="section-decorator"></div>
    </div>
    <div class="row d-flex gap-4 flex-row" style="width:90%">
      <div class="col-12 col-md-5">
        <div class="blog-item">
          <img
            :src="blogItems.main.img"
            alt=""
            style="width: 100%; height: 100%;border-radius: 1rem "
            class="mb-3"
          />
          <span class="blog-title">
            {{ blogItems.main.title }}
          </span>
          <p>
            {{ blogItems.main.description }}
          </p>
          <span>
            {{ blogItems.main.date }}
          </span>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <ul style="list-style:none">
          <li
            v-for="(item, index) in blogItems.items"
            :key="index"
            class="blog-item d-flex gap-4"
          >
          <img
            :src="item.img"
            alt=""
            style="width: 30%; height: 160px;border-radius: 0.5rem;"
            class="mb-3"/>
           <div style="width:50%">
            <span class="blog-title">
              {{ item.title }}
            </span>
            <p>
              {{ item.description }}
            </p>
            <span style="font-style:italic">
              {{ item.date }}
            </span>
            <div class="blog-item__divider" v-if="index!=blogItems.items.length"></div>

           </div>
        </li>  
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const blogItems = reactive({
      main: {
        img: "/assets/img/resources/blog-main.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      items: [
        {
          img: "/assets/img/resources/blog1.jpg",
          title: "Medicina al dia",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          date: "Marzo 15, 2023",
        },
        {
          img: "/assets/img/resources/blog2.jpg",
          title: "Medicina al dia",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          date: "Marzo 15, 2023",
        },
        {
          img: "/assets/img/resources/blog3.jpg",
          title: "Medicina al dia",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          date: "Marzo 15, 2023",
        },
      ],
    });
    return {
      blogItems,
    };
  },
});
</script>
<style  lang="scss" scoped >
.blog-item {
  span {
    font-weight: 600;
    color: #00a9c3;
  }
  .blog-title {
    font-size: 1.3rem;
  }.blog-item__divider {
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 1rem 0;
  }
}


</style>
