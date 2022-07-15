import { fireEvent, render, screen } from "@testing-library/react"
import SearchBar from "./SearchBar"

const mockSearchMethod = jest.fn()

describe("SearchBar", ()=>{
    it('should render the Search Input', async () => {
        render(<SearchBar onSearch={mockSearchMethod}/>)
        const inputElement = screen.getByPlaceholderText("Search by title or author")
        expect(inputElement).toBeInTheDocument()
    })

    it('should able to enter the text', async () => {
        render(<SearchBar onSearch={mockSearchMethod}/>)
        const inputElement = screen.getByPlaceholderText("Search by title or author") as HTMLInputElement
        fireEvent.change(inputElement, {target: {value: "Hello"}})
        expect(inputElement.value).toBe("Hello")
    })
})