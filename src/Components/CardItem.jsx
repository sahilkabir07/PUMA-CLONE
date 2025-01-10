import React from 'react'

const CardItem = ({src, title}) => {
  return (
   <div className={`bg-[url(${src})] bg-cover bg-center `} >
                <p className='w-40 p-8 font-bold text-white uppercase' >
                {title} 
                </p>
            </div>
  )
}

export default CardItem