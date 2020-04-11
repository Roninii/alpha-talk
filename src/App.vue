<template>
    <div id="app" class="bg-gray-900 h-screen grid place-center">
        <div class="grid place-center gap-8 w-1/4">
            <h1 class="text-xl text-white font-black tracking-widest uppercase">{{ status }}</h1>
            <Letterbox :letter="currentLetter" />
            <Speech :speechReceived="speechReceived" />
            <div class="grid grid-cols-2 gap-4 w-full">
                <button
                    @click="getSpeech"
                    :disabled="capturingSpeech || correct"
                    class="bg-purple-600 font-black text-md px-4 py-2 rounded text-white disabled:bg-gray-600 disabled:text-white uppercase"
                >
                    Talk
                </button>
                <button
                    @click="getNextLetter"
                    :disabled="!correct"
                    class="border-2 border-purple-600 text-white font-black rounded disabled:border-gray-600 disabled:text-gray-600 uppercase"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import recognition from '@/api/speechApi';

export default {
    name: 'App',
    components: {
        Letterbox: () => import('@/components/Letterbox'),
        Speech: () => import('@/components/Speech'),
    },
    data() {
        return {
            alphabet: [
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',
            ],
            animate: false,
            capturingSpeech: false,
            currentLetter: '',
            correct: false,
            error: false,
            errors: [],
            speechReceived: '',
            status: 'Click "Talk" to begin!',
        };
    },

    mounted() {
        this.getNextLetter();
    },

    methods: {
        getNextLetter() {
            this.animate = true;
            this.correct = false;
            this.currentLetter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
            this.speechReceived = '';
        },

        getSpeech() {
            this.capturingSpeech = true;
            this.status = 'Listening...';
            recognition.start();

            // handle recognition events
            recognition.onresult = this.speechResult;
            recognition.onnomatch = this.noMatch;
            recognition.onerror = this.handleRecognitionError;
        },

        speechResult(e) {
            recognition.stop();
            this.capturingSpeech = false;

            const letter = recognition.filter(e.results[0][0].transcript.toLowerCase());

            this.speechReceived = `Received: ${letter}`;
            if (letter === this.currentLetter) {
                this.status = 'Nice Job!';
                this.correct = true;
            } else {
                this.status = `Hmmm, that doesn't seem right. Try again.`;
            }
        },

        noMatch() {
            this.error = true;
            this.errors.push('No match');
        },

        handleRecognitionError(e) {
            this.error = true;
            this.errors.push('Error occurred in recognition: ' + e.error);
        },
    },
};
</script>

<style></style>
