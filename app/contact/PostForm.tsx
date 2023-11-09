'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Moment from 'moment'; 
import Styles from '@/styles/forms.module.css';


const validationSchema = Yup.object({
  firstname1: Yup.string().required('First name is required'),
  lastname1: Yup.string().required('Last name is required'),
  phone1: Yup.string()
  .matches(
    /^[0-9]+$/,
    'Phone number must contain only numeric digits (0-9)'
  )
  .min(10, 'Phone number must be at least 10 digits long')
  .max(15, 'Phone number cannot be longer than 15 digits'),
  email1: Yup.string().required('Email is Required'),
});

const PostForm = () => {
  const initialValues = {
    firstname1: '',
    lastname1: '',
    phone1: '',
    email1: '',
    message1: ''
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      resetForm();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
      {(({errors, values, touched}) => <Form
        onError={
          (err) => {
            console.log(err)
          }
        }
        onChange={
          () => {
            console.log("err", errors)
            console.log("values", values)
          }
        }
      >
        <section className={`container my-2  w-50 text-dark p-2 ${Styles.formbody}`}>
        <div className={`form-group row px-4 py-4  ${Styles.formhead}`}>
        <label htmlFor='' className='col-sm-3 col-form-label text-dark'><u>First Name</u></label>
            <div className='col-md-5'>
              <Field name="firstname1" className='form-control' id='firstname1' placeholder='First name'/>
          </div>
        </div>
        <div className={`form-group row px-4  ${Styles.formhead}`}>
        <label htmlFor='lastname1' className='col-sm-3 col-form-label text-dark'><u>Last Name</u></label>
          <div className='col-md-5'>
          <Field name="lastname1" className='form-control' id='lastname1' placeholder='Last name'/>
          </div>
        </div>
        <div className={`form-group row px-4 py-4  ${Styles.formhead}`}>
        <label htmlFor='email1' className='col-sm-3 col-form-label text-dark'><u>Email</u></label>
          <div className='col-md-5'>
          <Field name="email1" className='form-control' id='email1' placeholder='Email@.com' type='email'/>
          </div>
        </div>
        <div className={`form-group row px-4 ${Styles.formhead}`}>
        <label htmlFor='phone1' className='col-sm-3 col-form-label text-dark'><u>Phone Number</u></label>
          <div className='col-md-5'>
          <Field name="phone1" className='form-control' id='phone1' placeholder='+123-456-7890'/>
          </div>
        </div>
        <div className={`form-group row px-4 py-4  ${Styles.formhead}`}>
        <label htmlFor='message1' className='col-sm-3 col-form-label text-dark'><u>Message</u></label>
          <div className='col-md-5'>
            <Field  component='textarea' rows='3' placeholder='Message' name='message1' />
          </div>
          </div>
          <div className='container d-flex justify-content-center align-items-center'>
          <button type='submit' className='btn btn-outline-dark btn-md'>Submit</button>
          </div>
          </section>
      </Form>)}
    </Formik>
  );
};

export default PostForm;
