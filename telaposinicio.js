import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"; // Biblioteca de ícones

export default function TelaPosInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dificuldade")}
      >
        <Icon name="question-circle" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Perguntas e Respostas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("memoria")}
      >
        <Icon name="brain" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Memória</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("caca")}
      >
        <Icon name="search" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Caça-Palavras</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("erro")}
      >
        <Icon name="" size={24} color="#FFF" />
        <Text style={styles.buttonText}>7 erros</Text>
      </TouchableOpacity>

      {/* Botão para voltar */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5E4C3",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: "#6CC4A1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
    elevation: 5, // Sombra no Android
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 10,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  botaoVoltar: {
    backgroundColor: "#D9534F",
    padding: 12,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    display: "flex",
  },
});