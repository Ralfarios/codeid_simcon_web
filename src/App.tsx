import { Contact } from './pages';
import Navbar from './components/layout/Navbar';

import { HelmetProvider } from 'react-helmet-async'; //FOR SEO PURPOSE

const App = () => {
  return (
    <HelmetProvider>
      <div id="App">
        {/** LAYOUT */}
        <Navbar />

        {/** PAGES */}
        <Contact />

      </div>
    </HelmetProvider>
  );
};

export default App;
