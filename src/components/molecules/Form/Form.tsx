import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/molecules/Form/FormInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setTimeout(() => {
                    setSubmitting(false);
                }, 1000);
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
                <Form onSubmit={handleSubmit} autoComplete="off">
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
                    <StyledButton animated submit disabled={isSubmitting} type="submit">
                        {!isSubmitting && 'Send message'}
                    </StyledButton>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;