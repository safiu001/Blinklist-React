import { render, screen } from "@testing-library/react"
import FooterNav from "./FooterNav"

describe("FooterNav", ()=>{
    it('should render Editorial Grid Element', async () => {
        render(<FooterNav />)
        const editorialText = screen.getByText(/Book lists/i)
        expect(editorialText).toBeInTheDocument()
    })

    it("should render Useful links Grid Element", async ()=>{
        render(<FooterNav />)
        const usefulLinksText = screen.getByText(/Pricing/i)
        expect(usefulLinksText).toBeInTheDocument()
    })

    it("should render Company Grid Element", async ()=>{
        render(<FooterNav />)
        const companyText = screen.getByText(/About/i)
        expect(companyText).toBeInTheDocument()
    })
})