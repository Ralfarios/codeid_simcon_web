import axios from '../../api/axios';
import Swalert from '../../../components/helper/Swal';

class ContactAction {
  static getContact() {
    return async (next: any) => {
      try {
        next({ type: 'LOADING' });

        const { data }: any = await axios({
          method: 'GET',
          url: '/contact',
        });

        return next({ type: 'FETCH_CONTACT', payload: data.data });
      } catch (err) {
        next({ type: 'ERROR', payload: err });
      };
    };
  };

  static getContactById(contactId: string) {
    return async (next: any) => {
      try {
        next({ type: 'LOADING' });

        const { data }: any = await axios({
          method: 'GET',
          url: `/contact/${contactId}`
        });

        return next({ type: 'FETCH_CONTACT_BY_ID', payload: data.data });
      } catch (err) {
        next({ type: 'ERROR', payload: err });
      };
    };
  };

  static delContact(contactId: string) {
    return async (next: any) => {
      try {
        await axios({
          method: 'DELETE',
          url: `/contact/${contactId}`
        });

        Swalert.fire('Delete Success!', 'Contact has been deleted.', 'success');

        return next({ type: 'DELETE_CONTACT', payload: contactId });
      } catch (err) {
        next({ type: 'ERROR', payload: err });
      };
    };
  };

  static putContact(value: any) {
    return async (next: any) => {
      try {
        return console.log(value);
      } catch (err) {
        next({ type: 'ERROR', payload: err });
      };
    };
  };
};

export default ContactAction;
