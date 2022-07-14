import { render, screen } from "@testing-library/react"
import TabsBook from "./TabsBook"


describe("TabsBook", ()=>{
    it('should render all the tabs', async () => {
        render(<TabsBook />)
        const tabElements = screen.getAllByRole("tab")
        expect(tabElements.length).toBe(3)
    })

    it('should render the First panels text', async () => {
        render(<TabsBook />)
        const tabElements = screen.getByRole("tabpanel", {value: "one"})
        expect(tabElements).toBeInTheDocument()
    })

    it('should render the Second Panel Text', async () => {
        render(<TabsBook />)
        const tabElements = screen.getByRole("tabpanel", {value: "two"})
        expect(tabElements).toBeInTheDocument()
    })

    it('should render the Third Panel Text', async () => {
        render(<TabsBook />)
        const tabElements = screen.getByRole("tabpanel", {value: "three"})
        expect(tabElements).toBeInTheDocument()
    })
})