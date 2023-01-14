import { useEffect, useState } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

const words = ['application', 'programming', 'interface', 'conglomerate', 'guacamole', 'elephant']

let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  useEffect(() => {
    const handleKeyDown = e => {
      const {key, code} = e;
        if(playable && code >= 'KeyA' && code <= 'KeyZ') {
          const letter = key.toLowerCase();
          
          if(selectedWord.includes(letter)) {
              if(!correctLetters.includes(letter)) {
                  setCorrectLetters(currentLetters => [...currentLetters, letter])
              } else {
                  // showNotification()
              }
          } else {
              if(!wrongLetters.includes(letter)) {
                  setWrongLetters(currentLetters => [...currentLetters, letter])
              } else {
                  // showNotification()
              }
          }
      } 
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable])

//   window.addEventListener('keydown', (e) => {
//     if(e.code >= 'KeyA' && e.code <= 'KeyZ') {
//         const letter = e.key;

//         if(selectedWord.includes(letter)) {
//             if(!correctLetters.includes(letter)) {
//                 correctLetters.push(letter)
//                 displayWord()
//             } else {
//                 showNotification()
//             }
//         } else {
//             if(!wrongLetters.includes(letter)) {
//                 wrongLetters.push(letter)

//                 updateWrongLettersEl()
//             } else {
//                 showNotification()
//             }
//         }
//     } 
// })

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup />
      <Notification />
    </>
  );
}

export default App;
