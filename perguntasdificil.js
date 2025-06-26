import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const perguntas = [
    {
        pergunta: "Qual o último livro da Bíblia?",
        respostas: ["Apocalipse", "Gênesis", "Mateus", "Atos"],
        correta: "Apocalipse",
    },
    {
        pergunta: "Por quantos anos os hebreus vagaram pelo deserto?",
        respostas: ["40 anos", "7 anos", "12 anos", "70 anos"],
        correta: "40 anos",
    },
    {
        pergunta: "Quem liderou o povo hebreu para fora do Egito?",
        respostas: ["Moisés", "Josué", "Aarão", "Elias"],
        correta: "Moisés",
    },
    {
        pergunta: "Qual era o nome do primeiro rei de Israel?",
        respostas: ["Saul", "Davi", "Salomão", "Josué"],
        correta: "Saul",
    },
    {
        pergunta: "Quem foi lançado na cova dos leões?",
        respostas: ["Daniel", "José", "Jonas", "Elias"],
        correta: "Daniel",
    },
    {
        pergunta: "Quem escreveu o livro de Atos?",
        respostas: ["Lucas", "Paulo", "Pedro", "João"],
        correta: "Lucas",
    },
    {
        pergunta: "Qual juiz teve a força ligada ao seu cabelo?",
        respostas: ["Sansão", "Gideão", "Débora", "Eli"],
        correta: "Sansão",
    },
    {
        pergunta: "Quem traiu Jesus?",
        respostas: ["Judas Iscariotes", "Pedro", "João", "Tomé"],
        correta: "Judas Iscariotes",
    },
    {
        pergunta: "Quantos capítulos tem o livro de Apocalipse?",
        respostas: ["22", "12", "40", "66"],
        correta: "22",
    },
    {
        pergunta: "Quem batizou Jesus?",
        respostas: ["João Batista", "Pedro", "Moisés", "Tiago"],
        correta: "João Batista",
    },
    {
        pergunta: "Quem escreveu os livros de Crônicas?",
        respostas: ["Esdras", "Moisés", "Davi", "Salomão"],
        correta: "Esdras",
    },
    {
        pergunta: "O que Deus usou para guiar os hebreus no deserto de noite?",
        respostas: ["Uma coluna de fogo", "Uma nuvem", "Uma estrela", "Um anjo"],
        correta: "Uma coluna de fogo",
    },
    {
        pergunta: "Quem foi escolhido para substituir Judas Iscariotes como apóstolo?",
        respostas: ["Matias", "Barnabé", "Paulo", "Tiago"],
        correta: "Matias",
    },
    {
        pergunta: "Quem foi a mulher que ajudou os espiões em Jericó?",
        respostas: ["Raabe", "Débora", "Rute", "Maria"],
        correta: "Raabe",
    },
    {
        pergunta: "Quem era o governador romano que condenou Jesus à morte?",
        respostas: ["Pôncio Pilatos", "Herodes", "César", "Caifás"],
        correta: "Pôncio Pilatos",
    },
    {
        pergunta: "Quantas tribos de Israel existiam?",
        respostas: ["12", "10", "7", "40"],
        correta: "12",
    },
    {
        pergunta: "Quem foi o discípulo que andou sobre as águas com Jesus?",
        respostas: ["Pedro", "João", "Tiago", "Paulo"],
        correta: "Pedro",
    },
    {
        pergunta: "O que Jesus disse para acalmar a tempestade?",
        respostas: ["Aquieta-te, vento", "Vento, cala-te", "Paz, seja convosco", "Mar, fique tranquilo"],
        correta: "Vento, cala-te",
    },
    {
        pergunta: "Quem foi chamado de 'homem segundo o coração de Deus'?",
        respostas: ["Davi", "Moisés", "Abraão", "Salomão"],
        correta: "Davi",
    },
    {
        pergunta: "Qual o nome do pai de João Batista?",
        respostas: ["Zacarias", "José", "Eli", "Isaías"],
        correta: "Zacarias",
    },
    {
        pergunta: "Quem interpretava os sonhos do faraó no Egito?",
        respostas: ["José", "Moisés", "Arão", "Daniel"],
        correta: "José",
    },
    {
        pergunta: "Qual era o nome do anjo que anunciou o nascimento de Jesus?",
        respostas: ["Gabriel", "Miguel", "Rafael", "Uriel"],
        correta: "Gabriel",
    },
    {
        pergunta: "O que Jesus multiplicou para alimentar a multidão?",
        respostas: ["Pães e peixes", "Vinho e pão", "Ovelhas e vacas", "Água e mel"],
        correta: "Pães e peixes",
    },
    {
        pergunta: "Quem escreveu o evangelho de Mateus?",
        respostas: ["Mateus", "Marcos", "Lucas", "João"],
        correta: "Mateus",
    },
    {
        pergunta: "Quem viu Jesus no caminho de Damasco?",
        respostas: ["Saulo", "Pedro", "Tiago", "Filipe"],
        correta: "Saulo",
    },
    {
        pergunta: "Quem foi levado ao céu em uma carruagem de fogo?",
        respostas: ["Elias", "Moisés", "Enoque", "Isaias"],
        correta: "Elias",
    },
    {
        pergunta: "Quem era o governador romano que libertou Barrabás?",
        respostas: ["Pôncio Pilatos", "Herodes", "Nero", "Tibério"],
        correta: "Pôncio Pilatos",
    },
    {
        pergunta: "Quem foi o líder dos apóstolos após a morte de Jesus?",
        respostas: ["Pedro", "Paulo", "Tiago", "João"],
        correta: "Pedro",
    },
    {
        pergunta: "O que caiu do céu para alimentar os israelitas no deserto?",
        respostas: ["Maná", "Pães", "Peixes", "Codornizes"],
        correta: "Maná",
    },
    {
        pergunta: "Quantos evangelhos existem na Bíblia?",
        respostas: ["4", "3", "5", "7"],
        correta: "4",
    },
    {
        pergunta: "Quem ajudou Jesus a carregar a cruz?",
        respostas: ["Simão Cireneu", "Pedro", "Paulo", "João"],
        correta: "Simão Cireneu",
    },
    {
        pergunta: "Quem escreveu o evangelho de Lucas?",
        respostas: ["Lucas", "João", "Pedro", "Paulo"],
        correta: "Lucas",
    },
    {
        pergunta: "Quem foi lançado no ventre de um grande peixe?",
        respostas: ["Jonas", "Noé", "José", "Moisés"],
        correta: "Jonas",
    },
    {
        pergunta: "Qual era a profissão de Paulo antes de seguir Jesus?",
        respostas: ["Fabricante de tendas", "Pescador", "Carpinteiro", "Cobrador de impostos"],
        correta: "Fabricante de tendas",
    },
    {
        pergunta: "Quantos anos tinha Jesus quando começou seu ministério?",
        respostas: ["30", "25", "33", "40"],
        correta: "30",
    },
    {
        pergunta: "Quem foi o primeiro mártir cristão?",
        respostas: ["Estevão", "Pedro", "Paulo", "Tiago"],
        correta: "Estevão",
    },
    {
        pergunta: "Quem escreveu a maioria das cartas do Novo Testamento?",
        respostas: ["Paulo", "Pedro", "João", "Tiago"],
        correta: "Paulo",
    },
    {
        pergunta: "Qual cidade foi destruída por Deus com fogo e enxofre?",
        respostas: ["Sodoma", "Jericó", "Babilônia", "Samaria"],
        correta: "Sodoma",
    }
];

export default function JogoPerguntas({ navigation }) {
    const [perguntaIndex, setPerguntaIndex] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [respostaCerta, setRespostaCerta] = useState(null);
    const [respostaErrada, setRespostaErrada] = useState(false);
    const [bloqueado, setBloqueado] = useState(false);

    const verificarResposta = (resposta) => {
        if (bloqueado) return;
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
                    disabled={bloqueado}
                >
                    <Text style={styles.buttonText}>{resposta}</Text>
                </TouchableOpacity>
            ))}

            <Text style={styles.pontuacao}>Pontuação: {pontuacao}</Text>

            {respostaCerta !== null && (
                <Text style={styles.feedback}>
                    {respostaCerta ? 'Resposta correta!' : `Resposta errada! A resposta certa é: ${perguntas[perguntaIndex].correta}`}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5E4C3',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#5D3E1B',
    },
    pergunta: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#5D3E1B',
    },
    button: {
        backgroundColor: '#6CC4A1',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    pontuacao: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#5D3E1B',
    },
    correct: {
        backgroundColor: '#4CAF50',
    },
    incorrect: {
        backgroundColor: '#E74C3C',
    },
    feedback: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#5D3E1B',
        textAlign: 'center',
    },
});