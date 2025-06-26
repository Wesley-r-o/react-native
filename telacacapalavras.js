import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert, PanResponder, TouchableOpacity, Dimensions } from 'react-native';


const fases = [
  {
    tema: 'Palavras básicas',
    palavras: ['DEUS', 'AMOR', 'PAZ', 'VIDA'],
    grid: [
      ['D', 'E', 'U', 'S', 'A', 'M', 'O', 'R'],
      ['P', 'A', 'Z', 'Q', 'V', 'I', 'D', 'A'],
      ['L', 'I', 'B', 'R', 'E', 'S', 'A', 'N'],
      ['E', 'S', 'P', 'E', 'R', 'A', 'T', 'E'],
      ['C', 'A', 'M', 'I', 'N', 'H', 'O', 'S'],
      ['A', 'L', 'E', 'G', 'R', 'I', 'A', 'S'],
      ['N', 'C', 'O', 'R', 'A', 'G', 'E', 'M'],
      ['F', 'E', 'L', 'I', 'C', 'I', 'D', 'E'],
    ]
  },
  {
    tema: 'Milagres',
    palavras: ['MAR', 'VIDA', 'LUZ', 'CEGO'],
    grid: [
      ['M', 'A', 'R', 'T', 'C', 'E', 'G', 'O'],
      ['V', 'I', 'D', 'A', 'N', 'L', 'U', 'Z'],
      ['F', 'I', 'É', 'S', 'D', 'E', 'U', 'S'],
      ['O', 'R', 'A', 'Ç', 'Ã', 'O', 'R', 'E'],
      ['L', 'I', 'N', 'D', 'A', 'V', 'I', 'D'],
      ['S', 'A', 'N', 'T', 'A', 'L', 'U', 'Z'],
      ['R', 'E', 'N', 'A', 'S', 'C', 'E', 'R'],
      ['A', 'L', 'M', 'A', 'S', 'V', 'I', 'V'],
    ]
  },
  {
    tema: 'Criação',
    palavras: ['LUZ', 'MAR', 'CÉU', 'ADÃO'],
    grid: [
      ['L', 'U', 'Z', 'F', 'I', 'M', 'A', 'D'],
      ['T', 'B', 'R', 'M', 'A', 'R', 'E', 'Ã'],
      ['C', 'É', 'U', 'Q', 'G', 'I', 'A', 'O'],
      ['A', 'D', 'Ã', 'O', 'L', 'S', 'C', 'A'],
      ['F', 'O', 'R', 'M', 'A', 'R', 'T', 'E'],
      ['E', 'S', 'C', 'R', 'E', 'V', 'E', 'R'],
      ['B', 'E', 'N', 'Ç', 'Ã', 'O', 'E', 'S'],
      ['T', 'E', 'R', 'R', 'A', 'M', 'A', 'R'],
    ]
  },
  {
    tema: 'Profetas',
    palavras: ['ISAÍAS', 'ELIAS', 'JONAS', 'AMÓS'],
    grid: [
      ['I', 'S', 'A', 'Í', 'A', 'S', 'J', 'O'],
      ['E', 'L', 'I', 'A', 'S', 'N', 'O', 'N'],
      ['J', 'O', 'N', 'A', 'S', 'A', 'S', 'A'],
      ['A', 'M', 'Ó', 'S', 'P', 'R', 'O', 'F'],
      ['M', 'I', 'C', 'A', 'I', 'A', 'S', 'E'],
      ['O', 'B', 'A', 'D', 'I', 'A', 'S', 'D'],
      ['N', 'A', 'U', 'M', 'R', 'U', 'T', 'E'],
      ['H', 'A', 'B', 'A', 'C', 'U', 'Q', 'S'],
    ]
  },
  {
    tema: 'Discípulos',
    palavras: ['PEDRO', 'TIAGO', 'JOÃO', 'ANDRÉ'],
    grid: [
      ['P', 'E', 'D', 'R', 'O', 'J', 'O', 'Ã'],
      ['T', 'I', 'A', 'G', 'O', 'A', 'N', 'D'],
      ['J', 'O', 'Ã', 'O', 'M', 'A', 'T', 'E'],
      ['A', 'N', 'D', 'R', 'É', 'S', 'A', 'N'],
      ['F', 'I', 'L', 'I', 'P', 'E', 'S', 'T'],
      ['T', 'O', 'M', 'É', 'S', 'J', 'U', 'D'],
      ['S', 'I', 'M', 'Ã', 'O', 'L', 'E', 'V'],
      ['B', 'A', 'R', 'T', 'O', 'L', 'O', 'M'],
    ]
  },
  {
    tema: 'Reis de Israel',
    palavras: ['SAUL', 'DAVI', 'SALOMÃO', 'ROBOÃO'],
    grid: [
      ['S', 'A', 'U', 'L', 'R', 'O', 'B', 'O'],
      ['D', 'A', 'V', 'I', 'R', 'E', 'I', 'S'],
      ['S', 'A', 'L', 'O', 'M', 'Ã', 'O', 'S'],
      ['R', 'O', 'B', 'O', 'Ã', 'O', 'A', 'B'],
      ['J', 'O', 'S', 'I', 'A', 'S', 'S', 'A'],
      ['A', 'C', 'A', 'Z', 'E', 'I', 'Z', 'A'],
      ['E', 'Z', 'E', 'Q', 'U', 'I', 'A', 'S'],
      ['J', 'E', 'H', 'U', 'J', 'O', 'A', 'S'],
    ]
  },
  {
    tema: 'Frutos do Espírito',
    palavras: ['AMOR', 'PAZ', 'FÉ', 'BONDADE'],
    grid: [
      ['A', 'M', 'O', 'R', 'F', 'É', 'S', 'P'],
      ['P', 'A', 'Z', 'V', 'I', 'R', 'T', 'U'],
      ['B', 'O', 'N', 'D', 'A', 'D', 'E', 'S'],
      ['P', 'A', 'C', 'I', 'Ê', 'N', 'C', 'I'],
      ['G', 'E', 'N', 'T', 'I', 'L', 'E', 'Z'],
      ['F', 'I', 'D', 'E', 'L', 'I', 'D', 'A'],
      ['M', 'A', 'N', 'S', 'I', 'D', 'Ã', 'O'],
      ['D', 'O', 'M', 'Í', 'N', 'I', 'O', 'S'],
    ]
  },
  {
    tema: 'Apóstolos',
    palavras: ['PAULO', 'PEDRO', 'TIAGO', 'JOÃO'],
    grid: [
      ['P', 'A', 'U', 'L', 'O', 'P', 'E', 'D'],
      ['T', 'I', 'A', 'G', 'O', 'R', 'O', 'Ã'],
      ['J', 'O', 'Ã', 'O', 'T', 'I', 'A', 'G'],
      ['S', 'A', 'N', 'T', 'O', 'S', 'P', 'O'],
      ['A', 'N', 'D', 'R', 'É', 'M', 'A', 'R'],
      ['F', 'I', 'L', 'I', 'P', 'E', 'S', 'J'],
      ['B', 'A', 'R', 'N', 'A', 'B', 'É', 'R'],
      ['S', 'I', 'L', 'A', 'S', 'S', 'I', 'M'],
    ]
  },
  {
    tema: 'Êxodo',
    palavras: ['MOISÉS', 'EGITO', 'FARAÓ', 'MAR'],
    grid: [
      ['M', 'O', 'I', 'S', 'É', 'S', 'L', 'A'],
      ['E', 'G', 'I', 'T', 'O', 'M', 'A', 'R'],
      ['F', 'A', 'R', 'A', 'Ó', 'D', 'S', 'O'],
      ['D', 'E', 'S', 'E', 'R', 'T', 'O', 'L'],
      ['P', 'L', 'A', 'G', 'A', 'S', 'N', 'C'],
      ['M', 'A', 'N', 'Á', 'R', 'E', 'S', 'O'],
      ['C', 'A', 'M', 'I', 'N', 'H', 'O', 'S'],
      ['S', 'I', 'N', 'A', 'I', 'M', 'A', 'R'],
    ]
  },
  {
    tema: 'Crucificação',
    palavras: ['JESUS', 'CRUZ', 'SANGUE', 'CULPA'],
    grid: [
      ['J', 'E', 'S', 'U', 'S', 'C', 'U', 'L'],
      ['C', 'R', 'U', 'Z', 'A', 'S', 'A', 'N'],
      ['S', 'A', 'N', 'G', 'U', 'E', 'G', 'U'],
      ['C', 'U', 'L', 'P', 'A', 'P', 'E', 'R'],
      ['G', 'R', 'A', 'Ç', 'A', 'F', 'É', 'Z'],
      ['D', 'E', 'U', 'S', 'A', 'M', 'O', 'R'],
      ['L', 'E', 'I', 'R', 'E', 'S', 'P', 'I'],
      ['T', 'O', 'M', 'É', 'S', 'D', 'O', 'R'],
    ]
  },
  {
    tema: 'Ressurreição',
    palavras: ['VIDA', 'TÚMULO', 'VIVO', 'PÁSCOA'],
    grid: [
      ['V', 'I', 'D', 'A', 'T', 'Ú', 'M', 'U'],
      ['L', 'O', 'V', 'I', 'V', 'O', 'F', 'É'],
      ['P', 'Á', 'S', 'C', 'O', 'A', 'R', 'E'],
      ['R', 'E', 'S', 'S', 'U', 'S', 'C', 'I'],
      ['T', 'A', 'R', 'D', 'E', 'J', 'O', 'S'],
      ['M', 'A', 'R', 'I', 'A', 'S', 'V', 'E'],
      ['P', 'E', 'D', 'R', 'O', 'L', 'U', 'Z'],
      ['A', 'N', 'J', 'O', 'S', 'A', 'L', 'E'],
    ]
  },
  {
    tema: 'Criação do Mundo',
    palavras: ['CÉU', 'TERRA', 'LUZ', 'MAR'],
    grid: [
      ['C', 'É', 'U', 'M', 'A', 'R', 'L', 'U'],
      ['Z', 'T', 'E', 'R', 'R', 'A', 'S', 'O'],
      ['D', 'I', 'A', 'N', 'O', 'I', 'T', 'E'],
      ['S', 'O', 'L', 'L', 'U', 'A', 'M', 'A'],
      ['A', 'D', 'Ã', 'O', 'E', 'V', 'A', 'R'],
      ['S', 'E', 'T', 'E', 'D', 'I', 'A', 'S'],
      ['O', 'R', 'D', 'E', 'M', 'S', 'D', 'E'],
      ['L', 'I', 'V', 'R', 'E', 'S', 'V', 'A'],
    ]
  },
  {
    tema: 'Natal',
    palavras: ['JESUS', 'MARIA', 'JOSÉ', 'ESTRELA'],
    grid: [
      ['J', 'E', 'S', 'U', 'S', 'E', 'S', 'T'],
      ['R', 'E', 'L', 'A', 'M', 'A', 'R', 'I'],
      ['A', 'J', 'O', 'S', 'É', 'E', 'S', 'T'],
      ['M', 'A', 'R', 'I', 'A', 'R', 'E', 'L'],
      ['A', 'N', 'J', 'O', 'S', 'C', 'É', 'U'],
      ['P', 'R', 'E', 'S', 'É', 'P', 'I', 'O'],
      ['R', 'E', 'I', 'S', 'M', 'A', 'G', 'O'],
      ['O', 'R', 'I', 'E', 'N', 'T', 'E', 'A'],
    ]
  },
  {
    tema: 'Milagres de Jesus',
    palavras: ['ÁGUA', 'VINHO', 'LEPROSO', 'CEGO'],
    grid: [
      ['Á', 'G', 'U', 'A', 'L', 'E', 'P', 'R'],
      ['O', 'S', 'O', 'C', 'E', 'G', 'O', 'M'],
      ['V', 'I', 'N', 'H', 'O', 'F', 'É', 'P'],
      ['C', 'U', 'R', 'A', 'M', 'A', 'L', 'A'],
      ['D', 'E', 'U', 'S', 'A', 'M', 'O', 'R'],
      ['T', 'O', 'Q', 'U', 'E', 'R', 'E', 'M'],
      ['S', 'A', 'Ú', 'D', 'E', 'N', 'A', 'S'],
      ['J', 'E', 'S', 'U', 'S', 'P', 'A', 'Z'],
    ]
  },
  {
    tema: 'Livros da Bíblia',
    palavras: ['GÊNESIS', 'ÊXODO', 'LEVÍTICO', 'NÚMEROS'],
    grid: [
      ['G', 'Ê', 'N', 'E', 'S', 'I', 'S', 'N'],
      ['Ê', 'X', 'O', 'D', 'O', 'V', 'E', 'R'],
      ['L', 'E', 'V', 'Í', 'T', 'I', 'C', 'O'],
      ['N', 'Ú', 'M', 'E', 'R', 'O', 'S', 'B'],
      ['D', 'E', 'U', 'T', 'E', 'R', 'Ô', 'N'],
      ['O', 'M', 'I', 'C', 'A', 'S', 'A', 'J'],
      ['J', 'Ó', 'S', 'U', 'É', 'I', 'R', 'M'],
      ['J', 'U', 'Í', 'Z', 'E', 'S', 'P', 'S'],
    ]
  },
  {
    tema: 'Jesus e Parábolas',
    palavras: ['SEMEADOR', 'PERDIDO', 'BOM', 'SAMARITANO'],
    grid: [
      ['S', 'E', 'M', 'E', 'A', 'D', 'O', 'R'],
      ['P', 'E', 'R', 'D', 'I', 'D', 'O', 'X'],
      ['B', 'O', 'M', 'S', 'A', 'M', 'A', 'R'],
      ['I', 'T', 'A', 'N', 'O', 'E', 'L', 'A'],
      ['C', 'A', 'S', 'A', 'D', 'E', 'P', 'A'],
      ['F', 'É', 'R', 'T', 'I', 'L', 'P', 'A'],
      ['S', 'O', 'L', 'E', 'S', 'A', 'R', 'A'],
      ['C', 'E', 'I', 'F', 'A', 'D', 'O', 'R'],
    ]
  },
  {
    tema: 'Páscoa',
    palavras: ['PÁSCOA', 'JESUS', 'SANGUE', 'VIDA'],
    grid: [
      ['P', 'Á', 'S', 'C', 'O', 'A', 'J', 'E'],
      ['S', 'U', 'S', 'V', 'I', 'D', 'A', 'N'],
      ['S', 'A', 'N', 'G', 'U', 'E', 'P', 'E'],
      ['C', 'R', 'U', 'Z', 'A', 'M', 'O', 'R'],
      ['T', 'Ú', 'M', 'U', 'L', 'O', 'L', 'I'],
      ['A', 'N', 'J', 'O', 'S', 'R', 'E', 'S'],
      ['V', 'I', 'D', 'A', 'N', 'O', 'V', 'A'],
      ['R', 'E', 'S', 'S', 'U', 'R', 'E', 'I'],
    ]
  },
  {
    tema: 'Pentecostes',
    palavras: ['FÉ', 'ESPÍRITO', 'FOGO', 'LÍNGUAS'],
    grid: [
      ['F', 'É', 'E', 'S', 'P', 'Í', 'R', 'I'],
      ['T', 'O', 'F', 'O', 'G', 'O', 'S', 'A'],
      ['L', 'Í', 'N', 'G', 'U', 'A', 'S', 'F'],
      ['V', 'E', 'N', 'T', 'O', 'S', 'D', 'E'],
      ['C', 'É', 'U', 'F', 'É', 'S', 'C', 'A'],
      ['L', 'A', 'B', 'A', 'R', 'E', 'D', 'A'],
      ['D', 'E', 'U', 'S', 'A', 'M', 'O', 'R'],
      ['I', 'G', 'R', 'E', 'J', 'A', 'S', 'P'],
    ]
  }
];

export default function TelaCacaPalavras() {
  const [faseAtual, setFaseAtual] = useState(0);
  const [selecionadas, setSelecionadas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);
  const [letrasEncontradas, setLetrasEncontradas] = useState([]);
  const [posicoesCelulas, setPosicoesCelulas] = useState({});

  const fase = fases[faseAtual];

  const tocarSom = async (tipo) => {
    const arquivo =
      tipo === 'acerto'
        ? require('./assets/audio/game-start-317318.mp3')
        : require('./assets/audio/explosion-312361.mp3');
    const { sound } = await Audio.Sound.createAsync(arquivo);
    await sound.playAsync();
  };

  // ✅ Função corrigida
  const verificarPalavra = () => {
    if (selecionadas.length === 0) return;

    const palavraSelecionada = selecionadas
      .map((p) => {
        if (
          p &&
          Number.isInteger(p.linha) &&
          Number.isInteger(p.coluna) &&
          fase.grid[p.linha] &&
          fase.grid[p.linha][p.coluna]
        ) {
          return fase.grid[p.linha][p.coluna];
        } else {
          console.warn('Coordenada inválida detectada:', p);
          return '';
        }
      })
      .join('');

    console.log('Palavra selecionada:', palavraSelecionada);

    if (fase.palavras.includes(palavraSelecionada)) {
      if (!encontradas.includes(palavraSelecionada)) {
        const novas = [...encontradas, palavraSelecionada];
        setEncontradas(novas);
        setLetrasEncontradas([...letrasEncontradas, ...selecionadas]);
        setSelecionadas([]);
        tocarSom('acerto');
        Alert.alert('Boa!', `Você encontrou "${palavraSelecionada}"!`);

        if (novas.length === fase.palavras.length) {
          setTimeout(() => {
            if (faseAtual + 1 < fases.length) {
              Alert.alert('Parabéns!', 'Indo para a próxima fase...');
              setFaseAtual(faseAtual + 1);
              setEncontradas([]);
              setLetrasEncontradas([]);
              setSelecionadas([]);
              setPosicoesCelulas({});
            } else {
              Alert.alert('Finalizado!', 'Você completou todas as fases!');
            }
          }, 500);
        }
      }
    } else {
      tocarSom('erro');
      setSelecionadas([]);
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: ({ nativeEvent }) => {
        detectarCelula(nativeEvent.pageX, nativeEvent.pageY);
      },
      onPanResponderMove: ({ nativeEvent }) => {
        detectarCelula(nativeEvent.pageX, nativeEvent.pageY);
      },
      onPanResponderRelease: () => {
        verificarPalavra();
      },
    })
  ).current;

  const detectarCelula = (x, y) => {
    Object.entries(posicoesCelulas).forEach(([key, pos]) => {
      const { pageX, pageY, width, height } = pos;
      if (
        x >= pageX &&
        x <= pageX + width &&
        y >= pageY &&
        y <= pageY + height
      ) {
        const [linha, coluna] = key.split('-').map(Number);
        const jaSelecionada = selecionadas.find(
          (p) => p.linha === linha && p.coluna === coluna
        );
        const jaEncontrada = letrasEncontradas.find(
          (p) => p.linha === linha && p.coluna === coluna
        );
        if (!jaSelecionada && !jaEncontrada) {
          setSelecionadas((prev) => [...prev, { linha, coluna }]);
        }
      }
    });
  };

  const salvarPosicaoCelula = (linha, coluna, event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    const pageX = event.nativeEvent.pageX;
    const pageY = event.nativeEvent.pageY;

    const key = `${linha}-${coluna}`;
    setPosicoesCelulas((prev) => ({
      ...prev,
      [key]: { pageX, pageY, width, height },
    }));
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Text style={styles.titulo}>Fase {faseAtual + 1} - {fase.tema}</Text>

      <View style={styles.gridContainer}>
        {fase.grid.map((linha, i) => (
          <View key={i} style={{ flexDirection: 'row' }}>
            {linha.map((letra, j) => {
              const selecionada = selecionadas.find((p) => p.linha === i && p.coluna === j);
              const encontrada = letrasEncontradas.find((p) => p.linha === i && p.coluna === j);

              return (
                <View
                  key={j}
                  onLayout={(e) => salvarPosicaoCelula(i, j, e)}
                  style={[
                    styles.celula,
                    selecionada && styles.selecionada,
                    encontrada && styles.encontrada,
                  ]}
                >
                  <Text style={styles.letra}>{letra}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </View>

      <Text style={styles.encontradasTitulo}>Palavras Encontradas:</Text>
      {encontradas.map((p, i) => (
        <Text key={i} style={styles.encontradaTexto}>{p}</Text>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE6',
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#5D3E1B'
  },
  gridContainer: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 4
  },
  celula: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  letra: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  selecionada: {
    backgroundColor: '#FFDF91'
  },
  encontradasTitulo: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  encontrada: {
    fontSize: 16,
    color: '#2E7D32'
  }
});