import { render, screen } from "@testing-library/react"
import FooterInfo from "./FooterInfo"


describe("FooterInfo", ()=>{
    test('should return the footer text', async () => {
        render(<FooterInfo />)
        const footerTextElement = screen.getByText(/BlinkList/i)
        expect(footerTextElement).toBeInTheDocument()
    })
})