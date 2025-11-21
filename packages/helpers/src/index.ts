export const wordsInSentence = (sentence: string) => {
  const words = sentence.split(' ')

  return words
}

export const getUniqueWords = (sentence: string) => {
  const words = wordsInSentence(sentence)

  const uniqueWords = [...new Set(words)]

  return uniqueWords
}

export const joinWords = (words: string[], joiner: string) => {
  const sentence = words.join(joiner)

  return sentence
}
