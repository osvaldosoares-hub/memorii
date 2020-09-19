import styled from 'styled-components'


export const ListaMemorili = styled.li`
    display: inline-block;
    position:relative;
    margin:15px;
    font-size: 20rem;
    color:  var(--dark-ball);
    text-decoration:none;
    
    transition: transform 60s linear;
    overflow: hidden;

    &::before{
        content:'';
        position: absolute;
        opacity:1;
        width: 100%;
        height:100%;
        background: var(--color-words);
        transform: translateX(-100%);
        transition: transform 200ms linear;
    }
    &::after{
        font-size: 20rem;
        
        content: '${({children})=> children}';
        position: absolute;
        right:0px;

    }
    &:hover::before{

        transform: translateX(0)
    }
    
`;


export const ListaMemoriul = styled.ul`
   --space: 10rem;
   cursor:pointer;
   color: var(--color-red-light);

`;