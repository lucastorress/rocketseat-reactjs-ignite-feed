import styles from './PostCommentForm.module.css'

export function PostCommentForm() {
    return (
        <form className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>
            <textarea placeholder='Deixe um comentário' />
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
    )
}