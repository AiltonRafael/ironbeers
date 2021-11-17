import React, { useState, useEffect } from 'react';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import { CardAllBeersComponent } from './CardAllBeersComponent';
import { Grid, Box } from '@chakra-ui/layout';
import axios from 'axios'

const urlApi = 'https://ih-beers-api2.herokuapp.com/beers'

export const AllBeersComponent: React.FC = () => {
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
            <NavbarComponent />
            <Grid templateRows='1fr'> 
                <CardAllBeersComponent />
                <CardAllBeersComponent />
                <CardAllBeersComponent />
            </Grid>
        </Box>
    )
}
