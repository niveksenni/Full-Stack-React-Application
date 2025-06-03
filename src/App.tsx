import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>My test Static Web Page</h2>
      <h3>So going to embed an iFrame to try and view PowerBI Dashboards</h3>
      {/* <iframe
        title="JD Sales Dashboard"
        width="1120"
        height="550"
        src="https://app.powerbi.com/reportEmbed?reportId=80ba9615-bd2f-4ca3-b946-360c95e4eadc&autoAuth=true&ctid=d918c084-0755-4a33-8652-e1ec7e4406e1"
        frameBorder="1"
        allowFullScreen={true}
      /> */}
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
