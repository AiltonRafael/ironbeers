import React from 'react';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from './Home';
import { AllBeersComponent } from './AllBeersComponent';

const App: React.FC = () => {
  return (
    <Box>
      <Routes>
          <Route path='/' element={<HomeComponent />}/> 
          <Route path='/beers' element={<AllBeersComponent />}/>
      </Routes>
    </Box>
  );
}

export default App;
