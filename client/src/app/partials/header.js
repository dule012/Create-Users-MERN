import React from 'react'
import { Link } from 'react-router-dom'

const Header = (prosp) => {
    return (
        <header className="container-fluid">
            <div className="row">
                <Link to="/home" className="col-2 offset-4">List of Users</Link>
                <Link to="/newuser" className="col-2">New User </Link>
            </div>
        </header>
    )
}

export default Header