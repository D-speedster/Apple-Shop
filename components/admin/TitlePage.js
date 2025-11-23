import React from 'react'

export default function TitlePage({ title }) {
    return (
        <div className='TitlePage'>
            <h5 className='d-flex align-items-center' style={{ height: '100%' }}>{title}</h5>
        </div>
    )
}
