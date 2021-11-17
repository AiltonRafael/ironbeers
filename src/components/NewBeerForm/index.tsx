import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavbarComponent } from '../Navbar/NavbarComponent';
import { 
    FormLabel, 
    FormControl 
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

interface IformDataProps{
    name?: object,
    tagline?: string,
    description?: string,
    first_brewed?: string,
    brewrs_tips?: string,
    attenuation_level: number,
    contributed_by: string
}

export const NewBeerFormComponent = () => {
    const [formData, setFromData] = useState<IformDataProps>({
        name: {
            firstName: '',
            lastName: ''
        },
        tagline: '',
        description: '',
        first_brewed: '',
        brewrs_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    useEffect(() => {

    }, [])

    function handleSubmit(event: any){
        event.preventDefault()
    }

    return (
        <Box
        d='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        >
            <NavbarComponent />
            <Box
            h='100vh'
            d='flex' 
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            > 
                <FormControl 
                p='30px'
                id="first-name"
                isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="First name" />

                    <FormLabel>Tagline</FormLabel>
                    <Input placeholder="Tagline" />

                    <FormLabel>Description</FormLabel>
                    <Input placeholder="Description" />

                    <FormLabel>First Brewed</FormLabel>
                    <Input placeholder="First Brewed" />

                    <FormLabel>Brewers Tips</FormLabel>
                    <Input placeholder="Brewers Tips" />

                    <FormLabel>Attenuation Level</FormLabel>
                    <Input placeholder="Attenuation Level" />

                    <FormLabel>Contributed By</FormLabel>
                    <Input placeholder="Contributed By" />

                    <Box
                    d='flex'
                    justifyContent='center'
                    mt='20px'
                    >
                        <Button
                        bg='200'
                        color='100'
                        w='100%'
                        onClick={handleSubmit}
                        > Submit </Button>
                    </Box>
                </FormControl>   
            </Box>     
        </Box>
    )
}
