import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Layout from './Components/Layout';
import Products from './Components/Products';
import Customer from 'Components/Customer';
import Transactions from 'Components/Transactions';
import Geography from 'Components/Geography';
import Overview from 'Components/Overview';
import Daily from 'Components/Daily';
import Monthly from 'Components/Monthly';
import Breakdown from 'Components/Breakdown';
import Admin from 'Components/Admin';


function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
//  console.log('theme:', theme)
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>

            <Route element={<Layout></Layout>} >
              
            <Route path='/' element={<Navigate to="/dashboard" replace />} ></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
            <Route path='/products' element={<Products></Products>} ></Route>
            <Route path='/customers' element={<Customer></Customer>} ></Route>
            <Route path='/transactions' element={<Transactions></Transactions>} ></Route>
            <Route path='/geography' element={<Geography></Geography>} ></Route>
            <Route path='/overview' element={<Overview></Overview>} ></Route>
            <Route path='/daily' element={<Daily></Daily>} ></Route>
            <Route path='/monthly' element={<Monthly></Monthly>} ></Route>
            <Route path='/breakdown' element={<Breakdown></Breakdown>} ></Route>
            <Route path='/admin' element={<Admin></Admin>} ></Route>
           
            </Route>
              

          </Routes>

        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
