import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Book from "./Book"
// import axios from "axios"

const MockBookPage = ()=>{
    return (
        <BrowserRouter>
            <Book />
        </BrowserRouter>
    )
}

const bookData = {
    author: "Erica Keswin",
    title: "Bring Your Human to Work",
    state: "Finished",
    image: "/assets/pictures/BringYourHumanToWork.png",
    time: "13-minute read",
    reads: "1.9k reads",
    category: "Featured audio blinks",
    id: 1
}

// jest.mock("axios")

// const fetch = async ()=>{
//     return await axios.get("http://localhost:3000/books/1")
// }

describe("Book", ()=>{

    describe("BookTexts", ()=>{

        // beforeEach(()=>{
        //     axios.get.mockResolvedValueOnce(bookData)
        // })

        it('should render the book comment', async () => {
            render(<MockBookPage bookData={bookData}/>)
            const textElement = await screen.findByText("Get the key ideas from")
            expect(textElement).toBeInTheDocument()
        })

        // it('should render the book title', async () => {
        //     axios.get.mockResolvedValueOnce(bookData)
        //     const result = await fetch()
        //     expect(bookData).toBe(result)
        // })
    })
})