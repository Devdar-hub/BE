    import * as yup from 'yup';

    // Define a yup schema for user validation
    const userValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required')
    });

    export default userValidationSchema;
