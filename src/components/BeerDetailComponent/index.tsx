import React, { useEffect, useState } from 'react';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import { CardBeerDetail } from './CardBeerDetail';
import { useParams } from 'react-router';
import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner';
import { Box } from '@chakra-ui/layout';


export const BeerDetailComponent: React.FC = () => {
    let { id } = useParams()
    console.log(id)
    const urlApi = `https://ih-beers-api2.herokuapp.com/beers/${id}`

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
        <Box>
            <NavbarComponent />
            {dataLoaded ? 
            <CardBeerDetail 
                image={Object.values(infoBeer)[0]}
                name={Object.values(infoBeer)[2]}
                tagline={Object.values(infoBeer)[3]}
                first_brewed={Object.values(infoBeer)[4]}
                description={Object.values(infoBeer)[5]}
                attenuation_level={Object.values(infoBeer)[13]}
                contributed_by={Object.values(infoBeer)[20]}
            />    
        
            : <Spinner /> }
           
        </Box>
    )
}
