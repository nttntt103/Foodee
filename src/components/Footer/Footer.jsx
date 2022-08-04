import React, {useRef} from 'react'

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import emailjs from '@emailjs/browser'

import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'

const Footer = () => {
  const form = useRef()

  const sendEmailHandler = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_8g14l2p', 'template_ag1kfzu', form.current, 'XyVW5oH-yx92Oa8Jz')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
      e.target.reset()
  }

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className="footer__logo text-start">
            <NavLink to='/'>
              <img src={logo} alt="logo" />
              <h5>Foodee</h5>
            </NavLink>
            <p>A customer is the most important visitor on our premises, he is not dependent on us. We are dependent on him.</p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Delivery Time</h5>
          <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span> Monday - Friday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span> Saturday - Sunday</span>
              <p>Off day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Contact</h5>
          <ListGroup className='contact-list'>
          <ListGroupItem className='contact-item border-0 ps-0'>
              <p>Location: 9 Thien Quang Street, Hai Ba Trung District, Hanoi</p>
            </ListGroupItem>
            
            <ListGroupItem className='contact-item border-0 ps-0'>
              <span>Phone: 0985888999</span>
            </ListGroupItem>

            <ListGroupItem className='contact-item border-0 ps-0'>
              <span>contact@foodee.vn</span>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <form ref={form} className="newsletter" onSubmit={sendEmailHandler}>
            <input type="email" placeholder='Enter your email' name="user_email"/>
            <button type='submit' value='Submit'><i class="ri-send-plane-line"></i></button>
          </form>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright__text'>© 2022 Foodee. All Rights Reserved.</p>
        </Col>

        <Col lg='6' md='6'>
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0'>Follow: </p>
            <span>
              <a href='https://www.facebook.com/' rel="noopener noreferrer" target = "_blank">
                <i class="ri-facebook-circle-fill"></i>
              </a>
            </span>

            <span>
              <a href='https://www.youtube.com/' rel="noopener noreferrer" target = "_blank">
                <i class="ri-youtube-fill"></i>
              </a>
            </span>

            <span>
              <a href='https://www.twitter.com/' rel="noopener noreferrer" target = "_blank">
                <i class="ri-twitter-fill"></i>
              </a>
            </span>

            <span>
              <a href='https://www.instagram.com/' rel="noopener noreferrer" target = "_blank">
                <i class="ri-instagram-fill"></i>
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
