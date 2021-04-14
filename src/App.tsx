
import { HelmetProvider } from 'react-helmet-async'; //FOR SEO PURPOSE
import { useLocation } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import IndexRouter from './routers';

import './styles/app.css';

const App = () => {
  const { pathname }: any = useLocation();
  const header: any = pathname?.split('/')[2];
  return (
    <HelmetProvider>
      <div id="App" style={!isNaN(Number(header))
        ? { paddingBottom: 0 } : {}}>
        {/** LAYOUT */}
        <Navbar />

        {/** PAGES */}
        <IndexRouter />

      </div>
    </HelmetProvider>
  );
};

export default App;
