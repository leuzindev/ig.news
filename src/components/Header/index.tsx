import Image from 'next/image'

import styles from './styles.module.scss'
import logoImg from '../../../public/images/logo.svg'
import { SignInBUtton } from '../SignInButton'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInBUtton />
      </div>
    </header>
  )
}
