import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/Home/Home'
import { Checkout } from './pages/Checkout/Checkout'
import { Success } from './pages/Success/Success'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={<Success />} />
            </Route>
        </Routes>
    )
}