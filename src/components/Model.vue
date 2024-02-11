<template>
    <div 
        class="w-full h-full flex flex-col items-center justify-center space-y-4 p-4 z-50 bg-slate-900 bg-opacity-90 fixed top-0 left-0"
        :class="{ hidden: !src }"
        @click="closeModal"
    >
        <div>
            <img 
                :src="src" 
                v-if="src"
            />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        src: String,
    });

    const emit = defineEmits(["close-modal"]);

    const closeModal = () => {
        emit("close-modal");
    };

</script>