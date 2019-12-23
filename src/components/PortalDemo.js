import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
    return ReactDom.createPortal(
        <div>
            <h1>Hello Anu</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
