import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  default: []
})

export const resultadoAmigoSecrto = atom<Map<string, string>>({
  key: 'resuladoAmigoSecreto',
  default: new Map()
})

export const erroState = atom<string>({
  key: 'erroState',
  default: ''
})