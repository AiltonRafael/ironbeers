import React from 'react';
import { Box, Grid } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';

export const NavbarComponent: React.FC = () => {
    return (
        <Grid
        bg='200'
        w='100%'
        h='50px'
        >
            <Box
            d='flex'
            justifyContent='center'
            alignItems='center'
            >
                <Link to='/'>
                    <i style={{color: 'white'}} className="fas fa-home fa-2x"></i>
                </Link>
            </Box>
        </Grid>
    )
}
