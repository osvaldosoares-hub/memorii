import React from 'react' ; 
import { HeaderHeadMemori, Wrapperheader, HeaderMemori, Wrapper } from './styles';
import { IconPhone, IconInsta, IconsTwitter, IconMemori } from '../icons';
import Logo from '../logo';
import { ListaMemoriul, ListaMemorili } from '../lista';
import LinkMemori from '../link';


function HeaderOpen (){
    return(
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
        <ListaMemorili as="a" href="/">Home</ListaMemorili>
        <ListaMemorili as="a" href="#servico">Serviços</ListaMemorili>
        <ListaMemorili>Nossos Processos</ListaMemorili>
        <ListaMemorili as="a" href="/home/Portifolio">Portifolio</ListaMemorili>
        </ListaMemoriul>
    </Wrapper>
    </HeaderMemori>
    </>
 );
}

export default HeaderOpen;
