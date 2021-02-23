import styled from 'styled-components'


import container from '../tools';

export const Borda = styled.div`
        border-bottom: 2px solid var(--color-red-light);
        width: 30%;
        display: flex;
        margin-bottom: 40px;
        ${container}
        @media(max-width: 800px){
                display:flex;
                width:300px;
               
        }
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
        @media (max-width: 800px){
        display:flex;
        flex-direction:column;
        margin-left:30%;
        margin-bottom : 180px;

    }

`;

export const SeggBlocoMemori = styled.div`
        margin-top: 35px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height:50%;
        @media (max-width: 800px){
        display:flex;
        flex-direction:column;
        margin-left:30%;
        
        }

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
        margin-left: 190px;
        width:30%;
       
        

`;
export const SegundBloc = styled.div`
        display :flex;
        flex-direction: column;
        margin-left: 100px;
        width:30%;
        
        

`;
export const BlocoDois = styled.div`
        display: flex;
        position:absolute;
        
        margin-top:30px;
        width:100%;
        height:50%;
        top: 280px;
        
        
        
`;
export const PriBloc = styled.div`
        display:flex;
        flex-direction: column;
        margin-left: 20px;
        width:30%;
`;
export const SegBloc = styled.div`
        display:flex;
        flex-direction: column;
        margin-left: 40px;
        width:30%;
`;
export const TerBloc = styled.div`
        display:flex;
        flex-direction: column;
        margin-left: 40px;
        width:30%;
`;
export const InformacoesMemori = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 40px;


`;
export const Localizacao = styled.div`
        display: flex;
        align-items:center;
        width:350px;
        margin-bottom:20px;

`;
export const Phone = styled.div`
        display: flex;
        align-items:center;
        width:350px;
        margin-bottom:20px;

`;
export const Email = styled.div`
        display: flex;
        align-items:center;
        width:350px;
        margin-bottom:20px;

`;
export const Horario = styled.div`
        display: flex;
        align-items:center;
        width:350px;
        margin-bottom:20px;

`;
export const BlocoTitulo = styled.div`
        display: flex;
        margin-bottom: 45px;
        position: relative;
`;

export const Bordaa = styled.div`
        border-bottom: 1px solid var(--color-red-light);
        width: 43%;
        position:absolute;
        top: 35px;
        margin-left:15px;
        
`;
export const Bordaaa = styled.div`
        border-bottom: 1px solid var(--color-red-light);
        width: 43%;
        position:absolute;
        top: 35px;
        left:200px;
`;
export const ContatoMemori = styled.div`
        display: flex;
        flex-direction: column;
`;
export const ContatoBorda = styled.div`
        border-bottom: 1px solid var(--color-red-light);
        width: 43%;
        position:absolute;
        top: 35px;
        left:225px;
`;
export const InfoBorda = styled.div`
        border-bottom: 1px solid var(--color-red-light);
        width: 43%;
        position:absolute;
        top: 35px;
        
        
`;
