import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ExtendedNav from "./ExtendedNav"

const MockExtendedNav = ()=>{
    return (
        <BrowserRouter>
            <ExtendedNav />
        </BrowserRouter>
    )
}

describe("ExtendedNav", ()=>{
    it('should return the nav item', async () => {
        render(<MockExtendedNav />)
        const buttonElements = screen.getAllByRole("tab")
        expect(buttonElements.length).toBe(3)
    })

    describe("ExtendedNavCardDetails", ()=>{
        it("should return the grid element", async ()=>{
            render(<MockExtendedNav />)
            const gridTextElement = await screen.findByText(/Entrepreneurship/i)
            expect(gridTextElement).toBeInTheDocument()
        })

        it("should return the icon Image", async ()=>{
            render(<MockExtendedNav />)
            const gridTextElement = await screen.findByTestId(1)
            expect(gridTextElement).toBeInTheDocument()
        })

        it("should handle click in the nav", async ()=>{
            render(<MockExtendedNav />)
            const gridTextElement = await screen.findByTestId(1)
            fireEvent.click(gridTextElement)
            expect(document.location.href).toBe("http://localhost/category/Entrepreneurship")
        })
    })
})