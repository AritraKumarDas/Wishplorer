import React from 'react'
import styles from './WishItem.module.css'
import { Col } from 'react-bootstrap'

function WishItem(props) {
    console.log(props.wish)

    const { wishId, heading, description, image, wishLink, fulfilled } = props.wish


    return (
        <Col xs={10} sm={7} lg={5}>
            <div className={styles['wish-item']} style={{ background: `url(${image})` }}>
                {/* <img src={image} alt="" /> */}
                <div className={styles['wish-details']}>
                    <h3>{heading}</h3>
                    <h4>{description}</h4>
                    <p>View product <a href={wishLink}>here</a></p>
                    {/* <p>Wish is {fulfilled ? "already fulfilled" : "not yet fulfilled"}</p> */}
                </div>
            </div>
        </Col>
    )
}

export default WishItem;