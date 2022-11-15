import { Avatar } from '../Avatar';
import styles from './Post.module.css'

interface postProps {
    author: string; content: string;
}

export function Post({author, content}: postProps) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src='https://github.com/lucastorress.png'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Torres</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time
                    title='11 de Novembro de 2022 às 19:02h'
                    dateTime='2022-11-15 19:02:30'>
                        Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p><a href=''>Link lorem ipsum</a></p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>
        </article>
    );
}