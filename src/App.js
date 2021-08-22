import { Route, Switch } from "react-router-dom";

import AllMeetupPage from "./Pages/AllMeetupPage";
import NewMeetupPage from "./Pages/NewMeetupPage";
import FavoritesMeetupPage from "./Pages/FavoritesMeetupPage";
import Layout from "./Components/Layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
