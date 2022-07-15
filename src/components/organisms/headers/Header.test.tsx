import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

const mockExploreClick = jest.fn()

const MockHeader = ()=>{
    return (
        <BrowserRouter>
            <Header handleExplore={mockExploreClick}/>
        </BrowserRouter>
    )
}

describe("Header", ()=>{
    it('should render Explore Text', async () => {
        render(<MockHeader />)
        const exploreDropDownElement = screen.getByText("Explore")
        expect(exploreDropDownElement).toBeInTheDocument()
    })

    it('should able to Click Explore', async () => {
        render(<MockHeader />)
        const exploreDropDownElement = screen.getByTestId("explore")
        fireEvent.click(exploreDropDownElement)
        expect(exploreDropDownElement).toBeInTheDocument()
    })


    it('should redner the Mylibrary Text', async () => {
        render(<MockHeader />)
        const linkElement = screen.getByText("My Library")
        expect(linkElement).toBeInTheDocument()
    })

    it('should redner the Mylibrary Button', async () => {
        render(<MockHeader />)
        const linkElement = screen.getByTestId("myLibrary")
        fireEvent.click(linkElement)
        expect(document.location.href).toBe("http://localhost/")
    })

    it("should render the DropDown Arrow of Accounts", async ()=>{
        render(<MockHeader />)
        const arrowDownElement = screen.getByTestId("arrowDown")
        fireEvent.click(arrowDownElement)
        expect(arrowDownElement).not.toBeVisible()
    })
})