import styles from "./AddReview.module.css";

function AddReview() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>ADD A REVIEW</h3>

      <div className={styles.lable}>YOUR RATTING*</div>
      <div className={styles.stars}>********</div>

      <form className={styles.form} action="">
        <div className={styles.inputs}>
          <label htmlFor="">Your Comment*</label>
          <textarea type="text" className={styles.comment} />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="name">Name*</label>
          <input type="text" name="name" className={styles.name} placeholder="Name"/>
        </div>
        <div className={styles.inputs}>
          <label htmlFor="name">Email*</label>
          <input type="email" name="email" className={styles.email} placeholder="Email"/>
        </div>

        <button className={styles.button}>Sumbit</button>
      </form>
    </div>
  );
}

export default AddReview;
