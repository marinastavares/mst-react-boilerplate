import React from 'react'
import moment from 'moment'

// eslint-disable-next-line import/no-unresolved
import marina from '_assets/marina.jpg'
import styles from './styles.css'

const App = () => (
  <body className={styles.body}>
    <div className={styles.header}>
      <img src={marina} alt="Marina" className={styles.img} />
    </div>
    <div className={styles.info}>
      <h1 className={styles.name}>Marina Silva Tavares</h1>
      <h1 className={styles.name}>@marinastavares</h1>
      <h2 className={styles.days}>
        Estou
        {' '}
        {moment('20200505', 'YYYYMMDD').locale('pt-br').fromNow()}
        {' '}
        sem mexer
        nesse projeto
      </h2>
    </div>
  </body>
)

export default App
