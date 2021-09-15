export function speak(text) {
    //Create utterance
    const msg = new SpeechSynthesisUtterance(text);
    //Use the speak function of windows
    window.speechSynthesis.speak(msg);
}