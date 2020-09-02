import styled from  'styled-components';
import container from '../tools';
import Logo from '../logo';
import { ListaMemoriul } from '../lista';

export const Wrapperheader = styled.div`
    display:flex;
    align-items: center;

    ${container}

`;
export const HeaderHeadMemori = styled.header`
    background-color: var(--color-gray-haed);
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 13rem;    
`;
export const HeaderMemori = styled.header`
    background-color: var( --color-head);
    border-bottom: 2px solid red;
    height: 200px;
    
    

    @media(max-width: 750px){
        padding: 15rem  16rem;
    }
    
`;
export const Wrapper = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};

    @media(max-width: 800px){
        display: flex;
        justify-content: center;
        
        & > ${Logo}{
            height: 15px;
        }
        & > ${ListaMemoriul}{
            
            position: absolute;
            
            height:30px;
            top:160px;
            
            
        }
    }
    `;
