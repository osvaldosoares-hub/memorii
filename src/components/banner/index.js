import styled from 'styled-components';
import container from '../tools';
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
