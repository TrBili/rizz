"use client"
import { useState } from 'react'
import Form from '@/components/Form'
import Result from '@/components/Result.jsx'
import { calculate } from "@/utility/helpers" // I added this function beforehand

// the @ reference to the root level

export default function Home() {
  const [score, setScore]= useState(0);
  
  function calculateScore(name, major){
    setScore(calculate(name, major));
  }
  
  
  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Hello 👋</h1>
      <p>
        We're so glad you're here 
      </p>
      {score== 0 ?
      <Form handleCalculate={calculateScore}/>
      : <Result score={score}/>
      }
      {/* you can plug in any js elemnets as parameters */}
    </main>
  )
}
