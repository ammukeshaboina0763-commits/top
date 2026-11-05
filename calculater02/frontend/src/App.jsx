import {useState} from 'react'


function App() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [opt, setOpt] = useState('add')
  const [result, setResult] = useState(null)
  const cal=async () => {
    if(a.trim()==='' || b.trim()===''){
      alert('Please enter the numbers')
      return
    }
    else if(isNaN(a) || isNaN(b)){
      alert('Please enter valid numbers')
      return
    }
    const response = await fetch(`http://localhost:5000/${opt}/${a}/${b}`)
    const data = await response.json()
    if(data.success){
      setResult(data.data)
    }else{
      setResult(data.message)
    }
  
  }

   
  return(
    <div className='min-h-screen flex flex-col items-center justify-content-center bg-yellow-100 p-5 border-2 border-black'>
   
         <h1 className='text-italic text-3xl'>Calculator</h1>
     <input className='border p-3 mb-3' placeholder='enter your first number' value={a} onChange={(e) => setA(e.target.value)}></input>
     <input className='border p-3 mb-3' placeholder='enter your second number' value={b} onChange={(e) => setB(e.target.value)}></input>
     <select className='border p-3 mb-3' value={opt} onChange={(e) => setOpt(e.target.value)}>
        <option value='add'>Add</option>
        <option value='sub'>Subtract</option>
        <option value='mul'>Multiply</option>
        <option value='div'>Divide</option>
     </select>
     <button onClick={cal} className='bg-blue-500 text-white px-6 py-3'>calculate</button>
     <h2 className='text-xl font-bold mt-5'>Result: {result}</h2>
    </div>
 
  )
}
 export default App;