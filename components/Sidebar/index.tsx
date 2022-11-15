/* eslint-disable @next/next/no-img-element */
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
                alt={''}
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src={'https://github.com/lucastorress.png'}
                    alt={''}
                />
                <strong>Lucas Torres</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}