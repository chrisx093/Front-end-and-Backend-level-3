import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import axios from "axios"



const CreateProduct = () => {
    let url = "http://localhost:5000/product/createproduct"

    const formik = useFormik({
        initialValues: {
            productName: "",
            productPrice:"",
            description:"",
            image:""
        },
        onSubmit:(values)=>{
            console.log (values)
            axios.post(url, values)
            .then((response)=>{
                console.log(response)
            })
            .catch
        }, 
        validationSchema: yup.object({
            productName : yup.string().required("It is required"),
            productPrice : yup.number().required("It is required"),
            description : yup.string().required("It is required"),
            image : yup.string().required("It is required"),

        })
    })
    // console.log (formik.values)
  return (
    <>
    <h1>createProduct</h1>
    <form action="" onSubmit={formik.handleSubmit}>
    <input type="text" placeholder='Product Name' onChange={formik.handleChange} name='productName' onBlur={formik.handleBlur} className= {formik.touched.productName && formik.errors.productName ? 'form-control w-50 my-2 is-invalid' : 'form-control w-50 my-2'}/>
    <small className='text-danger'>{formik.touched.productName && formik.errors.productName}</small>

    <input type="text" placeholder='Product Price' onChange={formik.handleChange} name='productPrice' onBlur={formik.handleBlur} className= {formik.touched.productPrice && formik.errors.productPrice ? 'form-control w-50 my-2 is-invalid' : 'form-control w-50 my-2'}/>
    <small className='text-danger'>{formik.touched.productPrice && formik.errors.productPrice}</small>

    <input type="text" placeholder='Description' onChange={formik.handleChange} name='description' onBlur={formik.handleBlur} className= {formik.touched.description && formik.errors.description ? 'form-control w-50 my-2 is-invalid' : 'form-control w-50 my-2'}/>
    <small className='text-danger'>{formik.touched.description && formik.errors.description}</small>

    <input type="text" placeholder='Image'  onChange={formik.handleChange}name='image' onBlur={formik.handleBlur} className= {formik.touched.image && formik.errors.image ? 'form-control w-50 my-2 is-invalid' : 'form-control w-50 my-2'}/>
    <small className='text-danger'>{formik.touched.image && formik.errors.image}</small>

    <button type='submit'>  Save Product</button>
    </form>
    </>


  )
}

export default CreateProduct