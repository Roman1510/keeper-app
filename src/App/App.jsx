import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Note from '@/components/Note'
import CreateArea from '@/components/CreateArea'

function App() {
  let localArr = JSON.parse(localStorage.getItem('arr'))
  const [arr, setArr] = useState(localArr ? localArr : [])
  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(arr))
  }, [arr])
  function onAdd(e) {
    if (e.title !== '') {
      setArr(() => {
        return [...arr, e]
      })
    } else {
      alert('There must be a title')
    }
  }
  function onDelete(id) {
    setArr(() => {
      return arr.filter((_, i) => i !== id)
    })
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={onAdd} />
      {arr.map((e, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={e.title}
            content={e.note}
            onDelete={onDelete}
          />
        )
      })}
      <Footer />
    </>
  )
}

export default App
