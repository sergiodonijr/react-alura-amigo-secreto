import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecrto } from "../atom"
import { RealizarSorteio } from "../helpers/RealizarSorteio"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
  const participantes = useListaDeParticipantes()
  const setResultado = useSetRecoilState(resultadoAmigoSecrto)
  return () => {
    const resultado = RealizarSorteio(participantes)
    setResultado(resultado)
  }
}