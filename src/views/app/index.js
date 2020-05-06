import React, { useEffect } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import marina from 'assets/marina.jpg'
import { getMusic } from 'modules/user/actions'

import styles from './styles.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMusic())
  }, [dispatch])

  return (
    <section className={styles.body}>
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
    </section>
  )
}

export default App
