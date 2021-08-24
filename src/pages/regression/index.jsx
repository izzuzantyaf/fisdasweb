import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

// level 0 component
export default function Template() {

    useEffect(() => {
        window.scrollTo(0, 0)
        // go to regression calculator site
        window.open("https://regresi.msatrio.com/", "_blank")
    })

    return (
        <div>
            {/* back to homepage */}
            <Redirect to="/" />
        </div>
    )
}