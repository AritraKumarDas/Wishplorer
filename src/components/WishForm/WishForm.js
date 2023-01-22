import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';

import styles from './WishForm.module.css'


const initialState = {
    title: '',
    description: '',
    imageUrl: '',
    productLink: '',
    category: '',
}

function WishForm() {

    const [formData, setFormData] = useState(initialState)

    const changeHandler = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            }
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const wishObj = {
            wishId: nanoid(),
            heading: formData.title,
            description: formData.description,
            image: formData.imageUrl,
            wishLink: formData.productLink,
            category: formData.category,
            fulfilled: false,
        }

        console.log("NEW WISH ITEM UPLOADED")
        console.log(wishObj);

        setFormData(initialState)

    }


    return (

        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={5} xl={4}>
                    <form className={styles['wish-form']} onSubmit={submitHandler}>

                        <h4>Add Wish Form</h4>
                        <div>
                            <label htmlFor='title'>Wish Title</label>

                            <input className="" type="text" id='title' name="title" value={formData.title} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor='description'>Description</label>
                            <input className="" type="text" id='description' name="description" value={formData.description} onChange={changeHandler} />
                        </div>
                        <div >
                            <label htmlFor='imageUrl'>Upload an Image</label>
                            <input type="file" name="imageUrl" id='imageUrl' value={formData.imageUrl} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor='productLink'>Post Product Link</label>
                            <input type="url" name="productLink" id='productLink' value={formData.productLink} onChange={changeHandler} />
                        </div>
                        <div className={styles['control-category']}>
                            <label htmlFor='category'>Select Category</label>
                            <select name="category" id='category' value={formData.category} onChange={changeHandler}>
                                <option>Career</option>
                                <option>Lifestyle</option>
                                <option>Hobby</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <button type="submit">Upload</button>




                    </form>
                </Col>
            </Row>
        </Container >
    )
}

export default WishForm;