import { useState } from 'react'
import styles from './App.module.css'
import Header from '../src/components/Header'
import Main from '../src/components/Main';
import MetricList from './components/MetricList';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={styles.metric__container}>
        <MetricList />
      </div>
    </>
  )
}

export default App
