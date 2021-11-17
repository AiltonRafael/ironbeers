import React from 'react';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from './Home';

const App: React.FC = () => {
  return (
    <Box>
      <Routes>
          <Route path='/' element={<HomeComponent />}/> 
      </Routes>
    </Box>
  );
}

export default App;
