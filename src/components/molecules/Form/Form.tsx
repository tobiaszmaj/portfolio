import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/molecules/Form/FormInput';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import Recaptcha from 'react-recaptcha';

const StyledButton = styled(Button)`
  width: 100%;
  margin: 15px 0 30px;
  border-radius: 4px;
  ${({ theme }) => theme.mq.s} {
    margin: 30px 0 50px;
  }
  ${({ disabled }) =>
        disabled &&
        css`
      content: '';
      background-color: ${({ theme }) => theme.blue};
      border-color: ${({ theme }) => theme.blue};
      cursor: default;
    `}
`;

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required!'),
    email: Yup.string()
        .email('Email address is invalid!')
        .required('Email address is required!'),
    message: Yup.string()
        .min(10, 'Message is too short!')
        .required('Message is required!'),
});

interface FormValues {
    name: string;
    email: string;
    message: string;
}

interface Data {
    [key: string]: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
};

const encode = (data: Data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactForm = () => {
    const [token, setToken] = useState('');
    const [submitBtn, setSubmitBtn] = useState({
        content: 'Send message',
        color: 'blue',
    });

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const clearButton = () => {
        setSubmitBtn({ content: 'Send message', color: 'blue' });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={(
                values,
                { setSubmitting, resetForm }: FormikHelpers<FormValues>
            ) => {
                if (token) {
                    const sendMessage = async () => {
                        try {
                            await fetch('/', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                },
                                body: encode({
                                    'form-name': 'contact-form',
                                    ...values,
                                    'g-recaptcha-response': token,
                                }),
                            });
                            setSubmitting(false);
                            setSubmitBtn({
                                content: "All good! I'll respond as soon as possible!",
                                color: 'green',
                            });
                            resetForm();
                            setTimeout(clearButton, 2500);
                        } catch (err) {
                            setSubmitting(false);
                            setSubmitBtn({ content: 'Something went wrong!', color: 'red' });
                            setTimeout(clearButton, 1500);
                        }
                    };
                    sendMessage();
                } else {
                    setSubmitBtn({
                        content: 'You have to verify reCAPTCHA first!',
                        color: 'red',
                    });
                    setTimeout(clearButton, 1000);
                }
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    name="contact-form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                >
                    <Field type="hidden" name="form-name" />
                    <Field type="hidden" name="bot-field" />
                    <FormInput
                        id="name"
                        label="Name"
                        onChangeFn={handleChange}
                        onBlurFn={handleBlur}
                        value={values.name}
                        touched={touched.name}
                        errors={errors.name}
                    />
                    <FormInput
                        id="email"
                        label="Email address"
                        onChangeFn={handleChange}
                        onBlurFn={handleBlur}
                        value={values.email}
                        touched={touched.email}
                        errors={errors.email}
                    />
                    <FormInput
                        textarea
                        id="message"
                        label="Message"
                        onChangeFn={handleChange}
                        onBlurFn={handleBlur}
                        value={values.message}
                        touched={touched.message}
                        errors={errors.message}
                    />
                    <Recaptcha
                        sitekey={process.env.SITE_RECAPTCHA_KEY}
                        theme="dark"
                        verifyCallback={response => {
                            setToken(response);
                        }}
                    />
                    <StyledButton
                        color={submitBtn.color}
                        animated
                        submit
                        disabled={isSubmitting || submitBtn.color !== 'blue'}
                        isSubmitting={isSubmitting}
                        type="submit"
                    >
                        {!isSubmitting && submitBtn.content}
                    </StyledButton>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;