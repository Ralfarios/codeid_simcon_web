import { useHistory } from 'react-router-dom';

import illust from '../../assets/images/illust_404.svg';
import MetaDecorator from '../../utils/helmet/MetaDecorator';

const E404 = () => {
  const history = useHistory();
  return (
    <div id="E404" style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <MetaDecorator title="Page Not Found | Simple Contact" desc="Form for Add Contact of Simple Contact web app." />

      <img src={illust} alt="404 page not found" style={{ width: '70%' }} />
      <h1 style={{ color: '#0d6efd', fontWeight: 300, fontSize: '2rem', textAlign: 'center', margin: '32px 0 0' }}>404 Page Not Found</h1>
      <p style={{ textAlign: 'center', margin: '16px 0 24px' }}>Your requested page is <strong>not found</strong>. <br/>Are you lost?</p>
      <button className="btnBlue" style={{ borderRadius: '0.8rem', fontWeight: 600, letterSpacing: 2 }} onClick={() => history.push('/')}>Back Home</button>
    </div>
  );
};

export default E404;
