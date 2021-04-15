import React from 'react';
import { useHistory } from 'react-router-dom';

import ContactAction from '../../../utils/store/actions/contactAction';
import Swalert from '../../../components/helper/Swal';

const placeHolder: string = 'https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg';

interface ContactDetailContainerProps {
  dispatch: Function
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  photo: string
};

const ContactDetailContainer: React.FC<ContactDetailContainerProps> = ({ id, firstName, lastName, age, photo, dispatch }: ContactDetailContainerProps) => {
  const history = useHistory();
  const handleDelete = (id: string) => {
    Swalert.confirm('Are you sure?', 'You won\'t be able to revert this!', 'Yes')
      .then((result: any) => {
        if (result.isConfirmed) {
          dispatch(ContactAction.delContact(id));
          return history.push('/');
        };
      });
  };

  return (
    <div className="contactDetailContainer">
      <div className="contactDetailAvaContainer">
        <img src={photo === 'N/A' ? placeHolder : photo} alt="" className="contactDetailAva" />
      </div>
      <div className="contactDetailNameContainer">
        <h1 style={{ marginTop: 0, marginBottom: 4, fontWeight: 600, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{firstName} {lastName}</h1>
        <p style={{ marginTop: 0, marginBottom: 12, textAlign: 'center' }}>{age} Years Old</p>
      </div>
      <div style={{ width: '212px', display: 'flex', justifyContent: 'space-evenly', alignSelf: 'center' }}>
        <button className="btnOutWhite" style={{ alignSelf: 'center', marginBottom: 48, paddingLeft: 14, borderRadius: '1.6rem', fontWeight: 600, letterSpacing: 3 }} onClick={() => history.push(`/contact/edit/${id}`)}>Edit</button>
        <button className="btnRed" style={{ alignSelf: 'center', marginBottom: 48, paddingLeft: 14, borderRadius: '1.6rem', fontWeight: 600, letterSpacing: 3 }} onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactDetailContainer;
