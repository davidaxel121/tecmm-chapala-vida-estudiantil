import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import landing from './img/landing.jpg';
import tshirt from './img/tshirt.jpg';
import house from './img/house.jpg';
import exampleimage1 from './img/example-1.jpg';
import exampleimage2 from './img/example-2.png';
import { Navbar, Carousel, Nav } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div className="tecmm-page">

        <Navbar className="" fixed="top" expand="lg">
          <Navbar.Brand href="#home">Tecmm Campus Chapala</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-center">
              <Nav.Link href="#section-hero">Vida estudiantil</Nav.Link>
              <Nav.Link href="#section-events">Eventos</Nav.Link>
              <Nav.Link href="#section-announcement">Anuncios</Nav.Link>
              <Nav.Link href="#section-links">Enlaces</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <section className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
          <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
        </section>

        <div className="container">

          <section className="section section-events text-center" id="section-events">
            <h3 className="title-section">Eventos anteriores</h3>

            <div className="masonry">
              <div className="item level-1">
                <img src={landing} alt=""></img>
              </div>
              <div className="item level-2">
                <img src={tshirt} alt=""></img>
              </div>
              <div className="item level-3">
                <img src={house} alt=""></img>
              </div>
              <div className="item level-1">
                <img src={landing} alt=""></img>
              </div>
              <div className="item level-2">
                <img src={tshirt} alt=""></img>
              </div>
              <div className="item level-3">
                <img src={house} alt=""></img>
              </div>
              <div className="item level-1">
                <img src={landing} alt=""></img>
              </div>
              <div className="item level-2">
                <img src={tshirt} alt=""></img>
              </div>
              <div className="item level-3">
                <img src={house} alt=""></img>
              </div>
              <div className="item level-1">
                <img src={landing} alt=""></img>
              </div>
              <div className="item level-2">
                <img src={tshirt} alt=""></img>
              </div>
              <div className="item level-3">
                <img src={house} alt=""></img>
              </div>
            </div>
          </section>

          <section className="section section-announcement text-center" id="section-announcement">
            <h3 className="title-section">Anuncios</h3>

            <div>
              <h4 className="important">Importante</h4>
              <img src={exampleimage2} className="img-fluid" alt="Important annoucement" />
            </div>

            <br />

            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exampleimage1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Primer anuncio</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exampleimage1}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Segundo anuncio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exampleimage1}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Tercer anuncio</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

          </section>

          <section className="section section-links text-center" id="section-links">
            <div className="row">
              <div className="col">

                <h3 className="title-section">Enlaces importantes</h3>

                <div className="row">
                  <div className="col-12 col-md-6 order-1 order-md-1 section-links-images d-flex justify-content-center align-items-center"><img src={exampleimage2} className="" alt="Link 1" /></div>
                  <div className="col-12 col-md-6 order-2 order-md-2 link-color-1 section-links-text">

                    <h5 className="link-title">EDCORE</h5>

                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aut sunt dignissimos ex hic nam, sed facere possimus quibusdam repellendus perspiciatis animi rerum soluta nesciunt nemo. Dolorem nemo modi ad suscipit quasi sint consectetur itaque magnam sequi enim magni quae deserunt, cumque, necessitatibus molestiae reprehenderit dignissimos quaerat maxime obcaecati quis aut dicta. Earum, explicabo ut? Repellendus tenetur aut ea, cum voluptate eius quidem ipsa dolorum maiores, quos ipsam, hic laborum.</div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 order-2 order-md-1 link-color-2 section-links-text">

                    <h5 className="link-title">EDCORE</h5>

                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aut sunt dignissimos ex hic nam, sed facere possimus quibusdam repellendus perspiciatis animi rerum soluta nesciunt nemo. Dolorem nemo modi ad suscipit quasi sint consectetur itaque magnam sequi enim magni quae deserunt, cumque, necessitatibus molestiae reprehenderit dignissimos quaerat maxime obcaecati quis aut dicta. Earum, explicabo ut? Repellendus tenetur aut ea, cum voluptate eius quidem ipsa dolorum maiores, quos ipsam, hic laborum.</div>
                  <div className="col-12 col-md-6 order-1 order-md-2 section-links-images d-flex justify-content-center align-items-center"><img src={exampleimage2} className="" alt="Link 1" /></div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 order-1 order-md-1 section-links-images d-flex justify-content-center align-items-center"><img src={exampleimage2} className="" alt="Link 1" /></div>
                  <div className="col-12 col-md-6 order-2 order-md-2 link-color-3 section-links-text">

                    <h5 className="link-title">EDCORE</h5>

                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aut sunt dignissimos ex hic nam, sed facere possimus quibusdam repellendus perspiciatis animi rerum soluta nesciunt nemo. Dolorem nemo modi ad suscipit quasi sint consectetur itaque magnam sequi enim magni quae deserunt, cumque, necessitatibus molestiae reprehenderit dignissimos quaerat maxime obcaecati quis aut dicta. Earum, explicabo ut? Repellendus tenetur aut ea, cum voluptate eius quidem ipsa dolorum maiores, quos ipsam, hic laborum.</div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 order-2 order-md-1 link-color-1 section-links-text">

                    <h5 className="link-title">EDCORE</h5>

                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aut sunt dignissimos ex hic nam, sed facere possimus quibusdam repellendus perspiciatis animi rerum soluta nesciunt nemo. Dolorem nemo modi ad suscipit quasi sint consectetur itaque magnam sequi enim magni quae deserunt, cumque, necessitatibus molestiae reprehenderit dignissimos quaerat maxime obcaecati quis aut dicta. Earum, explicabo ut? Repellendus tenetur aut ea, cum voluptate eius quidem ipsa dolorum maiores, quos ipsam, hic laborum.</div>
                  <div className="col-12 col-md-6 order-1 order-md-2 section-links-images d-flex justify-content-center align-items-center"><img src={exampleimage2} className="" alt="Link 1" /></div>
                </div>
              </div>
            </div>
          </section>

          <footer className="section footer text-center" id="footer">
            <hr />
            <h6>Tecmm Chapala 2020 - 2024</h6>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;