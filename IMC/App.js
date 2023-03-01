import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={"position"}
        keyboardVerticalOffset={-100}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={require("./assets/dieta.png")} />
          <Text style={styles.text}>Calcule seu IMC!</Text>
          <StatusBar style="auto" />
          <Text style={styles.label}>Seu peso:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Ex: 90kg"}
            value={weight}
            onChangeText={setWeight}
            keyboardType="decimal-pad"
          />
          <Text style={styles.label}>Sua altura:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Ex: 180cm"}
            value={height}
            onChangeText={setHeight}
            keyboardType="decimal-pad"
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor="#486940"
            activeOpacity={0.6}
            onPress={() =>
              Alert.alert(
                "IMC: " + ((weight / (height * height)) * 10000).toFixed(1)
              )
            }
          >
            <Text>Calcular</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7ec96b",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    fontSize: 15,
    width: 250,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 250,
    borderRadius: 4,
    backgroundColor: "#5c944e",
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: "white",
    width: 250,
    marginBottom: 3,
  },
});
