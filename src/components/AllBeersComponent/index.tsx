import React, { useState, useEffect } from 'react';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import { CardAllBeersComponent } from './CardAllBeersComponent';
import { Grid,  Box } from '@chakra-ui/layout';
import axios from 'axios'
import { Spinner } from '@chakra-ui/spinner';

export const AllBeersComponent: React.FC = () => {
    const urlApi = 'https://ih-beers-api2.herokuapp.com/beers'

    const [ infoBeer, setInfoBeer ] = useState({});
    const [ dataLoaded, setDataLoaded ] = useState(false);
    useEffect(() => {
        axios.get(urlApi)
            .then((response) =>  {
                setInfoBeer({...response.data})
                setDataLoaded(true)
            })
            .catch((err) => err)
    }, [])

    return (
        <Box
        d={ dataLoaded ? 'inline' : 'flex'}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        >
            <NavbarComponent />
            <Grid templateRows='1fr'>
                {dataLoaded ? 
                   Object.values(infoBeer).map((currentData: any) => {
                    return (
                        <CardAllBeersComponent
                        key={currentData['oi']}
                        image={currentData['image_url']}
                        name={currentData['name']}
                        tagline={currentData['tagline']}
                        contributed_by={currentData['contributed_by']}
                        link={currentData['_id']}
                    />
                    )
                })
                : <Box
                d='flex'
                justifyContent='center'
                alignItems='center'
                > 
                    <Spinner size='xl'/> 
                </Box>}
            </Grid>
        </Box>
    )
}
