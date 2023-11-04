<template>
  <div>
    <main-navbar />
    <router-view />
    <main-footer
      @openWorkWithUsModal="openWorkWithUsModal"
      @openComplaintsBookModal="openComplaintsBookModal"
    />
    <home-modals-work-with-us-modal
      v-if="showModalWorkWithUs"
      @closeModal="closenWorkWithUsModal"
    />
    <home-modals-complaints-book-modal
      v-if="showModalComplainBook"
      @closeModal="closenComplaintsBookModal"
    />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous",
    },
  ],
});
const showModalWorkWithUs = ref(false);
const showModalComplainBook = ref(false);
const openWorkWithUsModal = () => {
  showModalWorkWithUs.value = true;
};
const closenWorkWithUsModal = () => {
  showModalWorkWithUs.value = false;
};
const openComplaintsBookModal = () => {
  showModalComplainBook.value = true;
};
const closenComplaintsBookModal = () => {
  showModalComplainBook.value = false;
};
</script>
