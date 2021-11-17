import React, { useState, useEffect } from 'react';
import { CardBeerDetail } from '../BeerDetailComponent/CardBeerDetail';
import { NavbarComponent } from '../Navbar/NavbarComponent';

export const RandomComponent = () => {
    return (
        <div>
            <NavbarComponent />
            <CardBeerDetail 
             image='oi'
             name='oi'
             tagline='oi'
             first_brewed='oi'
             description='oi'
             attenuation_level='oi'
             contributed_by='oi'
            />
          
        </div>
    )
}
