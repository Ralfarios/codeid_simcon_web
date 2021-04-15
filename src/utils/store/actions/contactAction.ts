import axios from '../../api/axios';

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
};

export default ContactAction;