import styled from 'styled-components';
import container  from '../tools';
import TitleMemori from '../title';
import { TagMemori } from '../tag';


export const Text = styled.div`
    padding-top: 10rem;
    max-width: 45%;
    ${TagMemori}{
        margin-bottom: 40rem;
    }
    ${TitleMemori}{
        margin-bottom: 20rem;
    }
`;
export const BannerMemori = styled.section`
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height:70vh;
        
        height: 100vh;
        
       ${container}

`;
export const SegBannerMemori = styled.section`
        
        max-height:70vh;
        height:100vh;
        margin-bottom: 150px;
        
        ${container}
`;
export const SitesMemori = styled.div`
    border-radius: 5px;
    border:2px solid var(--color-red-light);
    width: 45%;
    height: 100%;
    position: relative;
    margin-left: 10px;
    

`;
export const SitemasMemori = styled.div`
    border-radius: 5px;
    border:2px solid var(--color-red-light);
    width: 45%;
    height: 100%;
    position: relative;
    margin-left: 10px;
    

`;
export const AppBlocoMemori = styled.div`
    border-radius: 5px;
    border:2px solid var(--color-red-light);
    width: 45%;
    height: 100%;
    position: relative;
    margin-left: 10px;
    

`;
export const EcomerciBlocoMemori = styled.div`
    border-radius: 5px;
    border:2px solid var(--color-red-light);
    width: 45%;
    height: 100%;
    position: relative;
    margin-left: 10px;
    

`;


export const BlocoTituloMemori = styled.div`
    display: flex;
    
    
`;


export const TerBannerMemori = styled.section`
        background: var(--background-ter);
        display:flex;
        align-items:center;
        max-height:20vh;
        height: 100vh;
        margin-bottom: 50px;
        ${container}
`;

export const PreçoAcessivel = styled.div`
        display: flex;
        align-items: center;
        position: relative;
        bottom:30px;
        width: 30%;
        margin-left:10px;
`;
export const QuartoBannerMemori = styled.section`
        background:var(--background-quarto);
        display:flex;
        align-items:center;
        position:relative;
        max-height:100vh;
        height: 100vh;
        margin-bottom: 50px;
        ${container}
`;