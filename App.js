import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Configuracao from './pasta.configuração/configuracao';
import TelaTermosDeUso from './pasta.configuração/9.termos.de.uso/TelaTermosDeUso';
import TelaAjudaSuporte from './pasta.configuração/8.ajuda.suporte/tela.ajuda.suporte';
import TelaPoliticaPrivacidade from './pasta.configuração/7.politicas.privacidade/tela.politica.privacidade';
import TelaGuiaParaOsPais from './pasta.configuração/6.guia.para.os.pais/tela.guia.para.os.pais';
import TelaDificuldade from './TelaDificuldade';
import TelaQuizFacil from './perguntasfacil';
import TelaQuizMedio from './perguntasmedio';
import TelaQuizDificil from './perguntasdificil';
import { ProvedorConfiguracoes } from './ConfiguracoesContext';
import { ProvedorSom } from './SomContext';
import TelaPosInicio from './telaposinicio';
import TelaErro from './TelaErro';
import TelaMemoria from './telamemoria';
import TelaCacaPalavras from './telacacapalavras';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/biblioteca (2).jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BIBLIOTECA</Text>
          <Text style={styles.title}>DE SALOMÃO</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Escolha')}>
            <Text style={styles.buttonText}>INICIE O JOGO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuração')}>
            <Text style={styles.buttonText}>CONFIGURAÇÃO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const Pilha = createStackNavigator();

export default function App() {
  return (
    <ProvedorConfiguracoes>
      <ProvedorSom>
        <NavigationContainer>
          <Pilha.Navigator screenOptions={{ headerShown: false }}>
            <Pilha.Screen name="Home" component={HomeScreen} />
            <Pilha.Screen name="Configuração" component={Configuracao} />
            <Pilha.Screen name="TermosDeUso" component={TelaTermosDeUso} />
            <Pilha.Screen name="Suporte" component={TelaAjudaSuporte} />
            <Pilha.Screen name="Política" component={TelaPoliticaPrivacidade} />
            <Pilha.Screen name="Guia" component={TelaGuiaParaOsPais} />
            <Pilha.Screen name="Escolha" component={TelaPosInicio} />
            <Pilha.Screen name="Dificuldade" component={TelaDificuldade} />
            <Pilha.Screen name="Fácil" component={TelaQuizFacil} />
            <Pilha.Screen name="Médio" component={TelaQuizMedio} />
            <Pilha.Screen name="Difícil" component={TelaQuizDificil} />
            <Pilha.Screen name="erro" component={TelaErro} />
            <Pilha.Screen name="memoria" component={TelaMemoria} />
            <Pilha.Screen name="caca" component={TelaCacaPalavras} />
          </Pilha.Navigator>
        </NavigationContainer>
      </ProvedorSom>
    </ProvedorConfiguracoes>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA700',
    textShadowColor: '#5023AB',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#F7C040',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});