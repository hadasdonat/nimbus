import { Outlet } from "react-router"
import Header from "../components/Header"
function Layout() {
    return (
        <div className="flex flex-col items-center min-h-screen w-full bg-white">
            <Header />
            <main className="w-full">

                <Outlet />
            </main>
        </div>
    )
}

export default Layout