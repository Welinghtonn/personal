import React from 'react';
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { TextInicialComponent } from '../styles/textInicialStyled';

const TextInicial = () => {
    return (
        <TextInicialComponent>
            <MdOutlineSportsGymnastics className='gym' />
            <h2>Personal ideia</h2>
        </TextInicialComponent>

    );
}

export default TextInicial;
