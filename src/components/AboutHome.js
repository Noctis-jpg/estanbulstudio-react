import React from 'react'

const AboutHome = () => {
  return (
    <div className="AboutHome">
        <div className='container'>
    <div className="row">
      <div className="col-lg-6 pad-0">
        <div className="LeftPicture">
          <img className="img-fluid" src="https://via.placeholder.com/740x900/ebebeb/000"></img>
          <div className='LeftHeading'>
            <h2>Stüdyo Kiralama</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique a est in rutrum. Mauris iaculis arcu sed dolor consectetur sodales. Aliquam erat volutpat. </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 pad-0">
        <div className="RightTwoPicture">
          <img className="img-fluid Ust" src="https://via.placeholder.com/748x420/ebebeb/000"></img>
        </div>
        <div className='RightTwoPicture2'>
        <img className="img-fluid Alt" src="https://via.placeholder.com/748x420/ebebeb/000"></img>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default AboutHome