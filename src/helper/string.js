export function trimParagraph(paragraph, maxLength = 100) {
    //Split into tokens
    const tokens = paragraph.split(/\s+/);

    //Aggregate token until reach maxLength
    let result = "";
    let index = 0;
    while (result.length < maxLength) {
        result += ` ${tokens[index++]}`;
    }

    return result + "...";
}

export function isValidWord(word) {
    //Split to get tokens
    const tokens = word.trim().split(/\s+/);
    return tokens.length === 1;
}

export function processWord(word) {
    return word.trim();
}