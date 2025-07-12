import { useState } from "react";

export default function Index() {
  const basePhrases = [
    "Comedy (re-runs, stand up)",
    "Ice pack (for the head)",
    "Somatic meditation (ear massage)",
    "5-2-10 breathing",
    "Slow tapping + vision resources",
    "Paint with all the colors",
    "Bath or shower",
    "Loving touch (brush hair, light cuddling)",
    "Get some music playing",
    "Work with parts (meditation, draw your parts, consult another part of yourself)",
    "Create a comforting environment (turn off music, dim the lights)",
    "Do breathing exercises together",
    "Re-assurance (not alone, not in immediate danger)",
    "Encourage to express feelings through art",
    "Medication reminder",
    "If you are in a public place... find some privacy",
    "List things ^^ (colors, sea creatures, favorite foods)"
  ];

  // Initialize immediately instead of waiting for useEffect
  const [shuffledPhrases, setShuffledPhrases] = useState(() => {
    const shuffled = [...basePhrases];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });
  
  const [currentIndex, setCurrentIndex] = useState(() => 
    Math.floor(Math.random() * basePhrases.length)
  );

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const nextPhrase = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % shuffledPhrases.length;
      
      // When we've gone through all phrases, reshuffle for next round
      if (nextIndex === 0) {
        setShuffledPhrases(shuffleArray(basePhrases));
      }
      
      return nextIndex;
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #B85450, #008B8B, #CD853F)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        margin: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Custom header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#008B8B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          margin: 0,
        }}>
          DBTime
        </h1>
      </div>

      {/* Content container with top margin */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60px',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%',
      }}>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
          lineHeight: '1.2',
        }}>
          Your Breath<br />Your Power
        </h2>

        {/* Emoji instead of image */}
        <div style={{
          fontSize: '80px',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          🐕‍🦺
        </div>
        
        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          marginBottom: '30px',
          padding: '20px',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
          lineHeight: '1.4',
          margin: '0 0 30px 0',
        }}>
          {shuffledPhrases[currentIndex] || "Loading..."}
        </p>

        <button
          onClick={nextPhrase}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '15px 30px',
            borderRadius: '25px',
            border: '2px solid white',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Next Resource
        </button>
        
      </div>
    </div>
  );
}