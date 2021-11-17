import React from 'react';
import { 
    Grid, 
    Box,
    Text
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

interface ICardAllBeersCompoonentProps {
    image?: string,
    tagline?: string,
    name?: string,
    contributed_by?: string
}

export const CardAllBeersComponent: React.FC<ICardAllBeersCompoonentProps> = (props) => {

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
                        <Text> {props.name} </Text>
                        <Text> {props.tagline} </Text>
                        <Text> Created by: {props.contributed_by} </Text>
                    </Box>
                </Grid>
            </Box>
        </Box> 
           
    )
}
