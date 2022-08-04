import React from 'react'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

import { Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const Register = () => {
  const usernameRule = /^[a-z0-9_\.]+$/
  const emailRule =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

  const registerSchema = yup.object({
    username: yup.string().matches(usernameRule, {message: 'Invalid username'}).required({message: 'This field is required'}),
    email: yup.string().lowercase().matches(emailRule, {message: 'Invalid email'}).email( {message: 'Invalid email'}).required({message: 'This field is required'}),
    password: yup.string().matches(passwordRule, {message: 'Invalid password'}).required({message: 'This field is required'})
  }).required()

  const {register, reset, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = async (data) => {
    console.log(data)
    await new Promise ((resolve) => setTimeout(resolve, 500))
    reset()
    await new Promise ((resolve) => setTimeout(resolve, 500))
    alert('Register successfully')
  }

  return (
    <Helmet title='Register'>
      <CommonSection title='Register'/>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form action="" className="form mb-5 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                  <label className='text-start'>Username</label>
                  <input type="text" name='username' {...register("username")} className={errors.username ? 'input-error' : ''}/>
                  {errors.username && <p className='text-start error__message'>{errors.username.message}</p>}

                  <label className='text-start'>Email</label>
                  <input type="email" name='email' {...register("email")} className={errors.email ? 'input-error' : ''}/>
                  {errors.email && <p className='text-start error__message'>{errors.email.message}</p>}

                  <label className='text-start'>Password</label>
                  <input type="password" name='password' {...register("password")} className={errors.password ? 'input-error' : ''}/>  
                  {errors.password && <p className='text-start error__message'>{errors.password.message}</p>}  

                  <button type='submit' className='addToCart__btn' style={{marginTop: '20px', marginBottom: '10px'}}>Register</button>
                  <Link to='/login'>Already have an account? Login</Link>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register
