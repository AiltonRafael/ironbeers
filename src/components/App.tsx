import React from 'react';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from './Home';
import { AllBeersComponent } from './AllBeersComponent';
import { BeerDetailComponent } from './BeerDetailComponent';
import { RandomComponent } from './RandomBeerComponent';

const App: React.FC = () => {
  return (
    <Box>
      <Routes>
          <Route path='/' element={<HomeComponent />}/> 
          <Route path='/beers' element={<AllBeersComponent />}/>
          <Route path='/beers/:id' element={<BeerDetailComponent />}/>
          <Route path='/random-beer' element={<RandomComponent />}/>
      </Routes>
    </Box>
  );
}

export default App;
