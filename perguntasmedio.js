import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const perguntas = [
    {
        pergunta: "Quem foi o pai de Isaque?",
        respostas: ["Abraão", "Noé", "Moisés", "Jacó"],
        correta: "Abraão",
    },
    {
        pergunta: "Quem foi o primogênito de Adão e Eva?",
        respostas: ["Caim", "Abel", "Sete", "Noé"],
        correta: "Caim",
    },
    {
        pergunta: "Qual instrumento Davi tocava?",
        respostas: ["Harpa", "Flauta", "Tamborim", "Cítara"],
        correta: "Harpa",
    },
    {
        pergunta: "Qual era a fonte da força de Sansão?",
        respostas: ["Seus cabelos", "Sua fé", "Seus músculos", "Sua coroa"],
        correta: "Seus cabelos",
    },
    {
        pergunta: "Quantos mandamentos Deus entregou a Moisés?",
        respostas: ["10", "7", "12", "5"],
        correta: "10",
    },
    {
        pergunta: "Quem batizou Jesus?",
        respostas: ["João Batista", "Pedro", "Paulo", "Tiago"],
        correta: "João Batista",
    },
    {
        pergunta: "Quem negou Jesus três vezes?",
        respostas: ["Pedro", "Judas", "João", "Tomé"],
        correta: "Pedro",
    },
    {
        pergunta: "Quem foi o gigante derrotado por Davi?",
        respostas: ["Golias", "Sansão", "Saul", "Elias"],
        correta: "Golias",
    },
    {
        pergunta: "Qual foi o primeiro milagre de Jesus?",
        respostas: ["Transformar água em vinho", "Curar um cego", "Andar sobre as águas", "Multiplicar pães e peixes"],
        correta: "Transformar água em vinho",
    },
    {
        pergunta: "Quem recebeu as tábuas dos 10 mandamentos?",
        respostas: ["Moisés", "Abraão", "Noé", "Josué"],
        correta: "Moisés",
    },
    {
        pergunta: "Quem foi a esposa de Isaque?",
        respostas: ["Rebeca", "Raquel", "Sara", "Miriã"],
        correta: "Rebeca",
    },
    {
        pergunta: "Quantos filhos Jacó teve?",
        respostas: ["12", "10", "7", "5"],
        correta: "12",
    },
    {
        pergunta: "Qual foi o pecado de Caim?",
        respostas: ["Matou seu irmão", "Mentiu para Deus", "Desobedeceu a Deus", "Construiu uma torre"],
        correta: "Matou seu irmão",
    },
    {
        pergunta: "Quem foi o filho mais novo de Jacó?",
        respostas: ["Benjamim", "José", "Efraim", "Levi"],
        correta: "Benjamim",
    },
    {
        pergunta: "Como Sansão perdeu sua força?",
        respostas: ["Dalila cortou seu cabelo", "Foi envenenado", "Se afastou de Deus", "Ficou doente"],
        correta: "Dalila cortou seu cabelo",
    },
    {
        pergunta: "Quem escreveu os Salmos?",
        respostas: ["Davi", "Moisés", "Salomão", "Isaías"],
        correta: "Davi",
    },
    {
        pergunta: "Quem levou os Dez Mandamentos ao povo?",
        respostas: ["Moisés", "Josué", "Arão", "Davi"],
        correta: "Moisés",
    },
    {
        pergunta: "Qual era o nome do irmão de Moisés?",
        respostas: ["Arão", "Josué", "Davi", "Isaías"],
        correta: "Arão",
    },
    {
        pergunta: "Quem foi o traidor de Jesus?",
        respostas: ["Judas", "Pedro", "Tomé", "Paulo"],
        correta: "Judas",
    },
    {
        pergunta: "Qual era a profissão de Jesus?",
        respostas: ["Carpinteiro", "Pescador", "Sacerdote", "Pastor"],
        correta: "Carpinteiro",
    },
    {
        pergunta: "Qual discípulo andou sobre as águas com Jesus?",
        respostas: ["Pedro", "João", "André", "Tiago"],
        correta: "Pedro",
    },
    {
        pergunta: "Quem subiu ao céu em uma carruagem de fogo?",
        respostas: ["Elias", "Moisés", "Abraão", "Davi"],
        correta: "Elias",
    },
    {
        pergunta: "Quem foi o primeiro rei de Israel?",
        respostas: ["Saul", "Davi", "Salomão", "Josué"],
        correta: "Saul",
    },
    {
        pergunta: "Quem matou Golias?",
        respostas: ["Davi", "Saul", "Salomão", "Samuel"],
        correta: "Davi",
    },
    {
        pergunta: "Quem foi lançado na cova dos leões?",
        respostas: ["Daniel", "Elias", "Moisés", "Josué"],
        correta: "Daniel",
    },
    {
        pergunta: "Quem guiou o povo de Israel até a Terra Prometida após a morte de Moisés?",
        respostas: ["Josué", "Arão", "Elias", "Samuel"],
        correta: "Josué",
    },
    {
        pergunta: "Quem ajudou Jesus a carregar a cruz?",
        respostas: ["Simão Cireneu", "Pedro", "João", "Tomé"],
        correta: "Simão Cireneu",
    },
    {
        pergunta: "Quantos dias Jesus passou no deserto sendo tentado?",
        respostas: ["40", "30", "7", "12"],
        correta: "40",
    },
    {
        pergunta: "Qual era o nome do rio onde Jesus foi batizado?",
        respostas: ["Jordão", "Eufrates", "Nilo", "Tigre"],
        correta: "Jordão",
    },
    {
        pergunta: "Qual mandamento diz para honrar pai e mãe?",
        respostas: ["5º", "3º", "7º", "10º"],
        correta: "5º",
    },
    {
        pergunta: "Quem ajudou os espias em Jericó?",
        respostas: ["Raabe", "Débora", "Sara", "Ester"],
        correta: "Raabe",
    },
    {
        pergunta: "Quem interpretava sonhos no Egito?",
        respostas: ["José", "Moisés", "Abraão", "Jacó"],
        correta: "José",
    },
    {
        pergunta: "Quem libertou o povo de Israel da escravidão no Egito?",
        respostas: ["Moisés", "Josué", "Arão", "Elias"],
        correta: "Moisés",
    },
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
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#5D3E1B',
    },
    pergunta: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#6CC4A1',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    correct: {
        backgroundColor: '#4CAF50',
    },
    incorrect: {
        backgroundColor: '#E53935',
    },
    pontuacao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5D3E1B',
        marginTop: 20,
    },
    feedback: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5D3E1B',
        marginTop: 10,
    },
});