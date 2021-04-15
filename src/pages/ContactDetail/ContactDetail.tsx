import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ContactAction from '../../utils/store/actions/contactAction';
import ContactDetailContainer from './components/ContactDetailContainer';
import ContactDetailContainerSkeleton from './components/ContactDetailContainerSkeleton';
import ContactPhoneNumber from './components/ContactPhoneNumber';
import MetaDecorator from '../../utils/helmet/MetaDecorator';

import './styles/contactDetail.css';
import { useEffect } from 'react';

const ContactDetail = () => {
  const { contactid }: any = useParams();
  const dispatch: any = useDispatch();
  const { contact, isLoading }: any = useSelector((state: any) => state.contact);

  useEffect(() => {
    dispatch(ContactAction.getContactById(contactid));
  }, [dispatch]);

  return (
    <div id="ContactDetail">
      <MetaDecorator title="Contact Detail | SimCon" desc="A Page about Detailed information of contact" />

      {/* <ContactDetailContainerSkeleton /> */}
      {isLoading
        ? <ContactDetailContainerSkeleton />
        : <ContactDetailContainer
          dispatch={dispatch}
          id={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          age={contact.age}
          photo={contact.photo}
        />
      }
      <ContactPhoneNumber />
    </div>
  );
};

export default ContactDetail;
