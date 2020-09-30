import styled from 'styled-components'
import container from '../tools';

export const Borda = styled.div`
        border-bottom: 2px solid var(--color-red-light);
        width: 25%;
        display: flex;
        margin-bottom: 40px;
        ${container}
`;
export const Linha = styled.div`
border-bottom: 2px solid var(--color-red-light);
width: 25%;
display: flex;
margin-bottom: 40px;

`;

export const BlocoMemori = styled.div`
        display: flex;
        justify-content: space-between;
        
        width: 100%;
        height:50%;

`;

export const SeggBlocoMemori = styled.div`
        margin-top: 35px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height:50%;

`;

export const Bloco = styled.div`
        display: flex;
        position:absolute;
        
        margin-top:30px;
        width:100%;
        height:50%;
        top: 0px;
        
        
        
`;
export const PrimeiroBloc = styled.div`
        display :flex;       
        flex-direction: column;
        margin-left: 120px;
        width:35%;
       
        

`;
export const SegundBloc = styled.div`
        display :flex;
        flex-direction: column;
        margin-left: 100px;
        width:35%;
        
        

`;
