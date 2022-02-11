import React from 'react'
import TheLeftNav from './component/core/TheLeftNav'
import TheMainArticle from './component/core/TheMainArticle'
import TheMainNav from './component/core/TheMainNav'

const App: React.FC = () => (
  <div className="container mx-auto my-10 grid grid-cols-12 gap-x-10">
    <TheMainNav />
    <TheLeftNav />
    <TheMainArticle />
  </div>
)

export default App
