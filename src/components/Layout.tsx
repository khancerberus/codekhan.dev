import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen flex-col-reverse content-center items-center sm:flex-row sm:justify-center justify-around">
      <Navbar />

      <main className="flex w-screen flex-col sm:h-screen">
        <Outlet />
      </main>
    </div>
  )
}
