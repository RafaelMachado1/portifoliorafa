import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;  // Adicionando flexbox
  justify-content: center; // Centralizando horizontalmente
  align-items: center; // Centralizando verticalmente (se necessário, dependendo da altura)

  .swiper {  // Estilizando o container do Swiper diretamente
    width: 60%;  // Ocupa a largura total do CarouselContainer
    height: auto; // Altura automática

    .swiper-wrapper {  // Estilizando o wrapper dos slides
      display: flex;  // Garante que os slides fiquem alinhados
      align-items: center; // Centraliza verticalmente os slides dentro do wrapper (opcional)
    }

    .swiper-slide {  // Estilizando cada slide
      text-align: center;  // Centraliza o conteúdo de cada slide
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #007bff;  // Cor dos botões de navegação (ex: azul)
    }

    .swiper-pagination-bullet {
      background-color: #ccc;  // Cor dos bullets da paginação
      opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
      background-color: #007bff;  // Cor do bullet ativo
      opacity: 1;
    }
  }
`;






































