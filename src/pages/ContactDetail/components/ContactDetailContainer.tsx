import React from 'react';
import { useHistory } from 'react-router-dom';

interface ContactDetailContainerProps {
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  photo: string
};

const ContactDetailContainer: React.FC<ContactDetailContainerProps> = ({ id, firstName, lastName, age, photo }: ContactDetailContainerProps) => {
  const history = useHistory();
  const handleDelete = (id: string) => console.log('del' + id);
  return (
    <div className="contactDetailContainer">
      <div className="contactDetailAvaContainer">
        <img src="https://i.pinimg.com/originals/ea/b8/60/eab860a9c45b720fbc527bd304e12a68.jpg" alt="" className="contactDetailAva" />
      </div>
      <div className="contactDetailNameContainer">
        <h1 style={{ marginTop: 0, marginBottom: 4, fontWeight: 600, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Niko Bellic Von Eijavanbourough Sitohang</h1>
        <p style={{ marginTop: 0, marginBottom: 12, textAlign: 'center' }}>181 Years Old</p>
      </div>
      <div style={{ width: '212px', display: 'flex', justifyContent: 'space-evenly', alignSelf: 'center' }}>
        <button className="btnOutWhite" style={{ alignSelf: 'center', marginBottom: 48, paddingLeft: 14, borderRadius: '1.6rem', fontWeight: 600, letterSpacing: 3 }} onClick={() => history.push(`/contact/edit/id`)}>Edit</button>
        <button className="btnRed" style={{ alignSelf: 'center', marginBottom: 48, paddingLeft: 14, borderRadius: '1.6rem', fontWeight: 600, letterSpacing: 3 }} onClick={() => handleDelete('id')}>Delete</button>
      </div>
    </div>
  );
};

export default ContactDetailContainer;
