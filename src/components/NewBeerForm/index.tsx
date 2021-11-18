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
    firstName?: string,
    lastName?: string
    tagline?: string,
    description?: string,
    first_brewed?: string,
    brewrs_tips?: string,
    attenuation_level: number,
    contributed_by: string
}

export const NewBeerFormComponent = () => {
    const [formData, setFromData] = useState<IformDataProps>({
        firstName: '',
        lastName: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewrs_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    useEffect(() => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            formData
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }, [])

    function handleSubmit(event: any){
        event.preventDefault()
        console.log(formData)
    }

    function handleValue(event: any){
        setFromData({...formData, [event.target.name]:event.target.value})
        console.log(event.target.name)
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
                    <Input name='firstName' placeholder="First name" onChange={handleValue}/>

                    <FormLabel>Last name</FormLabel>
                    <Input name='lastName' placeholder="Last name" onChange={handleValue}/>

                    <FormLabel>Tagline</FormLabel>
                    <Input name='tagline' placeholder="Tagline" onChange={handleValue}/>

                    <FormLabel>Description</FormLabel>
                    <Input name='description' placeholder="Description" onChange={handleValue}/>

                    <FormLabel>First Brewed</FormLabel>
                    <Input name='first_brewed' placeholder="First Brewed" onChange={handleValue}/>

                    <FormLabel>Brewers Tips</FormLabel>
                    <Input name='brewrs_tips' placeholder="Brewers Tips" onChange={handleValue}/>

                    <FormLabel>Attenuation Level</FormLabel>
                    <Input type='number' name='attenuation_level' placeholder="Attenuation Level" onChange={handleValue}/>

                    <FormLabel>Contributed By</FormLabel>
                    <Input name='contributed_by' placeholder="Contributed By" onChange={handleValue}/>

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
