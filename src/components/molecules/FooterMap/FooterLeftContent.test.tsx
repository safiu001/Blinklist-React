import { render, screen } from "@testing-library/react"
import FooterLeftContent from "./FooterLeftContent"

describe("FooterLeftContent", ()=>{
    it('should render the text of Footer', async () => {
        render(<FooterLeftContent />)
        const textElement = screen.getByText(/Big ideas in small packages/i)
        expect(textElement).toBeInTheDocument()
    })
})