import Password from 'antd/lib/input/Password'
import React, { useState } from 'react'

// const useForms = () => {

//     const [values, setValues] = useState({

//         firstName: "",
//         lastName: "",
//         homeAddress: "",
//         country: "",
//         state: "",
//         gender: "",
//         trade: "",
//         products: "",
//         phoneNumber: "",
//         attendance: "",
//         fileName: "",
//         other: "",
//         emailAddress: "",
//         age: "",
//         radio: "",
//     })

//     const [errors, setErrors] = useSttate({})

//     const handleChange = (e) => {

//         setValues({values, [e.target.name]: e.target.value })

//     }
//   return (
//     <div>useForms</div>
//   )
// }

// export default useForms



export default validateInfo = (values) => {
    let errors = {}

    if (!values.firstName.trim()) {
        errors.firstname = 'firstname is required'
    }

    if(!values.emailAddress) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }
    if (!values.lastName) {
        errors.lastname = 'lastname is required'
    }
    if (!values.country) {
        errors.country = 'Please select country'
    }

    if (!values.state) {
        errors.state = 'please select state'
    }
    if (!values.gender) {
        errors.gender = 'please select gender'
    }
    if (!values.age) {
        errors.age = 'age is required'
    }
    if (!values.radio) {
        errors.radio = 'please select a language'
    }
    if (!values.files) {
        errors.files = 'upload a file'
    }
    return errors;
}