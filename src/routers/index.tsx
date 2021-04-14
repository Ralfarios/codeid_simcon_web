import { Switch, Route, Redirect } from 'react-router-dom';

import { path } from './path';
import { Contact, ContactDetail, E404, FormContainer } from '../pages';

const IndexRouter = () => {
  return (
    <Switch>
      <Route exact path={path.add}>
        <FormContainer />
      </Route>
      <Route exact path={path.edit}>
        <FormContainer />
      </Route>
      <Route exact path={path.detail}>
        <ContactDetail />
      </Route>
      <Route exact path={path.e404}>
        <E404 />
      </Route>
      <Route exact path={path.home}>
        <Contact />
      </Route>
      <Route path={path.placeholder || path.placeholderContact}>
        <Redirect to={{ pathname: path.e404 }} />
      </Route>
    </Switch>
  );
};

export default IndexRouter;

