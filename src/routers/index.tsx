import { Switch, Route, Redirect } from 'react-router-dom';

import { path } from './path';
import { Contact, ContactAdd, ContactDetail, ContactEdit, E404 } from '../pages';

const IndexRouter = () => {
  return (
    <Switch>
      <Route exact path={path.add}>
        <ContactAdd />
      </Route>
      <Route exact path={path.edit}>
        <ContactEdit />
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

