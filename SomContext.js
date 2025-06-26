import React, { createContext, useContext, useEffect } from 'react';
import { Audio } from 'expo-av';
import { usarConfiguracoes } from './ConfiguracoesContext';

const SomContext = createContext();
let somDeFundo = null;

export function ProvedorSom({ children }) {
  const { musicaFundo } = usarConfiguracoes();

  useEffect(() => {
    const tocarMusica = async () => {
      try {
        if (!somDeFundo) {
          somDeFundo = new Audio.Sound();
          await somDeFundo.loadAsync(require('./assets/audio/merx-market-song-33936.mp3')); 
          await somDeFundo.setIsLoopingAsync(true);
          await somDeFundo.playAsync();
        }
        await somDeFundo.setVolumeAsync(musicaFundo / 100);
      } catch (error) {
        console.log('Erro ao tocar música de fundo:', error);
      }
    };

    tocarMusica();

    return () => {
      if (somDeFundo) {
        somDeFundo.unloadAsync();
        somDeFundo = null;
      }
    };
  }, [musicaFundo]);

  return <SomContext.Provider value={{}}>{children}</SomContext.Provider>;
}

export function usarSom() {
  return useContext(SomContext);
}