import React, { createContext, useState, useContext } from 'react';

// Criando o Contexto
const ContextoConfiguracoes = createContext();

// Provedor do Contexto
export function ProvedorConfiguracoes({ children }) {
  const [efeitosSonoros, definirEfeitosSonoros] = useState(50);
  const [musicaFundo, definirMusicaFundo] = useState(50);
  const [brilhoTela, definirBrilhoTela] = useState(50);
  const [tamanhoTexto, definirTamanhoTexto] = useState(16);

  return (
    <ContextoConfiguracoes.Provider
      value={{
        efeitosSonoros,
        definirEfeitosSonoros,
        musicaFundo,
        definirMusicaFundo,
        brilhoTela,
        definirBrilhoTela,
        tamanhoTexto,
        definirTamanhoTexto,
      }}
    >
      {children}
    </ContextoConfiguracoes.Provider>
  );
}

// Hook personalizado para facilitar o uso do contexto
export function usarConfiguracoes() {
  return useContext(ContextoConfiguracoes);
}