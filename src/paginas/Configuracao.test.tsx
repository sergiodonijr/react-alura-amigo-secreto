import React from 'react'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Configuracao from './Configuracao'

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

describe('a pagina de configuracao', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(<RecoilRoot>
      <Configuracao />
    </RecoilRoot>)

      expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="card"
  >
    <section>
      <h2>
        Vamos começar!
      </h2>
      <form>
        <div
          class="grupo-input-btn"
        >
          <input
            placeholder="Insira os nomes dos participantes"
            type="text"
            value=""
          />
          <button
            disabled=""
          >
            Adicionar
          </button>
        </div>
        
      </form>
      <ul />
      <footer
        class="rodape-configuracoes"
      >
        <button
          class="botao"
          disabled=""
        >
          Iniciar brincadeira
        </button>
        <img
          alt="Sacolas de compras"
          src="/sacolas.png"
        />
      </footer>
    </section>
  </div>
</div>
`)
  })
})