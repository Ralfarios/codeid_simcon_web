import axios from '../../api/axios';
import Swalert from '../../../components/helper/Swal';

class ContactAction {
  static addContact(value: any) {
    return async (next: any) => {
      try {
        const { data } = await axios({
          method: 'POST',
          url: '/contact',
          data: value
        });

        return Swalert.toast('success', data.message);
      } catch (err) {
        const error = err.response.data.message;
        next({ type: 'ERROR', payload: error });
        return Swalert.toast('error', error);
      }
    }
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
        const error = err.response.data.message;
        next({ type: 'ERROR', payload: error });
        return Swalert.toast('error', error);
      };
    };
  };

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
        const error = err.response.data.message;
        return next({ type: 'ERROR', payload: error });
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
        const error = err.response.data.message;
        return next({ type: 'ERROR', payload: error });
      };
    };
  };

  static putContact(value: any, contactId: string) {
    return async (next: any) => {
      try {
        next({ type: 'LOADING' });

        const { data } = await axios({
          method: 'PUT',
          url: `/contact/${contactId}`,
          data: value
        });

        Swalert.toast('success', data.message);

        return next({ type: 'UPDATE_CONTACT', payload: data.data });
      } catch (err) {
        const error = err.response.data.message;
        return next({ type: 'ERROR', payload: error });
      };
    };
  };
};

export default ContactAction;
