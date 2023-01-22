import React, { useContext } from 'react'
import { Button, Col } from 'react-bootstrap';
import usersContext from '../../app/UsersContext';
import styles from './UserItem.module.css'

function UserItem(props) {

    const { userId, name, location, profileImage } = props.user;
    const userCtx = useContext(usersContext);



    return (

        <Col xs={12} sm={6} md={6} lg={4}>
            <div className={`d-flex gap-5 gap-sm-3 my-3 ${styles['user-item']}`} >
                <img src={profileImage} className={styles['profile-image']} alt="profileimage" />
                <div className="d-flex flex-column justify-content-between">
                    <div>
                        <h5>{name}</h5>
                        <p>{location}</p>
                    </div>
                    <a href="#" onClick={() => userCtx.clickUserHandler(userId)}>View Profile</a>
                </div>
            </div>

        </Col >

    )
}

export default UserItem