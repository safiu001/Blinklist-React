import { fireEvent, render, screen } from "@testing-library/react"
import axios from "axios"
import { BrowserRouter } from "react-router-dom"
import ButtonBook from "./ButtonBook"

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

const MockButtonBook = ()=>{
    return (
        <BrowserRouter>
            <ButtonBook bookData={bookData}/>
        </BrowserRouter>
    )
}

jest.mock("axios")

describe("ButtonBook", ()=>{
    it('should render the Button with the text', async () => {
        render(<MockButtonBook />)
        const buttonElement = screen.getByText(/Finished Reading/i)
        expect(buttonElement).toBeInTheDocument()
    })

    it("should handle the Click", async ()=>{
        render(<MockButtonBook />)

        const buttonElement = screen.getByRole("button")
        fireEvent.click(buttonElement)
        expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/books/${bookData.id}`, 
        {...bookData, state: "Finished"})
        expect(document.location.href).toBe("http://localhost/")
    })

    it("should not fire an event if props not passed", async ()=>{
        render(
            <BrowserRouter>
                <ButtonBook />
            </BrowserRouter>
        )

        const buttonElement = await screen.findByRole("button")
        fireEvent.click(buttonElement)
        expect(axios.put).toHaveBeenCalled()
    })
})