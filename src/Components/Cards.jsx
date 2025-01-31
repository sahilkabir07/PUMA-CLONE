import React from 'react'
import CardItem from './CardItem'

const Cards = () => {
  return (
    <div className='h-1/2' >
      <div className='w-full h-24 flex items-center justify-center'>
        <p className='text-3xl font-medium'>SAVE BIG, PLAY BIGGER</p>
      </div>
      <div className='flex items-center justify-center flex-wrap  h-64 gap-20 '>
        <CardItem title='RUNNING' src='https://www.puma-catchup.com/wp-content/uploads/2023/03/Header-8.png' />
        <CardItem title='FOOTBALL' src='https://about.puma.com/sites/default/files/styles/dd_preview_slider/public/media/images/24ss_king.png?itok=7G8EzbyX' />
        <CardItem title='TRAINING' src="https://annual-report.puma.com/2023/en/company-overview/run-train/run-train_04.jpg" />
        <CardItem title='BASKETBALL' src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30165960/2024/12/9/40dd66a9-1e9f-4993-a6be-56f2d2162f111733746077866-Puma-Mens-Genetics-Speckle-Basketball-Shoes-1121733746077540-1.jpg' />
        <CardItem title='STUDIO' src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_550,h_550/global/525680/01/mod03/fnd/EEA/fmt/png/CLOUDSPUN-Rib-High-Waist-Tights-Women" />
      </div>
    </div>
  )
}

export default Cards