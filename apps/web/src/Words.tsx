import { useState } from 'react'
import { getUniqueWords, joinWords, wordsInSentence } from '@repo/helpers'

const Words = () => {
  const [sentence, setSentence] = useState('')
  const [words, setWords] = useState<string[]>([])
  const [joined, setJoined] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type='text'
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        style={{ padding: '10px', width: '100%' }}
        placeholder='Your sentence'
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          style={{
            cursor: 'pointer',
            padding: '10px 30px',
            width: 'fit-content',
          }}
          onClick={() => {
            const words = wordsInSentence(sentence)
            setWords(words)
          }}
        >
          Covert
        </button>

        <button
          style={{
            cursor: 'pointer',
            padding: '10px 30px',
            width: 'fit-content',
          }}
          onClick={() => {
            const words = getUniqueWords(sentence)
            setWords(words)
          }}
        >
          Unique
        </button>

        <button
          style={{
            cursor: 'pointer',
            padding: '10px 30px',
            width: 'fit-content',
          }}
          onClick={() => {
            const sentence = joinWords(words, '++')
            setJoined(sentence)
          }}
        >
          Join
        </button>
      </div>

      <div>
        {words.length === 0 ? (
          <div>No words found</div>
        ) : (
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            {words.map((word, i) => {
              return (
                <article
                  key={i}
                  style={{
                    backgroundColor: '#144e058e',
                    color: '#00ff00',
                    padding: '2px 5px',
                    borderRadius: '3px',
                  }}
                >
                  {word}
                </article>
              )
            })}
          </div>
        )}
      </div>

      <div>{joined}</div>
    </div>
  )
}

export default Words
