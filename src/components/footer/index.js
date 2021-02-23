import styled from 'styled-components'
import Logo from '../logo';

const FooterMemori = styled.footer`
    display :flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black);
    font-size: 12rem;
    color: #fff;
    padding: 10rem 0;

    & > ${Logo}{
        margin-bottom: 20rem;

    }
`;
export default FooterMemori