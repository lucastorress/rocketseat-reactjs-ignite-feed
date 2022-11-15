import { Sidebar } from '../Sidebar/index';

import styles from './Main.module.css'

export function Main() {
  return (
    <div className={styles.wrapper}>
        <Sidebar />
        <main>Conteúdo de posts</main>
    </div>
  )
}
