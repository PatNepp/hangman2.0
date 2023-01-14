import React, { useEffect } from 'react'
import { winOrLose } from '../helpers/helpers'

const Popup = ({correctLetters, selectedWord, wrongLetters, setPlayable}) => {
let finalMessage = ''
let finalMessageText = ''
let playable = true

if (winOrLose(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You Won! 🤪'
    playable = false
} else if (winOrLose(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Oh SHIT! You Lost! 🥲'
    finalMessageText = `The word was: ${selectedWord}`
    playable = false
}

useEffect(() => setPlayable(playable))

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
        <div className="popup">
            <h2>{finalMessage}</h2>
            <h4>{finalMessageText}</h4>
            <button className="play-button">Play Again</button>
        </div>
    </div>  )
}

export default Popup