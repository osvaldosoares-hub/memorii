import React from ' react';
import Thumb from '../thumb';
import PropTypes from 'prop-types';
function Carosel({textos}){
    const {src, alt} = textos;
    return
    <Thumb src={src} alt ={alt} />
    

    };
    const typeTexto = {
        icons: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        
    };
    Carosel.prototype = {
        textos: PropTypes.arrayOf(PropTypes.shape(typeTexto)).isRiquered,
    };
    export default Carosel;


