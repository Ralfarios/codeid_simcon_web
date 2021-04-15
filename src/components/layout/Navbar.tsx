import { useHistory, useLocation } from 'react-router-dom';
import { FiChevronLeft, FiPlus } from 'react-icons/fi';
import { path } from '../../routers/path';

import '../../styles/components/navbar.css';

const Navbar = () => {
  const { pathname }: any = useLocation();
  const history: any = useHistory();
  const header: any = pathname?.split('/')[2];
  const NavbarTitle: Function = () => {
    switch (header) {
      case undefined:
        return pathname === '/' ? 'CONTACT' : '';
      case 'add':
        return 'ADD CONTACT';
      case 'edit':
        return 'EDIT CONTACT';
      default:
        return '';
    };
  };

  return (
    <div id="Navbar" className={!isNaN(Number(header))
      ? "navbarDetail"
      : pathname === '/404'
        ? "navbarHide"
        : "cusNavbar"}>

      <div style={pathname === path.home ? { padding: '28px  24px', visibility: 'hidden' } : { padding: '28px  24px', color: 'white' }} onClick={() => history.push(path.home)}>
        <div className="navbarActionBtn">
          <FiChevronLeft size={30} />
        </div>
      </div>
      <h1 className="navbarTitle" >{NavbarTitle()}</h1>
      <div style={pathname === path.home ? { padding: '28px  24px', color: 'white' } : { padding: '28px  24px', visibility: 'hidden' }} onClick={() => history.push(path.add)}>
        <div className="navbarActionBtn">
          <FiPlus size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
