import React, { useState, useEffect } from 'react';
import { CardBeerDetail } from '../BeerDetailComponent/CardBeerDetail';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner';

export const RandomComponent: React.FC = () => {
    const [dataInfo, setDataInfo] = useState<any>({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => setDataInfo(response.data))
            .catch((err) => err)
            setLoading(true)
    }, [])

    return (
        <div>
            <NavbarComponent />
            { loading ? 
               <CardBeerDetail 
               image={dataInfo.image_url}
               name={dataInfo.name}
               tagline={dataInfo.tagline}
               first_brewed={dataInfo.first_brewed}
               description={dataInfo.description}
               attenuation_level={dataInfo.attenuation_level}
               contributed_by={dataInfo.contributed_by}
              />
            : <Spinner size='xl'/>}          
        </div>
    )
}
