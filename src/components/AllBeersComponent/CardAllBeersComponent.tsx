import React, { useState, useEffect } from 'react';
import { 
    Grid, 
    Box,
    Text
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import logo from '../../assets/images/beers.png';
import axios from 'axios'


export const CardAllBeersComponent: React.FC = () => {
    const [infoBeer, setInfoBeer] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => setInfoBeer({...response.data}))
            .catch((err) => err)
    }, [])

    return (
        <Box>
            <Box p='10px'>
                <Grid
                border='1px'
                borderColor='grey'
                boxShadow='0px 10px 10px 0px grey'
                templateColumns='1fr 1fr'
                justifyContent='center'
                alignItems='center'
                >
                    <Box> 
                        <Image src={logo} alt='beer'/>
                    </Box>
                    <Box
                    d='flex'
                    flexDir='column'
                    alignItems='center'
                    justifyContent='center'
                    >
                        <Text> Buzz </Text>
                        <Text> A real Bitter Experience</Text>
                        <Text> Created by: Ailton Rafael </Text>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}
