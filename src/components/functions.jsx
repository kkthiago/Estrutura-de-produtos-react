import { useState } from "react";

export function useToggleBotao(valorInicial = false) {
  const [estado, setEstado] = useState(valorInicial);
  const toggle = () => {
    setEstado(estadoAtual => !estadoAtual);
  };
  return [estado, toggle];
}