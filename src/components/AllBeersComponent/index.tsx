import React from 'react';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import { CardAllBeersComponent } from './CardAllBeersComponent';
import { Grid, Box } from '@chakra-ui/layout';

export const AllBeersComponent: React.FC = () => {
    return (
        <Box>
            <NavbarComponent />
            <Grid templateRows='1fr'> 
                <CardAllBeersComponent />
                <CardAllBeersComponent />
                <CardAllBeersComponent />
            </Grid>
        </Box>
    )
}
