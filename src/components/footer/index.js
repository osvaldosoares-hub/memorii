import styled from 'styled-components'
import LogoMemori from '../logomemori';

const FooterMemori = styled.footer`
    display :flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black);
    font-size: 12rem;
    color: #fff;
    padding: 10rem 0;

    & > ${LogoMemori}{
        margin-bottom: 20rem;

    }
`;
export default FooterMemori