'use client'

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Styles from '@/styles/testimonial.module.css';

interface Review {
  id: number;
  username: string;
  comment: string;
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);

  const initialValues: Review = {
    id: 0,
    username: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const handleSubmit = (values: Review) => {
    const newReview = { ...values, id: reviews.length + 1 };
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
              <Form>
                  <section className={`container my-2 w-50 p-3 ${Styles.formbody}`}>
                  <div className={`form-group row px-2 py-2 ${Styles.formhead}`}>
                          <label htmlFor="username" className="col-sm-3 col-form-label text-dark">Name:</label>
                          <div className="col-md-5">
            <Field
              type="text"
              name="username"
              className="form-control"
              placeholder="Name"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
                              />
                              </div>
          </div>
          <div className={`form-group row px-2 py-4  ${Styles.formhead}`}>
                          <label htmlFor="comment" className="col-sm-3 col-form-label text-dark">Comment:</label>
                          <div className="col-md-5">
            <Field
              as="textarea"
              name="comment"
              className="form-control"
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-danger"
                              />
                              </div>
                      </div>
                      <div className='container d-flex justify-content-center align-items-center'>
                      <button type='submit' className='btn btn-outline-dark btn-md'>Submit Review</button>
                      </div>
            </section>
        </Form>
      </Formik>
          <div className="container d-flex justify-content-center align-items-center">
          <section className={`container my-2 w-50 p-3 ${Styles.formbody}`}>
        <h2>Reviews:</h2>
        {reviews.map((review) => (
          <div key={review.id}>
            <strong>{review.username}:</strong> {review.comment}
          </div>
        ))}
      </section>
          </div>
    </div>
  );
};

export default ReviewPage;