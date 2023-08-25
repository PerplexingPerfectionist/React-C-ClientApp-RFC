import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

function Layout( { children } ) {
    return (
      <>
        <NavMenu />
        <Container fluid="md" className="bg-light border border-dark rounded-1 shadow px-4 py-3 mt-5">
            {children}
        </Container>
      </>
    );
}

export default Layout;