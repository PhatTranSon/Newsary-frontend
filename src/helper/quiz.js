import {
    getRandomInt,
    shuffle
} from "../helper/number";

function chooseRandomWord(allWords) {
    return allWords[getRandomInt(allWords.length)];
}

function scrambleAnswers(answers) {
    return shuffle(answers);
}

function getRandomPrompt(word) {
    const number = getRandomInt(2);
    if (number === 0) {
        return `Which word has the phonetic "${ word.phonetic }" ?`;
    } else {
        return `Which word has the meaning "${ word.meaning }" ?`;
    }
}

function generateQuestion(allWords, chosenWord) {
    const question = getRandomPrompt(chosenWord);

    //Create a word array containing answer
    let answers = [chosenWord.word];
    for (let i = 0; i !== 3; ++i) {
        //Choose another randome word which is not chosen word
        let randomWord = chooseRandomWord(allWords);
        while (randomWord.word === chosenWord.word) {
            randomWord = chooseRandomWord(allWords);
        }

        //Append to anwers
        answers = scrambleAnswers(answers);
        answers.push(randomWord.word);
    }

    //Scramble answer and get index of word
    const correctAnswerIndex = answers.findIndex(w => w === chosenWord.word);

    return {
        question,
        answers,
        correctAnswerIndex
    };
}

export function createQuiz(words, numberOfQuestions) {
    //Create an object containing the questions and their answers
    /*
        [
            {
                question: `Which word has the phonetics "pop" ?`,
                answers: ["Long", "Popa", "Man", "Bat"],
                correctAnswerIndex: 1
            },
            {
                ...
            },
            {
                ...
            }
        ]
    */
    const questions = [];
    const chosenWords = new Set();

    //Choose random words
    for (let i = 0; i !== numberOfQuestions; ++i) {
        let currentWord = chooseRandomWord(words);
        while (chosenWords.has(currentWord.word) || 
            (currentWord.phonetic === "unknown" || currentWord.meaning === "unknown")) {
            currentWord = chooseRandomWord(words);
        }

        questions.push(generateQuestion(words, currentWord));
    }

    return questions
}