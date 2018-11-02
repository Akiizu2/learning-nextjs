import { useEffect } from 'react'
import { Navbar } from '../feature'

function Index(props) {
  return (
    <div>
      <Navbar />
      Index
      </div>
  )
}

Index.getInitialProps = async ({ query }) => {
  const test = query
  return {
    test
  }
}

export default Index