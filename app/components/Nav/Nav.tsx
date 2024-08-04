'use client'
import { link } from '@/types/index'
import Link from 'next/link'
import React from 'react';
import styles from './page.module.scss';
import DarkMode from '../DarkMode/DarkMode';

const links: Array<link> = [
  {
    id: 1,
    tittle: 'Home',
    link: '/'
  },
  {
    id: 2,
    tittle: 'Portfolio',
    link: '/portfolio'
  },
  {
    id: 3,
    tittle: 'Blog',
    link: '/blog'
  },
  {
    id: 4,
    tittle: 'About',
    link: '/about'
  },
  {
    id: 5,
    tittle: 'Contact',
    link: '/contact'
  },
  {
    id: 6,
    tittle: 'Dashboard',
    link: '/dashboard'
  },
]

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>  Lamamia</Link>
      <DarkMode />
      <div className={styles.links}> 
        {links.map(link => (
         <Link key={link.id} href={link.link} className={styles.link}>{link.tittle}</Link> 
        ))}
      </div>
      <button className={styles.logout} onClick={() => {console.log('Log Out')}}>Logout</button>
    </div>
  )
}

export default Nav