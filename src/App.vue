<template>
  <div class="bg-slate-600 text-white p-4 h-screen w-screen">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-4">
        Gallery App
      </h1>
      <UploadForm />
      <ImgContainer @open-modal="openModal" />
      <Model :src="modelUrl" @close-modal="modelUrl = null" />
    </div>
  </div>
</template>

<script setup>
import UploadForm from './components/UploadForm.vue';
import ImgContainer from './components/ImgContainer.vue';
import Model from './components/Model.vue';
import { ref } from 'vue';

const modelUrl = ref(null);

const openModal = (src) => {
    modelUrl.value = src;
};
</script>


