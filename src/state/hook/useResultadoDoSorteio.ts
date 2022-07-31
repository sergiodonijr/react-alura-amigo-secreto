import { useRecoilValue } from "recoil"
import { resultadoAmigoSecrto } from "../atom"

export const useResultadoDoSorteio = () => {
  return useRecoilValue(resultadoAmigoSecrto)
}