import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Login({ history, location }) {
    const initialValues = {
        email: '',
        password: ''
    };

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string()
    //         .email('Email is invalid')
    //         .required('Email is required'),
    //     password: Yup.string().required('Password is required')
    // });

    // function onSubmit({ email, password }, { setSubmitting }) {
    //     alertService.clear();
    //     accountService.login(email, password)
    //         .then(() => {
    //             const { from } = location.state || { from: { pathname: "/" } };
    //             history.push(from);
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
                    <h3 className="card-header">Login</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" type="text" className='form-control' />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className='form-control' />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <button type="submit" className="btn btn-primary">
                                    {/* {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                                    Login
                                </button>
                                <Link to="register" className="btn btn-link">Register</Link>
                            </div>
                            <div className="form-group col text-right">
                                <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                </form>
        //     )}
        // </Formik>
    )
}

export default Login; 