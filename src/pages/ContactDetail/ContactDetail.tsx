import './styles/contactDetail.css';

const ContactDetail = () => {
  return (
    <div id="ContactDetail">
      <div className="contactDetailContainer">
        <div className="contactDetailAvaContainer">
          <img src="https://i.pinimg.com/originals/ea/b8/60/eab860a9c45b720fbc527bd304e12a68.jpg" alt="" className="contactDetailAva" />
        </div>
        <div className="contactDetailNameContainer">
          <h1 style={{ marginTop: 0, marginBottom: 4, fontWeight: 600, textAlign: 'center' }}>Niko Bellic</h1>
          <p style={{ marginTop: 0, marginBottom: 12, textAlign: 'center' }}>181 Years Old</p>
        </div>
        <button className="btnOutWhite" style={{ alignSelf: 'center', marginBottom: 48, paddingLeft: 14, borderRadius: '1.6rem', fontWeight: 600, letterSpacing: 3 }}>Edit</button>
      </div>
    </div>
  );
};

export default ContactDetail;
