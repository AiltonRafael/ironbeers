import React from 'react';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import { CardAllBeersComponent } from './CardAllBeersComponent';
import { Grid } from '@chakra-ui/layout';

export const AllBeersComponent: React.FC = () => {
    return (
        <div>
            <NavbarComponent />
            <Grid> 
                <CardAllBeersComponent />
            </Grid>
        </div>
    )
}
