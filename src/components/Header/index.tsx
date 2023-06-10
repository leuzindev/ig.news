import Image from 'next/image'

import styles from './styles.module.scss'
import logoImg from '../../../public/images/logo.svg'

import { SignInBUtton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassname={styles.active}>
            Home
          </ActiveLink>
          <ActiveLink href="/posts" activeClassname={styles.active}>
            Posts
          </ActiveLink>
        </nav>
        <SignInBUtton />
      </div>
    </header>
  )
}
