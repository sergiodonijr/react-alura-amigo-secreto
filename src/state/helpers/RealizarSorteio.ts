import shuflle from "just-shuffle"

export function RealizarSorteio(participantes: string[]) {
  const totalDeParticipantes = participantes.length
  const embaralhado = shuflle(participantes)
  const resultado = new Map<string, string>()

  for (let index = 0; index < totalDeParticipantes; index++) {
    
    // Se o indexDoAmigo for o último o index é igual a zero, senão é o próximo
    const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;
    resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])      
  }
  return resultado
}