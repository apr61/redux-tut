import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="max-w-[40rem] mx-auto">
                <Outlet />
            </main>
        </>
    )
}
