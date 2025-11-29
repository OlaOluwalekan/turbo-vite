export const wordsInSentence = (sentence) => {
    const words = sentence.split(' ');
    return words;
};
export const getUniqueWords = (sentence) => {
    const words = wordsInSentence(sentence);
    const uniqueWords = [...new Set(words)];
    return uniqueWords;
};
export const joinWords = (words, joiner) => {
    const sentence = words.join(joiner);
    return sentence;
};
