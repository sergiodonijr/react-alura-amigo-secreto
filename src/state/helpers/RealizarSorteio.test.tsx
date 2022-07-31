import { RealizarSorteio } from "./RealizarSorteio"

describe('dado um sorteio de amigo secrto', () => {
  test('cada participante não sortie o próprio nome', () => {

    const participantes = [
      'Ana',
        'Catarina',
        'Juiliana',
        'João',
        'Vinicios',
        'Nathalia'
    ]

    const sorteio = RealizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})