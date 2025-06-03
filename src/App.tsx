import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <h2>Hello Mom  AGAIN</h2>
      <iframe title="JD Sales Dashboard" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=80ba9615-bd2f-4ca3-b946-360c95e4eadc&autoAuth=true&ctid=d918c084-0755-4a33-8652-e1ec7e4406e1" frameborder="0" allowFullScreen="true"></iframe>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
