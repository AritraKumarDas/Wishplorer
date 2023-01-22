import React from 'react'
import WishItem from './WishItem';
import { Row } from 'react-bootstrap';
import styles from './Wishes.module.css'

function Wishes(props) {

    const { wishes, wishFilter } = props;

    let filteredWishes = wishes;

    if (wishFilter !== 'all') {
        filteredWishes = wishes.filter((wish) => wish.category === wishFilter);

    }


    return (
        <Row className={`justify-content-center gap-0 gap-lg-3 ${styles.wishes}`}>
            {filteredWishes.map((wish) => <WishItem key={wish.wishId} wish={wish} />)}
        </Row>
    )
}

export default Wishes;