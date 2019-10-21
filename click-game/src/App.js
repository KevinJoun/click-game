import React from 'react';
import Nav from './Components/Nav'
import Header from './Components/Header'
import Container from './Components/Container'
import Card from './Components/Card'

function App() {
    return (
        <>
        <Nav/>
        <Header/>
        <Container>
            <Card/>
        </Container>
        </>
    );
}

export default App;
