import ContactDetailContainer from './components/ContactDetailContainer';
import ContactPhoneNumber from './components/ContactPhoneNumber';
import MetaDecorator from '../../utils/helmet/MetaDecorator';

import './styles/contactDetail.css';

const ContactDetail = () => {
  return (
    <div id="ContactDetail">
      <MetaDecorator title="Contact Detail | SimCon" desc="A Page about Detailed information of contact" />

      <ContactDetailContainer
        id=""
        firstName=""
        lastName=""
        age={0}
        photo=""
      />

      <ContactPhoneNumber />
    </div>
  );
};

export default ContactDetail;
