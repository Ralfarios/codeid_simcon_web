import { useHistory } from 'react-router-dom';

const ContactCard = () => {
  const history = useHistory();
  return (
    <div id="ContactCard" className="contactCard" onClick={() => history.push('/contact/123')}>
      <div className="contactAvaContainer">
        <img src="https://i.pinimg.com/originals/ea/b8/60/eab860a9c45b720fbc527bd304e12a68.jpg" alt="" className="contactAva" />
      </div>
      <div className="contactInfoContainer">
        <h3 style={{ margin: 0, marginBottom: 4 }}>Mr Pussycat</h3>
        <p style={{ margin: 0, color: '#888' }}>121 Years Old</p>
      </div>
    </div>
  );
};

export default ContactCard;
