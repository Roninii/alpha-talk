<template>
    <div id="app" class="bg-gray-900 h-screen grid place-center">
        <div class="grid place-center gap-8 lg:w-1/4" v-if="supported">
            <h1 class="text-xl text-white font-black tracking-widest uppercase">{{ status }}</h1>
            <Letterbox :letter="currentLetter" :correct="correct" />
            <Speech :speechReceived="speechReceived" />
            <div class="grid grid-cols-2 gap-4 w-full">
                <BaseButton
                    v-if="!capturingSpeech"
                    @click.native="getSpeech"
                    :disabled="correct"
                    text="Talk"
                />
                <BaseButton v-else @click.native="stop" text="Stop" />

                <BaseButton @click.native="getNextLetter" :disabled="!correct" text="next" />

                <Hint :letter="currentLetter" :voice="voice" />
            </div>
        </div>
        <Unsupported v-else />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        Letterbox: () => import('@/components/Letterbox'),
        Speech: () => import('@/components/Speech'),
        BaseButton: () => import('@/components/BaseButton'),
        Hint: () => import('@/components/Hint'),
        Unsupported: () => import('@/components/Unsupported'),
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
            recognition: null,
            speechReceived: '',
            status: 'Press "Talk" to begin!',
            supported: true,
            voice: null,
        };
    },

    async mounted() {
        this.getNextLetter();

        // check to see if speech recognition is supported in this browser
        if (window.SpeechRecognition || window.webkitSpeechRecognition) {
            this.recognition = await import('@/api/speechApi.js');
        } else {
            this.supported = false;
        }

        const voices = speechSynthesis.getVoices();
        this.voice = voices.filter(v => v.name.toLowerCase() === 'samantha');
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
            this.recognition.start();

            // handle recognition events
            this.recognition.onresult = this.speechResult;
            this.recognition.onnomatch = this.noMatch;
            this.recognition.onerror = this.handleRecognitionError;
        },

        speechResult(e) {
            this.recognition.stop();
            this.capturingSpeech = false;

            const letter = this.recognition.filter(e.results[0][0].transcript.toLowerCase());

            this.speechReceived = `Received: ${letter}`;
            if (letter === this.currentLetter) {
                this.status = 'Nice Job!';
                this.correct = true;
                this.speak(this.status);
            } else {
                this.status = `That doesn't seem right. Try again.`;
                this.speak(this.status);
            }
        },

        stop() {
            this.recognition.stop();
            this.capturingSpeech = false;
            this.status = `I'm having trouble hearing you, try again?`;
            this.speak(this.status);
        },

        speak(text) {
            // TODO figure out why importing the textToSpeech helper doesn't work in this file
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(text);
            utterThis.voice = this.voice[0];

            synth.speak(utterThis);
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
