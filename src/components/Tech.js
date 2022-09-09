import React from 'react'

function Tech(props) {
    return (<React.Fragment>
        <img src={require(`../images/${props.src}`)} className='mr_2 logo' alt={`${props.alt}`} /> <div className='align_v'> {props.h2 === 'JavaScript' || props.h2 === 'MongoDB' || props.h2 === 'Bootstrap' ? <h3>{props.h2}</h3> : <h2>{props.h2}</h2>}</div>
    </React.Fragment>
    )
}

export default Tech