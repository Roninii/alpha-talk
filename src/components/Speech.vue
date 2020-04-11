<template>
    <div class="border-b-2 border-purple-600 w-full text-white uppercase text-center text-lg">
        {{ speechReceived || 'Say Something!' }}
    </div>
</template>

<script>
export default {
    name: 'Speech',
    props: {
        speechReceived: {
            type: String,
            default: 'Say something!',
        },
    },
};
</script>
