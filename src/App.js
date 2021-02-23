import React from 'react';
import './style/settings/style.css'
import './style/reset.css'
import HeaderOpen from './components/HeaderOpen/index';
import { IconsArrows, IconsArrowss, IconComputador, IconSistema, IconApp,IconDownArrows, IconComprar, IconDinheiro, IconEngrenagem, IconBatePapo, IconProposta, IconInicio, IconCodigo, IconSuporte, IconLocalizacao, IconPhoni, IconEmail,IconRelogio, IconDownArrow } from './components/icons';
import { BannerMemori, BlocoTituloMemori, SegBannerMemori, SitesMemori, SitemasMemori,AppBlocoMemori, EcomerciBlocoMemori, TerBannerMemori, PreçoAcessivel, QuartoBannerMemori, QuintoBannerMemori   } from './components/banner';
import    TitleMemori    from './components/title';
import { TagMemori, SegTagMemori, Titulo, Paragrafo, SegParagrafo, TituloPreco, Tituloo, Paragrafoo,Paragrafooo, Titulooo } from './components/tag';
import { Borda, BlocoMemori, SeggBlocoMemori, Bloco,PrimeiroBloc, SegundBloc, BlocoDois, PriBloc, SegBloc,TerBloc, InformacoesMemori, Localizacao, Phone, Email,Horario, BlocoTitulo, Bordaa, Bordaaa, ContatoMemori, ContatoBorda,InfoBorda} from './components/divs';
import FooterMemori from './components/footer';
import LogoMemori from './components/logomemori';
import {IconPhonee} from './components/icons';
import { EmailContato, EnviarMensagem, MensagemContato, Nome,TelefoneContato } from './components/inputs';


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
    <BlocoDois>
    <PriBloc>
    <IconInicio/>
    <Tituloo>Início do projeto</Tituloo>
    <Paragrafoo>Uma equipe de desenvolvedores com um gerente de projetos será montada para a realização do projeto.</Paragrafoo>
    </PriBloc>
    <SegBloc>
    <IconCodigo/>
    <Tituloo>Desenvolvimento</Tituloo>
    <Paragrafoo>Durante o processo de construção do projeto você terá comunicação com a equipe responsável. À medida que o projeto for tendo as etapas de desenvolvimento sendo concluídas você será informado, além de que ocorrerão reuniões para apresentar como o projeto se encontra.</Paragrafoo>
    </SegBloc>
    <TerBloc>
    <IconSuporte/>
    <Tituloo>Suporte</Tituloo>
    <Paragrafoo>Após a entrega do projeto, você terá direito há um mês gratuito de suporte, que funciona como uma garantia. Esse período irá servir para auxiliar em casos de problemas de uso, por exemplo.</Paragrafoo>
    </TerBloc>

    </BlocoDois>
  </QuartoBannerMemori>

  
    <QuintoBannerMemori>

    <InformacoesMemori>
    <BlocoTitulo>
    <Titulooo id="Informacoes">Informações para contato</Titulooo>
    <Bordaa/>
    <IconDownArrow/>
    <Bordaaa/>
    </BlocoTitulo>

    <Localizacao>
    <IconLocalizacao/>
    <Paragrafooo>Av. Tenente Raimundo Rocha, S/N, UFCA, Juazeiro do Norte</Paragrafooo>
    </Localizacao>
    <Phone>
    <IconPhoni/>
    <Paragrafooo> (88)99764-4360</Paragrafooo>
    </Phone>
    <Email>
    <IconEmail/>
    <Paragrafooo>Memori.dev@gmail.com</Paragrafooo>

    </Email>
    <Horario>
    <IconRelogio/>
    <Paragrafooo>Seg - Sex (8:00 - 17:00)</Paragrafooo>
    </Horario>
    
    </InformacoesMemori>
    <ContatoMemori>
    <BlocoTitulo>
    <Titulooo>Envie-nos uma mensagem</Titulooo>
    <InfoBorda/>
    <IconDownArrows/>
    <ContatoBorda/>
    
    </BlocoTitulo>
    
    <Nome defaultValue="Nome" type="text"/>
    <EmailContato defaultValue="Email" type="email"/>
    <TelefoneContato Value="(88)" type="number"/>
    <MensagemContato defaultValue="mensagem" type="text"/>
    <EnviarMensagem type="submit" value="enviar mensagem"/>
    </ContatoMemori> 
    </QuintoBannerMemori>

  <FooterMemori>
    <LogoMemori/>
    </FooterMemori> 
  
   </>
  );
}

export default App;
