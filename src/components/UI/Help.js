import Modal from './Modal'
import styles from './Help.module.css';
const Help = (props) => {

  return (
    <Modal onClose={props.onClose} >
      <div className={styles.container}>
        <h2 >Please read the instructions carefully.</h2>
        <p>You have <b>3 hours</b> to complete the exam.</p>
        <div className={styles.instructions}>
          <div className={styles.instruction}>
            <div className={styles.square_green} />
            <div>It means the answer to this question is <b>marked and saved</b>.</div>
          </div>
          <div className={styles.instruction}>
            <div className={styles.square_blue} />
            <div>It means you are <b>currently on this question</b>.</div>
          </div>
          <div className={styles.instruction}>
            <div className={styles.square_purple} />
            <div>It means you have <b>visited the question but unanswered</b>.</div>
          </div>
          <div className={styles.instruction}>
            <div className={styles.square_grey} />
            <div>It means you <b>have not visited the question</b>.</div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  )

}

export default Help;