import React from 'react';
import { 
    Grid, 
    Box,
    Image,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

interface ICardHomeComponent {
    image: string,
    title: string,
    description: string
    link: string
}

export const CardHomeComponent: React.FC<ICardHomeComponent> = (props) => {
    return (
        <Link to={props.link}>
            <Box>
                <Grid
                templatRows='4fr 1fr'
                >
                    <Box boxShadow='0px 5px 10px 0px grey'>
                        <Image 
                        w='100%'
                        src={props.image} 
                        alt='All Beers'
                        />
                    </Box>
                    <Box p='10px'>
                        <Text> 
                            <strong> {props.title} </strong>
                        </Text>
                        <Text> 
                            {props.description}
                        </Text>
                    </Box>

                </Grid>
            </Box>
        </Link>
    )
}
