import { render, screen } from "@testing-library/react"
import Footer from "./Footer"


describe("Footer", ()=>{
    it('should', async () => {
        render(<Footer />)
        const footerElement = screen.getByTestId("footer")
        expect(footerElement).toBeInTheDocument()
    })
})