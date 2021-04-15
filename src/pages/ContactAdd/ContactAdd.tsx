import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Swalert from '../../components/helper/Swal';

import ContactAction from '../../utils/store/actions/contactAction';

import './styles/contactAdd.css';

const ContactAdd = () => {
  const dispatch: any = useDispatch();
  const history: any = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!e?.target?.firstName?.value) return Swalert.fire('Error!', 'Please fill the First Name!', 'error');
    if (!e?.target?.lastName?.value) return Swalert.fire('Error!', 'Please fill the Last Name!', 'error');
    if (!e?.target?.age?.value) return Swalert.fire('Error!', 'Please fill the Age!', 'error');
    if (e?.target?.age?.value < 0 || e?.target?.age?.value > 100) return Swalert.fire('Error!', 'Age must be more than 0 and less than equal 100.', 'error');
    if (!e?.target?.photo?.value) return e.target.photo.value = 'N/A';

    const value: any = {
      firstName: e?.target?.firstName?.value,
      lastName: e?.target?.lastName?.value,
      age: e?.target?.age?.value,
      photo: e?.target?.photo?.value,
    };

    dispatch(ContactAction.addContact(value));
    return history.push(`/`);
  };

  return (
    <div id="ContactAdd">
      <div className="contactAddFormCard">
        <form style={{ display: 'flex', flexDirection: 'column', width: '100%' }} onSubmit={(e) => handleSubmit(e)}>
          <h1 style={{ margin: 0, textAlign: 'center', fontSize: '1.6rem', marginBottom: 24, color: '#0d6efd' }}>Contact Information</h1>

          <label htmlFor="firstName" style={{ marginBottom: 8, fontSize: '1rem' }}>First Name</label>
          <input type="text" className="formInput" id="firstName" style={{ borderRadius: '.6rem', marginBottom: 16 }} name="firstName" />

          <label htmlFor="lastName" style={{ marginBottom: 8, fontSize: '1rem' }}>Last Name</label>
          <input type="text" className="formInput" id="lastName" style={{ borderRadius: '.6rem', marginBottom: 16 }} name="lastName" />

          <label htmlFor="age" style={{ marginBottom: 8, fontSize: '1rem' }}>Age</label>
          <input type="number" className="formInput" id="age" style={{ borderRadius: '.6rem', marginBottom: 16 }} name="age" />

          <label htmlFor="photo" style={{ marginBottom: 8, fontSize: '1rem' }}>Profile Pic URL</label>
          <input type="text" className="formInput" id="photo" style={{ borderRadius: '.6rem', marginBottom: 24 }} name="photo" />

          <input type="submit" className="btnBlue" style={{ borderRadius: '.6rem', fontWeight: 600, letterSpacing: 2 }} value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactAdd;
