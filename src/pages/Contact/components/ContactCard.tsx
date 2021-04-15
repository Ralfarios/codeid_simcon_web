import React from 'react';
import { useHistory } from 'react-router-dom';

const placeHolder: string = 'https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg';

interface ContactCardProps {
  id: string,
  age: number,
  firstName: string,
  lastName: string,
  photo: string
};

const ContactCard: React.FC<ContactCardProps> = ({ id, age, firstName, lastName, photo }: ContactCardProps) => {
  const history = useHistory();
  return (
    <div id="ContactCard" className="contactCard" onClick={() => history.push(`/contact/${id}`)}>
      <div className="contactAvaContainer">
        <img src={photo === 'N/A' ? placeHolder : photo} alt="" className="contactAva" />
      </div>
      <div className="contactInfoContainer">
        <h3 style={{ margin: 0, marginBottom: 4 }}>{firstName} {lastName}</h3>
        <p style={{ margin: 0, color: '#888' }}>{age} Years Old</p>
      </div>
    </div>
  );
};

export default ContactCard;
