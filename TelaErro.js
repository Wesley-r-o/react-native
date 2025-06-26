import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, Alert, StyleSheet, Dimensions } from 'react-native';

const { width: telaW, height: telaH } = Dimensions.get('window');

const fases = [
  {
    imagemA: require('./assets/erros/image_fx (5).jpg'),
    imagemB: require('./assets/erros/image_fx (6).jpg'),
    larguraOriginal: 300, // substitua pelo tamanho real da imagem
    alturaOriginal: 400,  // substitua pelo tamanho real da imagem
    erros: [
      { x: 50, y: 80 },
      { x: 130, y: 120 },
      { x: 200, y: 150 },
      { x: 90, y: 210 },
      { x: 170, y: 260 },
      { x: 60, y: 310 },
      { x: 140, y: 350 },
    ],
  },
  // Adicione mais fases aqui, cada uma com imagem e erros
];

const TOLERANCIA = 30;
const TEMPO_FASE = 60;

export default function TelaErro() {
  const [faseAtual, setFaseAtual] = useState(0);
  const [errosEncontrados, setErrosEncontrados] = useState([]);
  const [tempoRestante, setTempoRestante] = useState(TEMPO_FASE);
  const [pontuacao, setPontuacao] = useState(0);
  const [dimensoesImagem, setDimensoesImagem] = useState({ width: 1, height: 1 });

  const fase = fases[faseAtual];

  useEffect(() => {
    const timer = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          Alert.alert("Tempo esgotado!", "Você não encontrou todos os erros!", [
            { text: "Reiniciar", onPress: reiniciarJogo },
          ]);
          return TEMPO_FASE;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [faseAtual]);

  useEffect(() => {
    if (errosEncontrados.length === 7) {
      setTimeout(() => {
        setPontuacao((p) => p + 1);
        Alert.alert("Boa!", "Você encontrou todos os erros!", [
          { text: "Próxima fase", onPress: proximaFase },
        ]);
      }, 300);
    }
  }, [errosEncontrados]);

  const verificarToque = (e) => {
    const { locationX, locationY } = e.nativeEvent;

    const escalaX = dimensoesImagem.width / fase.larguraOriginal;
    const escalaY = dimensoesImagem.height / fase.alturaOriginal;

    const xReal = locationX / escalaX;
    const yReal = locationY / escalaY;

    const erroEncontrado = fase.erros.findIndex((erro, index) => {
      if (errosEncontrados.includes(index)) return false;
      const dx = erro.x - xReal;
      const dy = erro.y - yReal;
      return Math.sqrt(dx * dx + dy * dy) <= TOLERANCIA;
    });

    if (erroEncontrado !== -1 && !errosEncontrados.includes(erroEncontrado)) {
      setErrosEncontrados([...errosEncontrados, erroEncontrado]);
    }
  };

  const proximaFase = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
      setErrosEncontrados([]);
      setTempoRestante(TEMPO_FASE);
    } else {
      Alert.alert("Parabéns!", `Você terminou todas as fases!\nPontuação: ${pontuacao}`);
    }
  };

  const reiniciarJogo = () => {
    setFaseAtual(0);
    setErrosEncontrados([]);
    setTempoRestante(TEMPO_FASE);
    setPontuacao(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fase {faseAtual + 1} - Ache os 7 erros!</Text>
      <Text style={styles.info}>Erros: {errosEncontrados.length} / 7</Text>
      <Text style={styles.info}>Tempo: {tempoRestante}s</Text>
      <Text style={styles.info}>Pontuação: {pontuacao}</Text>

      {/* Imagem sem erros */}
      <Image source={fase.imagemA} style={styles.imagemNormal} resizeMode="contain" />

      {/* Imagem com erros e detecção de toque */}
      <View
        style={styles.toqueContainer}
        onStartShouldSetResponder={() => true}
        onResponderRelease={verificarToque}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setDimensoesImagem({ width, height });
        }}
      >
        <Image source={fase.imagemB} style={styles.imagemComErros} resizeMode="contain" />
        {fase.erros.map((erro, index) => {
          if (!errosEncontrados.includes(index)) return null;

          const escalaX = dimensoesImagem.width / fase.larguraOriginal;
          const escalaY = dimensoesImagem.height / fase.alturaOriginal;

          return (
            <View
              key={index}
              style={{
                position: 'absolute',
                left: erro.x * escalaX - 10,
                top: erro.y * escalaY - 10,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: 'rgba(0,255,0,0.5)',
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F4FF',
    alignItems: 'center',
    paddingTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#0C4A6E',
    marginVertical: 2,
  },
  imagemNormal: {
    width: telaW * 0.95,
    height: telaH * 0.3,
    marginVertical: 10,
  },
  imagemComErros: {
    width: '100%',
    height: '100%',
  },
  toqueContainer: {
    width: telaW * 0.95,
    height: telaH * 0.45,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
});