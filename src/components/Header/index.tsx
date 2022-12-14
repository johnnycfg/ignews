import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import styles from './styles.module.scss';
import React from 'react';
import { ActiveLink } from '../ActiveLink';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="Logo ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>          
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}