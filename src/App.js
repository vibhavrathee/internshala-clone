import React from 'react'
import MyNavbar from './components/Navbar/navbar';
import MyCarousel from './components/Carousel/carousel';
import {Button, InputGroup, Badge, FormControl, Container, Row, Col} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Cards from './components/Cards/cities'
import Categories from './components/Cards/categories';
import Freshers from './components/FresherJobs/fresher';
import Footer from './components/Footer/footer';
import "./App.css"
import context from "react-bootstrap/esm/AccordionContext";

const App = () => {
  return (
    <>
      <MyNavbar/>
      <div id="searchBar">
        <InputGroup id="mySearch" className="mb-4" size="lg">
          <FormControl
            placeholder="What are you looking for?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="info" id="button-addon2">
            <BsSearch/>
          </Button>
        </InputGroup>
      </div>
      <MyCarousel/>
      <Container fluid className="my-4">
        <h2>Internships</h2>
        <p className="description">
          Apply to 10,000+ internships for free
          <span className="ms-auto myLink"> <a href="#">View all internships <AiOutlineArrowRight/></a></span>
        </p>
      </Container>
      <Container fluid>
        <h4>Popular Cities</h4>
        <Cards/>
      </Container>
      <Container fluid>
        <h4>Popular Categories</h4>
        <Categories/>
      </Container>
      <Container fluid>
        <h4>
          Fresher Jobs {' '}
          <Badge bg="warning" text="light">
              New
          </Badge>
        </h4>
        <p>Premium fresher jobs on you finger tips</p>
        <Freshers/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
