import React from 'react';
import {
  AboutContainer,
  ContentWrapper,
  ImageContainer,
  TextContainer,
  SkillsContainer,
  SkillIcon,
} from './styles';

const About = ({ isDarkMode }) => {
  return (
    <AboutContainer isDarkMode={isDarkMode}>
      <ContentWrapper>
        <ImageContainer isDarkMode={isDarkMode}>
          <img src="./src/assets/images/About.jpeg" alt="Sua Foto" />
        </ImageContainer>
        <TextContainer isDarkMode={isDarkMode}>
          <h1>DESENVOLVEDOR WEB3</h1>
          <p>
            Desenvolvedor experiente e versátil com sólida formação em tecnologia
            web2 e web3 com ampla experiência na área comercial. Apaixonado por
            criar soluções digitais eficientes e inovadoras, aliando conhecimentos
            técnicos de desenvolvimento com habilidades comerciais adquiridas ao
            longo de duas décadas de carreira. Atualmente estudando Web3 para
            ampliar habilidades em Blockchain, Tokenização de ativos, Smart
            Contracts, Inteligencia Artificial e Finanças Descentralizadas.
          </p>
          <h2>Habilidades:</h2>
          <SkillsContainer>
            <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/html-5.png" alt="HTML" />
              <span>HTML</span>
            </SkillIcon>
            <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/css-3.png" alt="CSS" />
              <span>CSS</span>
            </SkillIcon>           
            <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/js.png" alt="JavaScript" />
              <span>JavaScript</span>
            </SkillIcon>
            <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/typescript.png" alt="TypeScript" />
              <span>TypeScript</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/react.png" alt="React" />
              <span>React</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/python.png" alt="Python" />
              <span>Python</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/nodejs.png" alt="Node.js" />
              <span>Node.js</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/solidity.png" alt="Solidity" />
              <span>Solidity</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/bitcoin.png" alt="Bitcoin" />
              <span>Bitcoin</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/ethereum.png" alt="Ethereum" />
              <span>Ethereum</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/sql.png" alt="MySQL" />
              <span>MySQL</span>
            </SkillIcon>
             <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/mongo.png" alt="MongoDB" />
              <span>MongoDB</span>
            </SkillIcon>
              <SkillIcon isDarkMode={isDarkMode}>
              <img src="/src/assets/icons/vscode.png" alt="VSCode" />
              <span>VSCode</span>            
            </SkillIcon>
          </SkillsContainer>
        </TextContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;



























































































