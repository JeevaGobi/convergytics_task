import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Register({ history }) {
    const initialValues = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    };

    // const validationSchema = Yup.object().shape({
    //     title: Yup.string()
    //         .required('Title is required'),
    //     firstName: Yup.string()
    //         .required('First Name is required'),
    //     lastName: Yup.string()
    //         .required('Last Name is required'),
    //     email: Yup.string()
    //         .email('Email is invalid')
    //         .required('Email is required'),
    //     password: Yup.string()
    //         .min(6, 'Password must be at least 6 characters')
    //         .required('Password is required'),
    //     confirmPassword: Yup.string()
    //         .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //         .required('Confirm Password is required'),
    //     acceptTerms: Yup.bool()
    //         .oneOf([true], 'Accept Terms & Conditions is required')
    // });

    // function onSubmit(fields, { setStatus, setSubmitting }) {
    //     setStatus();
    //     accountService.register(fields)
    //         .then(() => {
    //             alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
    //             history.push('login');
    //         })
    //         .catch(error => {
    //             setSubmitting(false);
    //             alertService.error(error);
    //         });
    // }

    return (
        // <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        //     {({ errors, touched, isSubmitting }) => (
                <form>
                    <h3 className="card-header">Register</h3>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Title</label>
                                <Field name="title" as="select" className='form-control'>
                                    <option value=""></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </Field>
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>First Name</label>
                                <Field name="firstName" type="text" className='form-control' />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Last Name</label>
                                <Field name="lastName" type="text" className='form-control' />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" type="text" className='form-control' />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Password</label>
                                <Field name="password" type="password" className='form-control' />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Confirm Password</label>
                                <Field name="confirmPassword" type="password" className='form-control' />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" id="acceptTerms" className='form-check-input' />
                            <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                {/* {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                                Register
                            </button>
                            <Link to="login" className="btn btn-link">Cancel</Link>
                        </div>
                    </div>
                </form>
        //     )}
        // </Formik>
    )
}

export default Register; 