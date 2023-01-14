import { useEffect, useState } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import {showNotification as show} from './helpers/helpers'

const words = ['application', 'programming', 'interface', 'conglomerate', 'guacamole', 'elephant']

let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeyDown = e => {
      const {key, code} = e;
        if(playable && code >= 'KeyA' && code <= 'KeyZ') {
          const letter = key.toLowerCase();

          if(selectedWord.includes(letter)) {
              if(!correctLetters.includes(letter)) {
                  setCorrectLetters(currentLetters => [...currentLetters, letter])
              } else {
                  show(setShowNotification)
              }
          } else {
              if(!wrongLetters.includes(letter)) {
                  setWrongLetters(currentLetters => [...currentLetters, letter])
              } else {
                  show(setShowNotification)
              }
          }
      } 
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable])

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup />
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
