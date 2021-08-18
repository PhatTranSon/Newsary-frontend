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