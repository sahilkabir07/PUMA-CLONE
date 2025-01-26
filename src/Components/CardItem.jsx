import React from 'react'

const CardItem = ({ src, title }) => {
  return (
    <div style={{ backgroundImage: `url(${src})` }}
      className='bg-cover bg-center h-64 '>
      <p className='w-40 p-8 font-bold text-white uppercase' >
        {title}
      </p>
    </div>
  )
}

export default CardItem