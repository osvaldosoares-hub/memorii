import React from ' react';
import { ThumbStyle, Icons } from './styles';
import { Paragrafo } from '../tag';

function Thumb({ src, alt, }){
    return(
        <ThumbStyle>
            <Icons src={src} alt={alt}/>
            <Paragrafo>dsasdsadsa</Paragrafo>
        </ThumbStyle>

    );
}
export default Thumb;