import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <Breadcrumb
    items={[
       
      {
        title: 'Home',
      },
    ]}
  />
  <h1>Ant Design</h1>
    </>
  )
}

export default Home