import React from 'react';
import './style/settings/style.css'
import './style/reset.css'
import { Wrapperheader, HeaderHeadMemori, HeaderMemori, Wrapper } from './components/header';
import Logo from './components/logo';
import { IconMemori, IconPhone, IconInsta, IconsTwitter, IconsArrows, IconsArrowss, IconComputador, IconSistema, IconApp, IconComprar } from './components/icons';
import { BannerMemori, BlocoTituloMemori, SegBannerMemori, SitesMemori, SitemasMemori,AppBlocoMemori, EcomerciBlocoMemori   } from './components/banner';
import   TitleMemori   from './components/title';
import { TagMemori, SegTagMemori, Titulo, Paragrafo } from './components/tag';
import { ListaMemoriul, ListaMemorili } from './components/lista';
import LinkMemori from './components/link';
import { Borda, BlocoMemori, SeggBlocoMemori} from './components/divs';
import FooterMemori from './components/footer';
import LogoMemori from './components/logomemori';


function App() {
  return (
   <>
  
  <HeaderHeadMemori>
  <Wrapperheader>
  <LinkMemori href="https://www.google.com/maps/place/UFCA+-+Universidade+Federal+do+Cariri+-+Campus+Juazeiro+do+Norte/@-7.2566452,-39.3048177,15z/data=!4m5!3m4!1s0x0:0xd338476d79979708!8m2!3d-7.2566452"> <IconMemori/></LinkMemori> Av. Tenente Raimundo Rocha, S/N, UFCA, Juazeiro do Norte
    <IconPhone/>(88)99764-4360
    <LinkMemori href="https://www.instagram.com/osvaldo_soa/"><IconInsta/>  </LinkMemori>
    <LinkMemori href="https://twitter.com/dev_dewebnamoro"> <IconsTwitter/></LinkMemori>
  </Wrapperheader>
  </HeaderHeadMemori>
  
  <HeaderMemori>
  <Wrapper>
  <Logo/>
    <ListaMemoriul>
      <ListaMemorili as="a" href="/home">Home</ListaMemorili>
      <ListaMemorili as="a" href="/home/serviço">Serviços</ListaMemorili>
      <ListaMemorili>Nossos Processos</ListaMemorili>
      <ListaMemorili>Portifolio</ListaMemorili>
    </ListaMemoriul>
  </Wrapper>
  </HeaderMemori>


  <BannerMemori>
  <TitleMemori>Quem somos nos</TitleMemori>
  <TagMemori>A Memori– Empresa Júnior de Matematica Computacional e Ciências da Computação é uma iniciativa empreendedora, composta por estudantes do curso de MC e CC da Universidade Federal do Cariri (UFCA), Campus Juazeiro do Norte. A Memori busca, através de sua equipe, integrar os conhecimentos, trabalhando com desenvolvimento de soluções web, seja sites, sistemas e/ou aplicativos. Buscamos a solução personalizada ao seu negócio e aos seus problemas, visando sempre trazer mais resultado!!</TagMemori>
  </BannerMemori>

  <BlocoTituloMemori>
  <Borda>
  <IconsArrows/>
  <SegTagMemori>Serviços</SegTagMemori>
  <IconsArrowss/>
  </Borda>
  </BlocoTituloMemori>
  <SegBannerMemori>
    
    <BlocoMemori>
    <SitesMemori>
      
     <IconComputador/>
     <Titulo>Sites</Titulo>
     <Paragrafo>Voltado para quem deseja dar presença digital ao seu negócio e alavancar as suas vendas, reunindo informações e consolidando a identidade visual da marca num canal fundamental de contato com o público.</Paragrafo>
     
    </SitesMemori>
    <SitemasMemori>
    <IconSistema/>
    <Titulo>Sistemas</Titulo>
    <Paragrafo>Consiste na criação de uma solução online personalizada para automatizar os processos internos da sua organização, otimizando a sua gestão em tempo e dinheiro investidos.</Paragrafo>
    </SitemasMemori> 
    </BlocoMemori>
    <SeggBlocoMemori>
    <AppBlocoMemori>
      <IconApp/>
    <Titulo>Aplicativos</Titulo>
    <Paragrafo>Direcionado para quem busca soluções digitais para o seu negócio por de um aplicativo mobile, proporcionando ao seu cliente uma experiência ágil, simples</Paragrafo>
    </AppBlocoMemori>
    <EcomerciBlocoMemori>
    <IconComprar/>
    <Titulo>E-commerce</Titulo>
    <Paragrafo>Direcionado para negócios que desejam expandir seu mercado no mundo virtual, atingindo um público muito maior e potencializando as suas vendas.</Paragrafo>
      </EcomerciBlocoMemori> 

    </SeggBlocoMemori>
    
    
  </SegBannerMemori>
  <FooterMemori>
    <LogoMemori/>
    </FooterMemori> 
  
   </>
  );
}

export default App;
