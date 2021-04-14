import { Link } from 'react-router-dom';

const ContactCard = () => {
  return (
    <Link to='/contact/123' style={{ textDecoration: 'none', color: 'inherit' }}>
      <div id="ContactCard" className="contactCard">
        <div className="contactAvaContainer">
          <img src="https://i.pinimg.com/originals/ea/b8/60/eab860a9c45b720fbc527bd304e12a68.jpg" alt="" className="contactAva" />
        </div>
        <div className="contactInfoContainer">
          <h3 style={{ margin: 0, marginBottom: 4 }}>Mr Pussycat</h3>
          <p style={{ margin: 0, color: '#888' }}>121 Years Old</p>
        </div>
      </div>
    </Link>
  );
};

export default ContactCard;
