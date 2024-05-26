import styles from './ReviewArea.module.css';

import Review from './Review/Review';

import AddReview from './AddReview/AddReview';
function ReviewArea(){
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>1 REVIEW FOR CHEAP MONDAY</h3>
            <Review/>
            <Review/>
            <Review/>
            <AddReview/>
        </div>
    );
}

export default ReviewArea;