import React from 'react';
import { 
    Grid, 
    Box,
    Text
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Link } from 'react-router-dom';

interface ICardAllBeersCompoonentProps {
    image: string,
    tagline: string,
    name: string,
    contributed_by: string;
    link: string
}

export const CardAllBeersComponent = (props: ICardAllBeersCompoonentProps) => {

    return (
        <Link to={`/beers/${props.link}`}>
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
                        <Box
                        w='100%'
                        d='flex'
                        justifyContent='center'
                        alignContent='center'
                        p='10px'
                        > 
                            <Image 
                            src={props.image} 
                            alt={props.name} 
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
                            <Text textAlign='center'> 
                                <strong> {props.name} </strong> 
                            </Text>
                            <Text textAlign='center'> 
                                <strong> {props.tagline} </strong>  
                            </Text>
                            <Text textAlign='center'> 
                                <strong> Created by: </strong> {props.contributed_by?.split(' ', 2).join(' ')} 
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Box> 
        </Link>
           
    )
}
