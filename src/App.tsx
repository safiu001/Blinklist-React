import { createTheme, Theme, ThemeProvider } from '@mui/material/styles'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Book from './pages/Book'
import Category from './pages/Category'
import Home from './pages/Home'

type Props = {}

const theme:Theme = createTheme({
    typography: {
        fontFamily: "Cera Pro"
    }
})

const App = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/category/:name' element={<Category />} />
                    <Route path='/books/:id' element={<Book />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App