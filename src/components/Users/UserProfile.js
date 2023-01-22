import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Wishes from '../Wishes/Wishes';
import styles from './UserProfile.module.css'


function UserProfile(props) {

    const { name, profileImage, location, wishesCounts, wishes } = props.selectedUser;
    const { totalWish, fulfilled } = wishesCounts;

    const [wishFilter, setWishFilter] = useState('all');

    const wishBtnClickHandler = (wishChoice) => {
        setWishFilter(wishChoice);
    }


    return (
        <Container fluid >
            <Row>
                <Col xs={12} className={styles['profile-header']}>
                    <section className={styles['section-top']}>
                        <h1>Profile</h1>


                        <div className={styles['profile-stats']}>
                            <div>
                                <h3>{totalWish}</h3>
                                <p>Wishes</p>
                            </div>
                            <div>
                                <h3>{fulfilled}</h3>
                                <p>Fulfilled</p>
                            </div>
                        </div>
                    </section>


                    <section className={styles['section-bottom']}>

                    </section>

                    <section className={styles['profile-box']}>
                        <img src={profileImage} className={styles['profile-img']} alt="displayimage" />
                        <div>
                            <h2>{name}</h2>
                            <h4>{location}</h4>
                        </div>
                    </section>
                </Col>

            </Row>

            <Row className={styles['category-buttons']}>
                <Col xs={6}>
                    <button className={`btn btn-primary`} onClick={() => wishBtnClickHandler('career')}>Career</button>
                </Col>
                <Col xs={6}>
                    <button className='btn btn-danger' onClick={() => wishBtnClickHandler('lifestyle')}>Lifestyle</button>
                </Col>
                <Col xs={6}>
                    <button className='btn btn-dark' onClick={() => wishBtnClickHandler('hobby')}>Hobby</button>
                </Col>
                <Col xs={6}>
                    <button className='btn btn-success' onClick={() => wishBtnClickHandler('others')}>Others</button>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={11} lg={10}>
                    {wishes.length > 0 ? <Wishes wishes={wishes} wishFilter={wishFilter} /> : <h2>No wishes added yet.</h2>}
                </Col>
            </Row>

        </Container>
    )
}

export default UserProfile;