import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  //1 é pedra
  //2 é papel
  //3 é tesoura

  const [gameHand, setGameHand] = useState();
  const [translatedHand, setTranslatedHand] = useState();
  const [playerHand, setPlayerHand] = useState();
  const [result, setResult] = useState("Jokenpô!");

  function handleRock() {
    setPlayerHand("Você jogou pedra");
    setGameHand(Math.floor(Math.random() * 3));
    if (gameHand === 0) {
      setTranslatedHand("e eu também!");
      setResult("Empate!");
    } else if (gameHand === 1) {
      setTranslatedHand("e eu joguei papel!");
      setResult("Você perdeu!");
    } else {
      setTranslatedHand("e eu joguei tesoura!");
      setResult("Você venceu!");
    }
  }

  function handlePaper() {
    setPlayerHand("Você jogou papel");
    setGameHand(Math.floor(Math.random() * 3));
    if (gameHand === 0) {
      setTranslatedHand("e eu joguei pedra!");
      setResult("Você venceu!");
    } else if (gameHand === 1) {
      setTranslatedHand("e eu também!");
      setResult("Empate!");
    } else {
      setTranslatedHand("e eu joguei tesoura!");
      setResult("Você perdeu!");
    }
  }

  function handleScissor() {
    setPlayerHand("Você jogou tesoura");
    setGameHand(Math.floor(Math.random() * 3));
    if (gameHand === 0) {
      setTranslatedHand("e eu joguei pedra!");
      setResult("Você perdeu!");
    } else if (gameHand === 1) {
      setTranslatedHand("e eu joguei papel!");
      setResult("Você venceu!");
    } else {
      setTranslatedHand("e eu também!");
      setResult("Empate!");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/gamer.png")} />
        <Text style={styles.text}>{playerHand}</Text>
        <Text style={styles.text}>{translatedHand}</Text>
        <Text style={styles.resultText}>{result}</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Button
          onPress={handleRock}
          title="Pedra"
          color="#632c8a"
          accessibilityLabel="Pedra"
        />
        <Button
          onPress={handlePaper}
          title="Papel"
          color="#632c8a"
          accessibilityLabel="Papel"
        />
        <Button
          onPress={handleScissor}
          title="Tesoura"
          color="#632c8a"
          accessibilityLabel="Tesoura"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#632c8a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "20rem",
  },
  resultText: {
    color: "yellow",
    fontSize: "20rem",
    marginTop: "10%",
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
});
