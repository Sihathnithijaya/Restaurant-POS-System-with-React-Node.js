import { BrowserRouter as Route, Router, Routes } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Auth" element={<AboutPage />} />
          <Route path="/Orders" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
