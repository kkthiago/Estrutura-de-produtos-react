/** @jsxImportSource @emotion/react */
import {useToggleBotao} from "./components/functions.jsx";

import {
  Container,
  ImagemProduto,
  TituloProduto,
  DescricaoProduto,
  Section,
  BotaoComprar
} from "./components/styles.jsx";

function App() {
  const [adicionado, toggleAdicionado] = useToggleBotao();

    return (
      <main>
        <Section>
          <Container>
            <ImagemProduto
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
              alt="Imagem do produto"
            />
            <TituloProduto>Câmera 1</TituloProduto>
            <DescricaoProduto>Tira fotografias como nínguem!<br></br>R$ 530,00</DescricaoProduto>
            <BotaoComprar onClick={toggleAdicionado} adicionado={adicionado}>
            {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
            </BotaoComprar>
          </Container>

          <Container>
            <ImagemProduto
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
              alt="Imagem do produto"
            />
            <TituloProduto>Câmera 2</TituloProduto>
            <DescricaoProduto>Tira fotografias como alguem<br></br>R$ 130,00</DescricaoProduto>
            <BotaoComprar onClick={toggleAdicionado} adicionado={adicionado}>
            {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
            </BotaoComprar>
          </Container>

          <Container>
            <ImagemProduto
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
              alt="Imagem do produto"
            />
            <TituloProduto>Câmera 3</TituloProduto>
            <DescricaoProduto>A impecável tecnologia japonesa em forma de câmera<br></br>R$ 780,00</DescricaoProduto>
            <BotaoComprar onClick={toggleAdicionado} adicionado={adicionado}>
            {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
            </BotaoComprar>
          </Container>

          <Container>
            <ImagemProduto
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
              alt="Imagem do produto"
            />
            <TituloProduto>Câmera 4</TituloProduto>
            <DescricaoProduto>Ela é um pouco pior que todas<br></br>R$ 330,00</DescricaoProduto>
            <BotaoComprar onClick={toggleAdicionado} adicionado={adicionado}>
            {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
            </BotaoComprar>
          </Container>
        </Section>
      </main>
    );
}

export default App;