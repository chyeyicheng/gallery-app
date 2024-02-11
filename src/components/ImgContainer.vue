<template>
    <transition-group name="fade" tag="div" class="w-full h-full flex flex-col items-center justify-center space-y-4 p-4">
        <div class="w-full h-full flex flex-col items-center justify-center space-y-4 p-4">
            <ul class="flex flex-wrap gap-4">
                <li v-for="document in documents" :key="document.id" class=" w-32 h-32 overflow-hidden rounded-lg shadow-lg">

                    <img :src="document.downloadURL" class="w-32 h-32 object-center object-cover" @click="openModal(document.downloadURL)" />
                </li>
            </ul>
        </div>
    </transition-group>
</template>

<script setup>
import useCollection from "@/composible/useCollection";

const emit = defineEmits(["openModal"]);

const { documents, unsubscribe } = useCollection("images");

const openModal = (src) => {
    emit("openModal", src);
};
</script>