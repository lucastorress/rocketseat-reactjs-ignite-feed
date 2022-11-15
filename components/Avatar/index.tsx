/* eslint-disable @next/next/no-img-element */
import styles from './Avatar.module.css'

interface avatarProps {
    hasBorder: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: avatarProps) {
    return (
        <img
            className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
            src={src}
            alt={alt}
        />
    )
}