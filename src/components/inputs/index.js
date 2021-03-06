import styled from 'styled-components'


export const Casas = styled.label`
    margin: 15px 0;
    display:block;
    text-transform: uppercase;
    font-size: 16rem;
`;
export const Nome = styled.input`
    border: 1px solid var(--input-color);
    height: 5px;
    width:400px;
    border-radius: 30px;
    display: block;
    padding: 20px 25px;
    text-transform: uppercase;
    outline: 0;
    box-sizing: border-box;
    margin-bottom: 20px;
`;
export const EmailContato = styled.input`
    border: 1px solid var(--input-color);
    height: 5px;
    width:450px;
    border-radius: 30px;
    display: block;
    padding: 20px 25px;
    text-transform: uppercase;
    outline: 0;
    box-sizing: border-box;
    margin-bottom: 20px;
`;
export const TelefoneContato = styled.input`
    border: 1px solid var(--input-color);
    height: 5px;
    width:400px;
    border-radius: 30px;
    display: block;
    padding: 20px 25px;
    text-transform: uppercase;
    outline: 0;
    box-sizing: border-box;
    margin-bottom: 20px;
`;
export const MensagemContato = styled.textarea`
    border: 1px solid var(--input-color);
    height: 5px;
    width:450px;
    border-radius: 30px;
    display: block;
    padding: 20px 25px;
    text-transform: uppercase;
    outline: 0;
    box-sizing: border-box;
    margin-bottom: 20px;

    height: 100px;
	

`;
export const EnviarMensagem = styled.input`
    border:1px solid var(--input-color);
    display: block;
    border-radius: 30px;
    background-color: transparent;
    width: 150px;
    
    font-family: 'Roboto', sans-serif;
    padding: 15px;
    outline: 0;
    text-align: center;
    &:hover{
    
     
        background-color:var(--color-blue-light);
    }
`;