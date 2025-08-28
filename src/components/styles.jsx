import styled from "@emotion/styled";

const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #677E86;
  border-radius: 10px;
`;

const ImagemProduto = styled.img`
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TituloProduto = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #000000ff;
  margin-top: 20px;
  padding: 20px;
  background-color: grey;
  border-radius: 10px;
`;

const DescricaoProduto = styled.p`
  font-size: 16px;
  color: #333333;
  text-align: center;
  margin-top: 10px;
`;

export { Section, Container, ImagemProduto, TituloProduto, DescricaoProduto };
