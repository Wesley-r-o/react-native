import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { Audio } from "expo-av";

const todosEmojis = [
  ["🐶", "🐱", "🦁", "🐮", "🐵", "🐸"], // Fase 1
  ["🍎", "🍌", "🍇", "🍓", "🥝", "🍍"], // Fase 2
  ["⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐"], // Fase 3
  ["🚗", "🚌", "🚀", "🚁", "🚲", "🚓"], // Fase 4
  ["🎩", "👓", "🧤", "👟", "🧢", "👑"], // Fase 5
  ["🧁", "🍩", "🍰", "🍫", "🍪", "🥧"], // Fase 6
  ["🐙", "🐠", "🐬", "🦀", "🐳", "🦑"], // Fase 7
  ["🌞", "🌛", "⭐️", "🌈", "☁️", "❄️"], // Fase 8
  ["🛸", "👽", "🪐", "🚀", "🌌", "🌍"], // Fase 9
  ["📚", "🖋️", "📓", "📐", "✏️", "📏"], // Fase 10
  ["🎮", "🕹️", "💾", "🖥️", "💻", "⌨️"], // Fase 11
  ["🎸", "🎤", "🥁", "🎻", "🎹", "📯"], // Fase 12
  ["🧸", "🪀", "🪁", "🪅", "🪆", "🎲"], // Fase 13
  ["🏰", "🗿", "🗼", "🗽", "🕌", "⛩️"], // Fase 14
  ["🧙‍♂️", "🧚‍♀️", "🧛‍♂️", "🧞‍♂️", "🧜‍♀️", "🧟‍♂️"], // Fase 15
];

const getEmojisPorFase = (fase) => {
  return todosEmojis[(fase - 1) % todosEmojis.length];
};

const gerarCartas = (fase) => {
  const emojis = getEmojisPorFase(fase);
  const pares = [...emojis, ...emojis];
  return pares
    .sort(() => Math.random() - 0.5)
    .map((item, index) => ({
      id: index,
      valor: item,
      virada: false,
      encontrada: false,
    }));
};

export default function TelaMemoria() {
  const tempoPorFase = 60; // tempo por fase (em segundos)

  const [fase, setFase] = useState(1);
  const [cartas, setCartas] = useState(gerarCartas(1));
  const [selecionadas, setSelecionadas] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [somAcerto, setSomAcerto] = useState();
  const [somErro, setSomErro] = useState();
  const [tempoRestante, setTempoRestante] = useState(tempoPorFase);

  useEffect(() => {
    carregarSons();
    return () => {
      if (somAcerto) somAcerto.unloadAsync();
      if (somErro) somErro.unloadAsync();
    };
  }, []);

  const carregarSons = async () => {
    const { sound: acerto } = await Audio.Sound.createAsync(
      require("./assets/audio/game-start-317318.mp3")
    );
    const { sound: erro } = await Audio.Sound.createAsync(
      require("./assets/audio/explosion-312361.mp3")
    );
    setSomAcerto(acerto);
    setSomErro(erro);
  };

  useEffect(() => {
    if (selecionadas.length === 2) {
      const [primeira, segunda] = selecionadas;
      if (primeira.valor === segunda.valor) {
        setTimeout(() => {
          setCartas((prev) =>
            prev.map((carta) =>
              carta.valor === primeira.valor
                ? { ...carta, encontrada: true }
                : carta
            )
          );
          setPontuacao((p) => p + 10);
          if (somAcerto) somAcerto.replayAsync();
          setSelecionadas([]);
        }, 400);
      } else {
        setTimeout(() => {
          setCartas((prev) =>
            prev.map((carta) =>
              carta.id === primeira.id || carta.id === segunda.id
                ? { ...carta, virada: false }
                : carta
            )
          );
          if (somErro) somErro.replayAsync();
          setSelecionadas([]);
        }, 1000);
      }
    }
  }, [selecionadas]);

  useEffect(() => {
    if (cartas.every((carta) => carta.encontrada)) {
      Alert.alert(`Fase ${fase} completa!`, `Pontuação: ${pontuacao}`, [
        { text: "Próxima fase", onPress: proximaFase },
      ]);
    }
  }, [cartas]);

  const proximaFase = () => {
    const novaFase = fase + 1;
    setFase(novaFase);
    setCartas(gerarCartas(novaFase));
    setSelecionadas([]);
    setTempoRestante(tempoPorFase);
  };

  const reiniciarFaseAtual = () => {
    setCartas(gerarCartas(fase));
    setSelecionadas([]);
    setTempoRestante(tempoPorFase);
  };

  useEffect(() => {
    if (cartas.every((c) => c.encontrada)) return;

    if (tempoRestante <= 0) {
      Alert.alert("Tempo esgotado! ⏰", "Você não completou a tempo.", [
        { text: "Tentar novamente", onPress: reiniciarFaseAtual },
      ]);
      return;
    }

    const timer = setTimeout(() => {
      setTempoRestante((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [tempoRestante, cartas]);

  const virarCarta = (carta) => {
    if (carta.virada || carta.encontrada || selecionadas.length === 2) return;

    const novasCartas = cartas.map((c) =>
      c.id === carta.id ? { ...c, virada: true } : c
    );
    setCartas(novasCartas);
    setSelecionadas([...selecionadas, { ...carta, virada: true }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Jogo da Memória 🧠</Text>
      <Text style={styles.pontuacao}>Pontuação: {pontuacao}</Text>
      <Text style={styles.fase}>Fase: {fase}</Text>
      <Text style={styles.tempo}>⏱️ Tempo: {tempoRestante}s</Text>
      <View style={styles.grid}>
        {cartas.map((carta) => (
          <TouchableOpacity
            key={carta.id}
            style={[
              styles.carta,
              carta.virada || carta.encontrada ? styles.virada : styles.fechada,
            ]}
            onPress={() => virarCarta(carta)}
          >
            <Text style={styles.textoCarta}>
              {carta.virada || carta.encontrada ? carta.valor : "?"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pontuacao: {
    fontSize: 20,
    color: "#4caf50",
  },
  fase: {
    fontSize: 18,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  carta: {
    width: 70,
    height: 70,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  fechada: {
    backgroundColor: "#888",
  },
  virada: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#4caf50",
  },
  textoCarta: {
    fontSize: 32,
  },
  botao: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196f3",
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },
  tempo: {
    fontSize: 18,
    marginBottom: 8,
    color: "#f44336",
  },
});