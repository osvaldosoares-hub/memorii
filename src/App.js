import React from 'react';
import './style/settings/style.css'
import './style/reset.css'
import HeaderOpen from './components/HeaderOpen/index';
import { IconsArrows, IconsArrowss, IconComputador, IconSistema, IconApp, IconComprar, IconDinheiro, IconEngrenagem, IconBatePapo, IconProposta } from './components/icons';
import { BannerMemori, BlocoTituloMemori, SegBannerMemori, SitesMemori, SitemasMemori,AppBlocoMemori, EcomerciBlocoMemori, TerBannerMemori, PreçoAcessivel, QuartoBannerMemori   } from './components/banner';
import    TitleMemori    from './components/title';
import { TagMemori, SegTagMemori, Titulo, Paragrafo, SegParagrafo, TituloPreco, Tituloo, Paragrafoo } from './components/tag';
import { Borda, BlocoMemori, SeggBlocoMemori, Bloco,PrimeiroBloc, SegundBloc} from './components/divs';
import FooterMemori from './components/footer';
import LogoMemori from './components/logomemori';
import {IconPhonee} from './components/icons';


function App() {
  return (
   <>
  <HeaderOpen/>

  <BannerMemori>
  <TitleMemori>Quem somos nos</TitleMemori>
  <TagMemori>A Memori– Empresa Júnior de Matematica Computacional e Ciências da Computação é uma iniciativa empreendedora, composta por estudantes do curso de MC e CC da Universidade Federal do Cariri (UFCA), Campus Juazeiro do Norte. A Memori busca, através de sua equipe, integrar os conhecimentos, trabalhando com desenvolvimento de soluções web, seja sites, sistemas e/ou aplicativos. Buscamos a solução personalizada ao seu negócio e aos seus problemas, visando sempre trazer mais resultado!!</TagMemori>
  
  </BannerMemori>
  
  <BlocoTituloMemori>
  <Borda>
  <IconsArrows/>
  <SegTagMemori>Porque nos Contratar</SegTagMemori>
  <IconsArrowss/>
  </Borda>
  </BlocoTituloMemori>
  
  <TerBannerMemori>
  <PreçoAcessivel>
  <IconDinheiro/>
  <TituloPreco>Preço acessivel</TituloPreco>
  <SegParagrafo>Oferecemos serviços de qualidade a um baixo custo, tornando as nossas tecnologias acessiveis para micro e pequena empressa. </SegParagrafo>
  </PreçoAcessivel>
  <PreçoAcessivel>
  <IconEngrenagem/>
  <TituloPreco>Desenvolvimento Agíl</TituloPreco>
  <SegParagrafo>uma equipe de desenvolvedores dedicadas ao projeto com uso de metodologias ageis para garantir o projeto dentro do prazo. </SegParagrafo>
  </PreçoAcessivel>
  <PreçoAcessivel>
  <IconBatePapo/>
  <TituloPreco>Atendimento Pesonalizado</TituloPreco>
  <SegParagrafo>Tenha o acompanhamento do projeto durante toda a fase de desenvolvimento</SegParagrafo>
  </PreçoAcessivel>

  </TerBannerMemori>
    
  <BlocoTituloMemori>
  <Borda>
  <IconsArrows/>
  <SegTagMemori id="servico">Serviços</SegTagMemori>
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
  <BlocoTituloMemori>
  <Borda>
  <IconsArrows/>
  <SegTagMemori id="nosso-processo">Nosso processo</SegTagMemori>
  <IconsArrowss/>
  </Borda>
  </BlocoTituloMemori>

  <QuartoBannerMemori>
    <Bloco>
    <PrimeiroBloc>
    <IconPhonee/>
    <Tituloo> Briefing</Tituloo>
    <Paragrafoo>Realizamos uma reunião de briefing para conhecer o seu negócio e o problema ou ideia. A partir disso, iremos compreender melhor a situação e poder estruturar da melhor forma uma solução para você.</Paragrafoo>
    </PrimeiroBloc> 
    <SegundBloc>
    <IconProposta/>
    <Tituloo>Proposta</Tituloo>
    <Paragrafoo>Após o briefing será montada a proposta da solução, tendo a descrição do projeto com os prazos e o orçamento. Tudo isso é apresentado numa reunião para posteriormente ser efetuado o contrato.</Paragrafoo>
    </SegundBloc>
    </Bloco>
  </QuartoBannerMemori>
  <FooterMemori>
    <LogoMemori/>
    </FooterMemori> 
  
   </>
  );
}

export default App;
