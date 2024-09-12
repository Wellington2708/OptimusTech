import { useState } from 'react'
import styles from './App.module.css'
import Header from '../src/components/Header'
import Main from '../src/components/Main';
import MetricList from './components/MetricList';
import Vacancies from './components/Vacancies/index';
import DesignArea from './components/DesignArea';
import SoftwareDeveloperArea from './components/SoftwareDeveloperArea';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={styles.metric__container}>
        <MetricList />
      </div>
      <Vacancies />
      <DesignArea />
      <SoftwareDeveloperArea />
    </>
  )
}

export default App
