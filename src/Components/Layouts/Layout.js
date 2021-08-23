import { Container } from "reactstrap";

import TopNavigation from "../TopNavigation";

function Layout(props) {
  return (
    <div>
      <TopNavigation />
      <main>
        <Container>{props.children}</Container>
      </main>
    </div>
  );
}

export default Layout;
