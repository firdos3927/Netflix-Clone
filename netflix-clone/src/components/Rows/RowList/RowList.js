import React from 'react'
import Row from '../Row/Row'

const RowList = () => {
    const API_KEY =process.env.REACT_APP_API_KEY
  return (
    <>
    

    <Row
     
     title="NETFLIX ANIMATION MOVIES"
     fetchUrl = {`/discover/movie?api_key=${API_KEY}&with_genres=16`}
     isLargeRow={1}
     
   />

    <Row
     
     title="NETFLIX DOCUMENTARIES"
     fetchUrl = {`/discover/movie?api_key=${API_KEY}&with_genres=99`}
     isLargeRow={1}
     
   />

    </>
  )
}

export default RowList
