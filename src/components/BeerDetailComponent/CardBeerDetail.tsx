import React from 'react';
import { 
    Box, 
    Grid,
    Text
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

interface ICardBeerDetail {
    name: any,
    image: any,
    tagline: any,
    attenuation_level: any
    description: any
    contributed_by: any
    first_brewed?: any
}

export const CardBeerDetail: React.FC<ICardBeerDetail> = (props) => {
    return (
        <Grid 
        h='100vh'
        templateRows='2fr 1fr'
        >
            <Box 
            mt='30px'
            w='100%'
            h='90%'
            d='flex'
            alignItems='center'
            justifyContent='center'
            > 
                <Image 
                w='100px'
                src={props.image} 
                alt='qualquercoisa'
                h='100%'
                objectFit='contain'
                />
            </Box>
            <Box
            h='70%'
            w='100%'
            d='flex'
            gridGap={3}
            alignItems='center'
            justifyContent='center'
            flexDir='column'
            textAlign='center'
            >   
                <Box
                w='50%'
                d='flex'
                justifyContent='space-between'
                alignItems='center'
                > 
                    <Text fontSize='20px'> 
                       <strong> {props.name} </strong> 
                    </Text>

                    <Text
                    color="grey"
                     > <b> {props.attenuation_level} </b> 
                    </Text>

                </Box>

                <Box
                w='50%'
                d='flex'
                justifyContent='space-between'
                alignItems='center'
                > 
                    <Text
                    color='grey'
                    fontSize='16px'
                    > 
                        <b> {props.tagline} </b> 
                    </Text>

                    <Text>
                        <b> {props.first_brewed} </b>
                    </Text>
                </Box>

                <Text> <i> {props.description} </i> </Text>

                <Text 
                color='grey'
                fontSize='12px'
                > 
                    <b> {props.contributed_by} </b> 
                </Text>
            </Box>
        </Grid>
    )
}
