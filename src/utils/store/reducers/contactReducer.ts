const init: any = {
  contact: {},
  contacts: [],
  errors: null,
  isLoading: true
};

const contactReducer = (state: any = init, action: any) => {
  switch (action.type) {
    case 'ERROR':
      return state.errors === null
        ? { ...state, errors: [action.payload] }
        : { ...state, errors: [...state.errors, action.payload] };
    case 'LOADING':
      return { ...state, isLoading: true, errors: null };
    case 'ADD_CONTACT':
      return state;
    case 'DELETE_CONTACT':
      let newContact = state.contacts.filter((e: any) => e.id !== action.payload);
      return { ...state, contacts: newContact };
    case 'FETCH_CONTACT':
      return { ...state, contacts: action.payload, isLoading: false, errors: null };
    case 'FETCH_CONTACT_BY_ID':
      return { ...state, contact: action.payload, isLoading: false, errors: null };
    case 'UPDATE_CONTACT':
      return { ...state, contact: action.payload, isLoading: false, errors: null };
    default:
      return state;
  };
};

export default contactReducer;


