<template>
    <button @click="speakLetter" class="text-sm text-white text-center col-span-2 hover:underline">
        Need help?
    </button>
</template>

<script>
import textToSpeech from '@/api/textToSpeechApi';

export default {
    name: 'Hint',

    props: ['letter', 'voice'],

    methods: {
        speakLetter() {
            textToSpeech(this.voice, this.letter);
        },
    },
};
</script>

<style lang="scss" scoped></style>
