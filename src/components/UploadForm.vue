<template>
    <div>
        <form class="flex flex-col items-center justify-center space-y-4">
            <label>
                <span class="bg-blue-500 text-white p-2 rounded-lg cursor-pointer">
                    Upload a file
                </span>
                <input type="file" @change="handleUpload" />
            </label>
            <p v-if="file">{{ file.name }}</p>
            <button v-if="file" @click="upload" class="bg-green-500 text-white p-2 rounded-lg cursor-pointer">
                Upload
            </button>
        </form>
    </div>
</template>

<script setup>
import useUploadVue from "../composible/useUpload";
import { handleError, ref } from "vue";

const file = ref(null);

const handleUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
        file.value = selected;
    } else {
        file.value = null;
    }
};

const upload = async () => {
    try {
        const res = await useUploadVue(file.value);
        console.log(res);
    } catch (err) {
        handleError(err);
    }
    file.value = null;
};

</script>

<style scoped>
    label input{
        display: none;
    }
</style>