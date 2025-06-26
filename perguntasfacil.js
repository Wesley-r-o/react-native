import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const perguntas = [
    {
        pergunta: "Quem foi o pai de Jesus?",
        respostas: ["José", "Abraão", "Moisés", "Davi"],
        correta: "José",
    },
    {
        pergunta: "Quantas pragas houve no Egito?",
        respostas: ["10", "7", "12", "15"],
        correta: "10",
    },
    {
        pergunta: "Quem traiu José e o vendeu?",
        respostas: ["Seus irmãos", "Faraó", "Raquel", "Esaú"],
        correta: "Seus irmãos",
    },
    {
        pergunta: "Quem era o primeiro homem criado por Deus?",
        respostas: ["Adão", "Moisés", "José", "Jacó"],
        correta: "Adão",
    },
    {
        pergunta: "Quem dividiu o Mar Vermelho?",
        respostas: ["Moisés", "Josué", "Davi", "Abraão"],
        correta: "Moisés",
    },
    {
        pergunta: "Qual era o nome da mãe de Jesus?",
        respostas: ["Maria", "Ana", "Sara", "Rebeca"],
        correta: "Maria",
    },
    {
        pergunta: "O que Eva comeu no Jardim do Éden?",
        respostas: ["Uma fruta", "Pão", "Peixe", "Mel"],
        correta: "Uma fruta",
    },
    {
        pergunta: "Quem construiu a arca para salvar os animais do dilúvio?",
        respostas: ["Noé", "Moisés", "Abraão", "Jacó"],
        correta: "Noé",
    },
    {
        pergunta: "Quem foi chamado de 'pai da fé'?",
        respostas: ["Abraão", "Isaac", "Moisés", "Davi"],
        correta: "Abraão",
    },
    {
        pergunta: "Qual era o nome do filho de Abraão que quase foi sacrificado?",
        respostas: ["Isaac", "Ismael", "Jacó", "José"],
        correta: "Isaac",
    },
    {
        pergunta: "Quem interpretava sonhos no Egito e se tornou governador?",
        respostas: ["José", "Faraó", "Jacó", "Samuel"],
        correta: "José",
    },
    {
        pergunta: "Como Deus apareceu para Moisés no deserto?",
        respostas: ["Numa sarça ardente", "Num trovão", "Num vento forte", "Num terremoto"],
        correta: "Numa sarça ardente",
    },
    {
        pergunta: "Qual era o nome do irmão de Moisés?",
        respostas: ["Arão", "Davi", "José", "Esaú"],
        correta: "Arão",
    },
    {
        pergunta: "Quem foi jogado na cova dos leões?",
        respostas: ["Daniel", "José", "Moisés", "Abraão"],
        correta: "Daniel",
    },
    {
        pergunta: "Quem recebeu os Dez Mandamentos no Monte Sinai?",
        respostas: ["Moisés", "Abraão", "Jacó", "Davi"],
        correta: "Moisés",
    },
    {
        pergunta: "Quem foi o primeiro rei de Israel?",
        respostas: ["Saul", "Davi", "Salomão", "Moisés"],
        correta: "Saul",
    },
    {
        pergunta: "Qual foi a primeira praga do Egito?",
        respostas: ["Água transformada em sangue", "Peste nos animais", "Trevas", "Sapos"],
        correta: "Água transformada em sangue",
    },
    {
        pergunta: "O que Deus criou no sétimo dia?",
        respostas: ["Nada, Ele descansou", "Os animais", "O homem", "O sol e a lua"],
        correta: "Nada, Ele descansou",
    },
    {
        pergunta: "Quem foi o discípulo que traiu Jesus?",
        respostas: ["Judas", "Pedro", "João", "Tiago"],
        correta: "Judas",
    },
    {
        pergunta: "Quem ajudou Jesus a carregar a cruz?",
        respostas: ["Simão de Cirene", "Pedro", "Paulo", "Tiago"],
        correta: "Simão de Cirene",
    },
    {
        pergunta: "Quem foi engolido por um grande peixe?",
        respostas: ["Jonas", "Moisés", "Davi", "Elias"],
        correta: "Jonas",
    },
    {
        pergunta: "Quem era a esposa de Adão?",
        respostas: ["Eva", "Sara", "Rebeca", "Maria"],
        correta: "Eva",
    },
    {
        pergunta: "Quantos discípulos Jesus escolheu?",
        respostas: ["12", "10", "7", "15"],
        correta: "12",
    },
    {
        pergunta: "Qual era a profissão de Pedro antes de seguir Jesus?",
        respostas: ["Pescador", "Carpinteiro", "Pastor", "Médico"],
        correta: "Pescador",
    },
    {
        pergunta: "Quem foi lançado na fornalha de fogo e sobreviveu?",
        respostas: ["Sadraque, Mesaque e Abednego", "Moisés e Arão", "Pedro e João", "Paulo e Silas"],
        correta: "Sadraque, Mesaque e Abednego",
    }
];


export default function JogoPerguntas({ navigation }) {
    const [perguntaIndex, setPerguntaIndex] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [respostaCerta, setRespostaCerta] = useState(null);
    const [respostaErrada, setRespostaErrada] = useState(false);
    const [bloqueado, setBloqueado] = useState(false); // Para evitar cliques duplos

    const verificarResposta = (resposta) => {
        if (bloqueado) return; // Impede que o usuário clique várias vezes
        setBloqueado(true);

        if (resposta === perguntas[perguntaIndex].correta) {
            setPontuacao(pontuacao + 1);
            setRespostaCerta(true);
        } else {
            setRespostaCerta(false);
            setRespostaErrada(true);
        }

        setTimeout(() => {
            if (perguntaIndex < perguntas.length - 1) {
                setPerguntaIndex(perguntaIndex + 1);
                setRespostaCerta(null);
                setRespostaErrada(false);
                setBloqueado(false);
            } else {
                alert(`Fim do jogo! Você fez ${pontuacao + (respostaCerta ? 1 : 0)} pontos.`);
                navigation.goBack();
            }
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pergunta {perguntaIndex + 1} de {perguntas.length}</Text>
            <Text style={styles.pergunta}>{perguntas[perguntaIndex].pergunta}</Text>

            {perguntas[perguntaIndex].respostas.map((resposta, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.button,
                        respostaCerta === true && resposta === perguntas[perguntaIndex].correta
                            ? styles.correct
                            : respostaErrada && resposta === perguntas[perguntaIndex].correta
                            ? styles.correct
                            : respostaErrada && resposta !== perguntas[perguntaIndex].correta
                            ? styles.incorrect
                            : null,
                    ]}
                    onPress={() => verificarResposta(resposta)}
                    disabled={bloqueado} // Desativa os botões após um clique
                >
                    <Text style={styles.buttonText}>{resposta}</Text>
                </TouchableOpacity>
            ))}

            <Text style={styles.pontuacao}>Pontuação: {pontuacao}</Text>

            {/* Exibir resposta correta após cada escolha */}
            {respostaCerta !== null && (
                <Text style={styles.feedback}>
                    {respostaCerta ? 'Resposta correta!' : 'Resposta errada! A resposta certa é: ' + perguntas[perguntaIndex].correta}
                </Text>
            )}
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#5D3E1B',
    },
    pergunta: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
    correct: {
        backgroundColor: '#4CAF50',
    },
    incorrect: {
        backgroundColor: '#F44336',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    feedback: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5D3E1B',
        marginTop: 10,
    },
    pontuacao: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#5D3E1B',
        marginTop: 20,
    },
});