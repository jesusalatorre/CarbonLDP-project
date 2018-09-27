import React from 'react'
import Spinner from 'react-spinkit'
import './../../../styles/elements/loading.css'

const Loading = () => (
    <div className='loading'>
        <Spinner name='pacman' color="#4b7cf5"/>
    </div>
)

export default Loading
