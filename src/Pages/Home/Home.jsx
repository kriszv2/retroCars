import React from 'react'
import SearchWindow from '../../Components/SearchWindow/SearchWindow'
import "./Home.css"
function Home() {
  return (
    <>
    <div>
      <div className="container">
        <img src="https://images.unsplash.com/photo-1507408507956-323b479060bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80" alt="car" />
        
        <SearchWindow/>
        
      </div>
    </div>
    </>
  )
}

export default Home