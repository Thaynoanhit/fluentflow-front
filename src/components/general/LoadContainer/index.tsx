import React from 'react';

import {
    Container,
    Spinner
} from './styles';

export function LoadContainer(){
    return(
        <Container>
            <Spinner/>
        </Container>
    );
}