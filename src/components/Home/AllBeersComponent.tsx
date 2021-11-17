import React from 'react';
import { 
    Grid, 
    Box,
    Image,
    Text
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'

interface IAllBeersComponent {
    image: string,
    title: string,
    description: string
    link: string
}

export const AllBeersComponent: React.FC<IAllBeersComponent> = (props) => {
    return (
        <Link to={props.link}>
            <Box>
                <Grid
                templatRows='4fr 1fr'
                >
                    <Box boxShadow='0px 5px 10px 0px grey'>
                        <Image src={props.image} alt='All Beers' />
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
