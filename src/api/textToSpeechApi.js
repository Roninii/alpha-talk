const synth = window.speechSynthesis;

export default function textToSpeech(voice, text) {
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voice[0];

    synth.speak(utterThis);
}
