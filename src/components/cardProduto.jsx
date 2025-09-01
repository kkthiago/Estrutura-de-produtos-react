import { useToggleBotao } from "./useToggleBotao";
import { Section, Container, ImagemProduto, TituloProduto, DescricaoProduto, BotaoComprar } from "./styles"

function CardProduto({ imagem, titulo, descricao, preco }) {
  const [adicionado, toggleAdicionado] = useToggleBotao();

  return (
    <Container>
      <ImagemProduto src={imagem} alt={"Imagem do " + titulo} />
      <TituloProduto>{titulo}</TituloProduto>
      <DescricaoProduto>{descricao}</DescricaoProduto>
      <DescricaoProduto>R$ {preco}</DescricaoProduto>
      <BotaoComprar onClick={toggleAdicionado} adicionado={adicionado}>
        {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </BotaoComprar>
    </Container>
  );
}

export function ListaDeProdutos() {
  return (
    <Section>
      <CardProduto
        titulo="Câmera 1"
        imagem="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
        descricao="Tira fotografias como ninguém!"
        preco="530,00"
      />

      <CardProduto
        titulo="Câmera 2"
        imagem="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
        descricao="Tira fotografias como alguém."
        preco="130,00"
      />

      <CardProduto
        titulo="Câmera 3"
        imagem="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
        descricao="A impecável tecnologia japonesa em forma de câmera."
        preco="780,00"
      />

      <CardProduto
        titulo="Câmera 4"
        imagem="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
        descricao="Desista."
        preco="8,00"
      />

    </Section>
  );
}

