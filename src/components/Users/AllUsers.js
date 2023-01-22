import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './AllUsers.module.css'
import usersContext from '../../app/UsersContext';
import UserItem from './UserItem';


function AllUsers(props) {

    const ctx = useContext(usersContext)

    const { users } = ctx;
    return (

        <Container fluid >
            <Row className="justify-content-center">
                <Col xs={12} sm={11} md={9} lg={10}>
                    <Row className={`justify-content-between align-items-center ${styles['all-users']}`} >

                        {
                            users.map((user) => (
                                <UserItem
                                    key={user.userId}
                                    user={user}

                                />

                            ))
                        }
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}

export default AllUsers;