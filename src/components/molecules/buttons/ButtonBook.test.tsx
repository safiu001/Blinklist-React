import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ButtonBook from "./ButtonBook"

const MockButtonBook = ()=>{
    return (
        <BrowserRouter>
            <ButtonBook />
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
        expect(document.location.href).toBe("http://localhost/")
    })
})