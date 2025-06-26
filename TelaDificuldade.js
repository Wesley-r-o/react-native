import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaDificuldade({ navigation }) {
    const [dificuldade, setDificuldade] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione a Dificuldade</Text>

            {/* Botões de seleção de dificuldade */}
            <TouchableOpacity
                style={[styles.button, dificuldade === 'Fácil' && styles.selected]}
                onPress={() => setDificuldade('Fácil')}
            >
                <Text style={styles.buttonText}>Fácil</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, dificuldade === 'Médio' && styles.selected]}
                onPress={() => setDificuldade('Médio')}
            >
                <Text style={styles.buttonText}>Médio</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, dificuldade === 'Difícil' && styles.selected]}
                onPress={() => setDificuldade('Difícil')}
            >
                <Text style={styles.buttonText}>Difícil</Text>
            </TouchableOpacity>

            {/* Exibir dificuldade selecionada */}
            {dificuldade && <Text style={styles.selectedText}>Dificuldade Escolhida: {dificuldade}</Text>}

            {/* Botão para confirmar a seleção */}
            {dificuldade && (
                <TouchableOpacity
                    style={[styles.button, styles.confirmButton]}
                    onPress={() => navigation.navigate(dificuldade)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            )}

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
        backgroundColor: '#F5E4C3',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#5D3E1B',
    },
    button: {
        backgroundColor: '#6CC4A1',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 15,
        width: '80%',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#4A9E82',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    selectedText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5D3E1B',
        marginTop: 10,
    },
    confirmButton: {
        backgroundColor: '#5D3E1B',
        marginTop: 20,
    },
    backButton: {
        backgroundColor: '#D9534F',
        marginTop: 15,
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