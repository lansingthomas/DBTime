import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from "expo-router";
import { useState } from "react";
import { Platform, Text, TouchableOpacity } from "react-native";

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

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize with shuffled phrases immediately
  const [shuffledPhrases, setShuffledPhrases] = useState(() => shuffleArray(basePhrases));
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * basePhrases.length));

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
    <>
      <Stack.Screen 
        options={{ 
          title: "DBTime",
          headerShown: Platform.OS !== 'web', // Hide header on web
          headerStyle: {
            backgroundColor: '#008B8B', // Teal from your gradient
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            letterSpacing: 1,
          },
        }} 
      />
      <LinearGradient
        colors={['#B85450', '#008B8B', '#CD853F']} // Rust, Teal, Sandy Brown
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 30,
          color: "white",
          textShadowColor: 'rgba(0, 0, 0, 0.3)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 3,
        }}>
          Your Breath{"\n"}Your Power
        </Text>


        
        <Text style={{
          fontSize: 18,
          textAlign: "center",
          marginBottom: 30,
          paddingHorizontal: 20,
          color: "white",
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: 15,
          borderRadius: 10,
          textShadowColor: 'rgba(0, 0, 0, 0.3)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 2,
        }}>
          {shuffledPhrases.length > 0 ? shuffledPhrases[currentIndex] : "Loading..."}
        </Text>

        <TouchableOpacity
          onPress={nextPhrase}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "white",
            shadowColor: "#000",
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}>
            Next Resource
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}