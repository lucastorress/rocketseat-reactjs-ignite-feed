import Image from 'next/image'
import styles from './Header.module.css'
import igniteLogo from '../../public/images/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <Image src={igniteLogo} alt='Logotipo do Ignite' />
        </header>
    )
}