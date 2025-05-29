import { useState } from 'react'
import './App.css'
import ContentContainer from './ContentContainer';
import StockCompanyPicker from './StockCompanyPicker';

function App() {

  return (
    <>
      <StockCompanyPicker/>
      <ContentContainer/>
    </>
  )
}

export default App
