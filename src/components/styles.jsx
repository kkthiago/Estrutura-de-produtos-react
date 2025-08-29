import styled from "@emotion/styled";

const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Container = styled.div`
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #aee5bdff;
  border-radius: 10px;
`;

const ImagemProduto = styled.img`
  width: 400px;
  border-radius: 10px;
`;

const TituloProduto = styled.h1`
  margin: 10px 0 0 0;
  font-size: 2rem;
  font-weight: bold;
  color: #000000ff;
  padding: 10px;
  border-radius: 10px;
`;

const DescricaoProduto = styled.p`
  font-size: 16px;
  color: #333333;
  text-align: center;
  margin: 5px 0 5px 0;
`;


const BotaoComprar = styled.button`
  padding: 15px;
  border: none;
  text-align: center;
  border-radius: 15px;
  color: #ffffffff;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Efeito suave de transição */

  /* Lógica condicional para a cor de fundo */
  background-color: ${(props) => (props.adicionado ? "#6c757d" : "#198754")};

  &:hover {
    opacity: 0.9;
  }
`;

export { Section, Container, ImagemProduto, TituloProduto, DescricaoProduto, BotaoComprar };