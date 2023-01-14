import React from 'react'

const Figure = ({wrongLetters}) => {
  const errors = wrongLetters.length;

  return (
    <svg height="250" width="200" className="figure-container">
        {/* <!-- Hanger --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="220" />
        <line x1="25" y1="220" x2="95" y2="220" />
        {/* <!-- Head --> */}
        {errors > 0 && <circle cx="140" cy="70" r="20"/>}
        {/* <!-- Body --> */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="160"/>}
        {/* <!-- Arms --> */}
        {errors > 2 && <line x1="110" y1="130" x2="140" y2="110"/>}
        {errors > 3 && <line x1="140" y1="110" x2="170" y2="130"/>}
        {/* <!-- Legs --> */}
        {errors > 4 && <line x1="120" y1="205" x2="140" y2="160"/>}
        {errors > 5 && <line x1="140" y1="160" x2="160" y2="205"/>}
    </svg>
    )
}

export default Figure