import React from 'react'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../styles/login.css'

import { Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from "yup"

const emailRule =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const loginSchema = Yup.object({
  email: Yup.string().lowercase().matches(emailRule, {message: 'Invalid email'}).email('Invalid email').required('Required'),
  password: Yup.string().matches(passwordRule, {message: 'Invalid password'}).required('Required')
}).required()

const Login = () => {
  const onSubmit = async (values, actions) => {
    console.log(values)
    await new Promise ((resolve) => setTimeout(resolve, 500))
    actions.resetForm()
    await new Promise ((resolve) => setTimeout(resolve, 500))
    alert('You are logged in')
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit,
  })
  console.log(errors)
  return (
    <Helmet title='Login'>
      <CommonSection title='Login'/>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form action="" className="form mb-5 d-flex flex-column" onSubmit={handleSubmit}>
                  <label className='text-start'>Email</label>
                  <input type="email" name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? 'input-error' : ''}/>
                  {errors.email && <p className='text-start error__message'>{errors.email}</p>}

                  <label className='text-start'>Password</label>
                  <input type="password" name='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? 'input-error' : ''}/>  
                  {errors.password && <p className='text-start error__message'>{errors.password}</p>} 

                  <label className='text-start'><input type="checkbox" className='login__checkbox'/>Remember me</label>                                
                  <button type='submit' className='addToCart__btn' style={{marginTop: '20px', marginBottom: '10px'}}>Login</button>
                  <Link to='/register'>Don't have an account? Register</Link>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
