import React from 'react';
import { Box, Grid } from '@chakra-ui/react'
import { CardHomeComponent } from './CardHomeComponent';
import allBeersImg from '../../assets/images/beers.png';
import randomBeerImg from '../../assets/images/random-beer.png'
import newBeerImg from '../../assets/images/new-beer.png'


export const HomeComponent: React.FC = () => {
    return (
        <Box h='100vh'>
            <Grid templateRows='1fr 1fr 1fr'>
                <CardHomeComponent 
                image={allBeersImg}
                title='All Beers'
                link='/beers'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sed interdum dui. Nam sit amet massa libero. 
                    Aenean semper vel elit vel varius.'
                />
                 <CardHomeComponent 
                image={randomBeerImg}
                title='Random Beer'
                link='/random-beer'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sed interdum dui. Nam sit amet massa libero. 
                    Aenean semper vel elit vel varius.'
                />
                
                <CardHomeComponent 
                image={newBeerImg}
                title='Bew Beer'
                link='/new-beer'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sed interdum dui. Nam sit amet massa libero. 
                    Aenean semper vel elit vel varius.'
                />
       
            </Grid>
        </Box>
    )
}
