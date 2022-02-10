import React from 'react'
import TheLeftNav from './component/core/TheLeftNav'
import TheMainNav from './component/core/TheMainNav'

const App: React.FC = () => (
  <div className="container mx-auto my-10 grid grid-cols-12">
    <TheMainNav />
    <TheLeftNav />
  </div>
)

export default App
