import { Post } from '../Post';
import { Sidebar } from '../Sidebar/index';

import styles from './Main.module.css'

export function Main() {
  return (
    <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post
                author="Lucas Torres"
                content="Lorem ipsum"
            />
            <Post
                author="Lucas Torres"
                content="Lorem ipsum"
            />
            <Post
                author="Lucas Torres"
                content="Lorem ipsum"
            />
        </main>
    </div>
  )
}
