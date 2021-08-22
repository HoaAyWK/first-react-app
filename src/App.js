import { Route, Switch } from 'react-router-dom';

import AllMeetupPage from './Pages/AllMeetupPage';
import NewMeetupPage from './Pages/NewMeetupPage';
import FavoritesMeetupPage from './Pages/FavoritesMeetupPage';

function App() {
  return <div className="App">
    <Switch>
      <Route path='/' exact>
        <AllMeetupPage/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favorites'>
        <FavoritesMeetupPage/>
      </Route>
    </Switch>
  </div>;
}

export default App;
