import styled from'styled-components';
import Mapa   from '../../assets/img/mapa.png';
import Insta from '../../assets/img/insta.png';
import Phone from '../../assets/img/phone.png';
import Twitter from '../../assets/img/twitter.png'
import Arrows from '../../assets/img/setas.png'
import Arrwoss from '../../assets/img/esquerda.png'
import Perfil from '../../assets/img/perfil.png'

export const IconMemori = styled.img.attrs({src: Mapa , alt: "mapa"})`
    width: 20px;
    margin-right: 5px;
    &:hover{
               transform: scale(1.1)
           }

`;

export const IconInsta = styled.img.attrs({src:Insta , atl: "insta"})`
    width: 25px;
    margin-left: 100px;
    &:hover{
               transform: scale(1.1)
           }

`;
export const IconPhone = styled.img.attrs({src: Phone, alt: "telefone"})`
    width: 20px;
    margin-left: 80px; 
    &:hover{
               transform: scale(1.1)
           }
`;


export const IconsTwitter = styled.img.attrs({src: Twitter , alt: "twitter"})`
           width: 25px; 
           &:hover{
               transform: scale(1.1)
           }    
`;
export const IconsArrows = styled.img.attrs({src: Arrows, alt:"setas"})`
            margin-left: auto;
            height: 26px;
            
            



`;
export const IconsArrowss = styled.img.attrs({ src:Arrwoss , alt:"seta esquerda"})`
            margin-right: auto;
            height: 26px;
           

`;
export const IconPerfil = styled.img.attrs({src: Perfil, atl: "pefil"})`
            border: 5px solid var(--color-red-light);
            padding: 5px;
            margin-top: 5px;
            border-radius: 50px;
            right: 45%;
            position: absolute;
            


`;