// Core
import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import './MovieFormAdd.css';
import { moviesAdd } from '../../bll/forms/shapes';
import { isFindEqualsObject, removeDuplicateOfString } from '../../utils/helpers';
import { Notification } from '../Notification';

const MovieFormAdd = (props) => {
    const inputFile = useRef();
    const [disabled, setDisabled] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(props.movies);
    }, [movies]);

    const handleFileSubmit = () => {
        const data = new FormData();
        data.append('file', inputFile.current.files[0]);
        props.downloadMoviesFile(data);
    }

    const handleFileChange = () => {
        if(inputFile.current.files[0].size < 10 || !inputFile.current.files[0].name.match(/\.txt$/)) {
            Notification('topRight', 'error', `Downloading document is empty or incorrect type file`);
        } else {
           setDisabled(false);
        }
    }

    const handleSubmit = (values, actions) => {
        if(isFindEqualsObject(movies, values, 'format')){
            actions.setSubmitting(false);
            Notification('topRight', 'error', `This film already exist`);
        } else {
            values.stars = removeDuplicateOfString(values.stars);
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
        }
    }

    return (
        <div className={ 'wrapper' }>
            <Formik
                initialValues={ moviesAdd.shape }
                validationSchema={ moviesAdd.schema }
                onSubmit={ handleSubmit }
            >
                { ({
                       isValid,
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting
                   }) => (
                    <Form className={ 'form' } onSubmit={ handleSubmit } noValidate>
                        <h1>Add movies</h1>
                        <div className='field-wrapper'>
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
                            {errors.title && touched.title ? <div className='error-message'>{errors.title}</div> : null}
                        </div>
                        <div className='field-wrapper'>
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
                            {errors.release && touched.release ? <div className='error-message'>{errors.release}</div> : null}
                        </div>
                        <div className='field-wrapper'>
                            <select
                                name='format'
                                value={values.format}
                                className={
                                    cx(`input-field select-field`,
                                        { ['invalidInput']: !isValid && touched.format && errors.format }) }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ display: 'block' }}
                            >
                                <option value='' label='Select a format'/>
                                <option value='DVD' label='DVD' />
                                <option value='VHS' label='VHS' />
                                <option value='Blu-Ray' label='Blu-Ray' />
                            </select>
                            {errors.format && touched.format ? <div className='error-message'>{errors.format}</div> : null}
                        </div>
                        <div className='field-wrapper'>
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
                            {errors.stars && touched.stars ? <div className='error-message'>{errors.stars}</div> : null}
                        </div>
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
                <input ref={inputFile} onChange={handleFileChange} type='file' name='file' id='file' className='inputfile' />
                <label htmlFor='file'>Download list movies from file ".txt"</label>
                <button onClick={handleFileSubmit} disabled={disabled}>
                    Upload!
                </button>
            </div>
        </div>
    );
};

export default MovieFormAdd;
