import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Book from "./Book"

const MockBookPage = ()=>{
    return (
        <BrowserRouter>
            <Book />
        </BrowserRouter>
    )
}

jest.mock('axios', () => ({
    __esModule: true,
    default: {
       get: () => ({
         data: {
            author: "Jim Collins & Bill Lazier",
            title: "Beyond Entrepreneurship",
            state: "",
            image: "/assets/pictures/beyondEntrepreneurship.png",
            time: "13-minute read",
            reads: "1.9k reads",
            category: "Trending blinks",
            id: 11
          }
       })
    }
}));


describe("Book", ()=>{

    describe("BookTexts", ()=>{
        it('should render the book comment', async () => {
            render(<MockBookPage />)
            const textElement = await screen.findByText("Get the key ideas from")
            expect(textElement).toBeInTheDocument()
        })
    })
})