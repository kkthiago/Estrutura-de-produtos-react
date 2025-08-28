/** @jsxImportSource @emotion/react */
import {
  Container,
  ImagemProduto,
  TituloProduto,
  DescricaoProduto,
  Section,
} from "./components/styles.jsx";

function App() {
  return (
    <main>
      <Section>
        <Container>
          <ImagemProduto
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
            alt="Imagem do produto"
          />
          <TituloProduto>Câmera 1</TituloProduto>
          <DescricaoProduto>Quase igual a câmera 2</DescricaoProduto>
        </Container>

        <Container>
          <ImagemProduto
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
            alt="Imagem do produto"
          />
          <TituloProduto>Câmera 2</TituloProduto>
          <DescricaoProduto>Quase igual a câmera 1</DescricaoProduto>
        </Container>

        <Container>
          <ImagemProduto
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
            alt="Imagem do produto"
          />
          <TituloProduto>Câmera 3</TituloProduto>
          <DescricaoProduto>Quase igual a câmera 3</DescricaoProduto>
        </Container>
      </Section>
    </main>
  );
}

export default App;