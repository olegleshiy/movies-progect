// Core
import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import './MovieFormAdd.css';
import { moviesAdd } from '../../bll/forms/shapes';

const MovieFormAdd = (props) => {
    const inputFile = useRef();

    const handleFileSubmit = () => {
        const data = new FormData();

        data.append('file', inputFile.current.files[0]);
        props.downloadMoviesFile(data);
    }

    return (
        <div className={ 'wrapper' }>
            <Formik
                initialValues={ moviesAdd.shape }
                validationSchema={ moviesAdd.schema }
                onSubmit={ (values, actions) => {
                    props.createMovie(values);

                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {
                            title: '',
                            release: '',
                            format: '',
                            stars: ''
                        }
                    });
                } }
            >
                { ({
                       isValid,
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleSubmit,
                       isSubmitting
                   }) => (
                    <Form className={ 'form' } onSubmit={ handleSubmit }>
                        <h1>Add movies</h1>
                        <Field
                            type='text'
                            name='title'
                            placeholder='Name'
                            value={values.title}
                            className={
                                cx(`input-field`,
                                    { ['invalidInput']: !isValid && touched.title && errors.title }) }
                            disabled={ isSubmitting }
                        />
                        <Field
                            type='number'
                            name='release'
                            placeholder='Release Year'
                            value={values.release}
                            className={
                                cx(`input-field`,
                                    { ['invalidInput']: !isValid && touched.release && errors.release }) }
                            disabled={ isSubmitting }
                        />
                        <select
                            name='format'
                            value={values.format}
                            className={`input-field select-field`}
                            onChange={handleChange}
                            style={{ display: 'block' }}
                        >
                            <option value='' label='Select a format'/>
                            <option value='DVD' label='DVD' />
                            <option value='VHS' label='VHS' />
                            <option value='Blu-Ray' label='Blu-Ray' />
                        </select>
                        <Field
                            type='text'
                            name='stars'
                            placeholder='Stars'
                            value={values.stars}
                            className={
                                cx(`input-field`,
                                    { ['invalidInput']: !isValid && touched.stars && errors.stars }) }
                            disabled={ isSubmitting }
                        />
                        <button
                            type='submit'
                            className={ 'btn btn--width' }
                            disabled={ isSubmitting }
                        >{ isSubmitting ? 'Loading...' : 'Add' }
                        </button>
                    </Form>
                ) }
            </Formik>
            <div className='btn-download'>
                <input ref={inputFile} type='file' name='file' id='file' className='inputfile' />
                <label htmlFor='file'>Download list movies from file ".txt"</label>
                <button onClick={handleFileSubmit}>
                    Upload!
                </button>
            </div>
        </div>
    );
};

export default MovieFormAdd;
