import React, { useState, useEffect } from 'react';
import { 
    Grid, 
    Box,
    Text
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import logo from '../../assets/images/beers.png';
import axios from 'axios'

const urlApi = 'https://ih-beers-api2.herokuapp.com/beers'

export const CardAllBeersComponent: React.FC = () => {
    const [ infoBeer, setInfoBeer ] = useState([]);
    const [ dataLoaded, setDataLoaded ] = useState(false);
    const [ pageLoaded, setPageLoaded ] = useState(true)
    useEffect(() => {
        axios.get(urlApi)
            .then((response) =>  {
                setInfoBeer({...response.data})
                console.log(infoBeer)
                setDataLoaded(true)
                setPageLoaded(false)
            })
            .catch((err) => err)
    }, [])

    return (
        <Box>
            {dataLoaded ? 
            <Box p='10px'>
                <Grid
                border='1px'
                borderColor='grey'
                boxShadow='0px 10px 10px 0px grey'
                templateColumns='1fr 1fr'
                justifyContent='center'
                alignItems='center'
                >
                    <Box
                    w='100%'
                    d='flex'
                    justifyContent='center'
                    alignContent='center'
                    p='10px'
                    > 
                        <Image 
                        src={infoBeer[0][`image_url`]} 
                        alt={infoBeer[0][`name`]} 
                        w='20px'
                        objectFit='cover'
                        />
                    </Box>
                    <Box
                    d='flex'
                    flexDir='column'
                    alignItems='center'
                    justifyContent='center'
                    >
                        <Text> {infoBeer[0][`name`]} </Text>
                        <Text> {infoBeer[0][`tagline`]} </Text>
                        <Text> Created by: {infoBeer[0][`contributed_by`]} </Text>
                    </Box>
                </Grid>
            </Box> : null}
        </Box> 
           
    )
}
