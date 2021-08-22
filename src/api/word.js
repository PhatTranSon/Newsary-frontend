import axios from "axios";

const WORD_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"

function formatData(data) {
    const result = data[0];

    function getPhonetic(data) {
        return data.phonetics.length > 0 ? data.phonetics[0].text : "unknown";
    }

    function getMeaningAndExample(data) {
        const meanings = data.meanings;

        if (meanings.length === 0) {
            return {
                meaning: "unknown",
                example: "unknown"
            };
        } else {
            const definitions = meanings[0].definitions;

            if (definitions.length === 0) {
                return {
                    meaning: "unknown",
                    example: "unknown"
                };
            }

            return {
                meaning: definitions[0].definition,
                example: definitions[0].example
            };
        }
    }

    return {
        word: result.word,
        phonetic: getPhonetic(result),
        meaning: getMeaningAndExample(result).meaning,
        example: getMeaningAndExample(result).example
    }
}

export function getWordDefinition(word) {
    return axios.get(`${WORD_API_URL}/${word}`)
        .then(response => response.data)
        .then(data => formatData(data));
}

export function getAllWordsDefinitions(words) {
    return Promise.all(
        words.map(word => getWordDefinition(word))
    );
}