import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'
import axios from 'axios'



const Forms = ({touched, errors}) => {

    return(
        <Form>
            <h2>Registration Form</h2>

            <Field type="text" name="Username" placeholder='Username'/>
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
            <Field type='password' name ='password' placeholder='Password'/>
            {touched.password && errors.password && <p>{errors.password}</p>}

            <button type='submit'>Submit</button>
        </Form>
    ) 
}

const FormikForm = withFormik({

    mapPropsToValues({Username, password}){
        return{
            Username: Username || '',
            password: password || ''
        }
        },
        validationSchema: Yup.object().shape({
            Username: Yup.string().required(),
            password: Yup.string().min(6).required()
        }),
        handleSubmit(values){
            axios.post('http://localhost:5000/api/register', values)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
            
        }
    
})(Forms)

export default FormikForm