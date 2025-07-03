import { useState } from 'react'
import clsx from 'clsx'

const Button = (props) => {
  const { onClick, value, isActive} = props

  return (
    <button className={clsx('cursor-pointer focus:text-black', isActive && 'text-black' )} onClick={onClick}>{value}</button>
  )
}

function App() {
  const [text, setText] = useState('')
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(content === "1"){
      setText('Positive content')
      // setContent('1')
    }else if (content === '2'){
      setText('Negative content')
    }else if(content === '3'){
      setText('Neutral content')
    }else {
      window.alert('index is invalid')
      setContent('')
      setText('')
    }

  }

  const onPositive = () => {
    setContent('')
    setText('Positive content')
    // setContent('1')
  }
  const onNegative = () => {
    setContent('')
    setText('Negative content')
    // setContent('2')
  }
  const onNeutral = () => {
    setContent('')
    setText('Neutral content')
    // setContent('3')
  }
  
  
  return (
    <div className='w-[700px] h-[250px] bg-white border-gray-200 border-2 rounded-sm p-8'>
      <form className='text-2xl flex justify-between items-center gap-4' onSubmit={handleSubmit}>
        <input type='number' placeholder='Enter tab index' className='border-b-3 border-gray-300 flex-1 py-5' value={content} onChange={(e) => setContent(e.target.value)} />
        <button className='bg-gray-100 hover:bg-gray-300 px-6 py-4 rounded-sm cursor-pointer'>Change tab</button>
      </form>
      <div className='text-xl font-bold w-[300px] flex justify-between mt-8 mb-6 text-gray-300'>
        <Button onClick={onPositive} value="POSITIVE" isActive={content === '1'} />
        <Button onClick={onNegative} value="NEGATIVE" isActive={content === '2'} />
        <Button onClick={onNeutral} value="NEUTRAL" isActive={content === '3'} />
      </div>
      <p className='text-2xl'>{text}</p>
    </div>
  )
}

export default App
