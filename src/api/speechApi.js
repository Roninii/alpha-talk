/* eslint-disable */
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// Define grammar
const alphabet = [
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
];
const grammar = '#JSGF V1.0; grammar alphabet; public <letter> = ' + alphabet.join(' | ') + ';';

// Init speech recognition & grammar list
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

// Define speech recognition properties
recognition.grammars = speechRecognitionList;
recognition.continuous = false; // ? capture just a single result each time recognition is started
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// custom filter to fix outliers
recognition.filter = function(speech) {
    let letter;

    switch (speech) {
        case 'why':
            letter = 'y';
            break;
        case 'you':
            letter = 'u';
            break;
        case 'oh':
            letter = 'o';
            break;
        case 'jay':
            letter = 'j';
            break;
        case 'see':
            letter = 'c';
            break;
        case 'hey':
            letter = 'a';
            break;
        case 'jay':
            letter = 'j';
            break;
        case 'tea':
            letter = 't';
            break;
        case 'in':
            letter = 'n';
            break;
        default:
            letter = speech;
            break;
    }

    return letter;
};

export default recognition;
