import React, { useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';

function Card(props) {
  const [preview, setPreview] = useState(false)
  const [github, setGithub] = useState(false)
  useEffect(() => {
    props.preview === undefined && setPreview(true)
    props.github === undefined && setGithub(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="container">
      <img src={require(`../images/${props.img}`)} alt={`${props.alt}`} className="image" />
      <div className="overlay">
        <div className="text">
          <h2 className='h2_card'>{props.h1}</h2>
          <p id='p'>{props.p}</p>
          <div className='links'>
            {!preview && <button className='btn btn-light' onClick={() => window.open(`${props.preview}`, '_blank')}>Preview</button>}
            {!github && <button className='btn btn-light' onClick={() => window.open(`${props.github}`, '_blank')}>GitHub<i className="fa fa-github" aria-hidden="true" ></i></button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card