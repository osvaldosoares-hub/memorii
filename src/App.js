import React from 'react';
import './style/settings/style.css'
import './style/reset.css'
import { Wrapperheader, HeaderHeadMemori, HeaderMemori, Wrapper } from './components/header';
import Logo from './components/logo';
import { IconMemori, IconPhone, IconInsta, IconsTwitter } from './components/icons';
import { BannerMemori } from './components/banner';
import TitleMemori from './components/title';
import { TagMemori } from './components/tag';
import { ListaMemoriul, ListaMemorili } from './components/lista';


function App() {
  return (
   <>
  
  <HeaderHeadMemori>
  <Wrapperheader>
    <IconMemori/>Av. Tenente Raimundo Rocha, S/N, UFCA, Juazeiro do Norte
    <IconPhone/>(88)99764-4360
    <IconInsta/>
    <IconsTwitter/>
  </Wrapperheader>
  </HeaderHeadMemori>
  
  <HeaderMemori>
  <Wrapper>
  <Logo/>
    <ListaMemoriul>
      <ListaMemorili>Home</ListaMemorili>
      <ListaMemorili>Serviços</ListaMemorili>
      <ListaMemorili>Nossos Processos</ListaMemorili>
      <ListaMemorili>Portifolio</ListaMemorili>
    </ListaMemoriul>
  </Wrapper>
  </HeaderMemori>


  <BannerMemori>
  <TitleMemori>Quem somos nos</TitleMemori>
  <TagMemori>A Memori– Empresa Júnior de Matematica Computacional e Ciências da Computação é uma iniciativa empreendedora, composta por estudantes do curso de MC e CC da Universidade Federal do Cariri (UFCA), Campus Juazeiro do Norte. A Memori busca, através de sua equipe, integrar os conhecimentos, trabalhando com desenvolvimento de soluções web, seja sites, sistemas e/ou aplicativos. Buscamos a solução personalizada ao seu negócio e aos seus problemas, visando sempre trazer mais resultado!!</TagMemori>
  </BannerMemori>
  
   </>
  );
}

export default App;
