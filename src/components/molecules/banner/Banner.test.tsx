import { render, screen } from "@testing-library/react"
import Banner from "./Banner"


describe("Banner", ()=>{
    test('should render the Banner Image with the Link', async () => {
        render(<Banner />)
        const imageElement = screen.getByAltText("reading Book")
        expect(imageElement.attributes[0].value).toBe("/assets/pictures/explore.png")
    })

    test('should render the heading of the banner as required', async () => {
        render(<Banner />)
        const headingElement = screen.getByText("Explore Books on entrepreneurship")
        expect(headingElement).toBeInTheDocument()
    })

    test('should render the text of the banner as required', async () => {
        render(<Banner />)
        const textElement = screen.getByText(/Everything you need/i)
        expect(textElement).toBeInTheDocument()
    })
})