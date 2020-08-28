import styled from 'styled-components'


export const ListaMemorili = styled.li`
    display: inline-block;
    margin:15px;
    font-size: 20rem;
    list-style-type: none;
    color:  var(--dark-ball);
   
    transition: transform 60s linear;
    

    &:hover{
        border-left: 10px solid var(--dark-li)
        
    }
`;


export const ListaMemoriul = styled.ul`
   --space: 10rem;
  
   
   cursor:pointer;
   color: var(--color-red-light);
   font-size:  20rem;
   
   
   
   
  
    
    
   

`;