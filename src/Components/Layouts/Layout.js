import { Container, Row } from "reactstrap";

import TopNavigation from '../TopNavigation';

function Layout(props) {
    return  <div>
        <TopNavigation/>
        <main>
            <Container>
                <Row>
                    {props.children}
                </Row>
            </Container>
        </main>
    </div>
}

export default Layout;