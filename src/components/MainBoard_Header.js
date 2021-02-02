import React from 'react'
import styled from 'styled-components'
import eventPoster from '../static/images/logo.png'

const MainBoard_Img=styled.div`
    position:absolute;
  width: 100%;
  height: 950px;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.3) 10%,
      rgba(20, 20, 20, 1) 90%,
      rgba(20, 20, 20, 1)
    ),
    url(${eventPoster});
  //background-size: cover;
`

function MainBoard_Header(){
    return(
        <MainBoard_Img>
            {/* <img className='mainBoard_poster' src={eventPoster}/> */}
        </MainBoard_Img>
    )
}

export default MainBoard_Header