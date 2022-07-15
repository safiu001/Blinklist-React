import { render, screen } from "@testing-library/react"
import Logo from "./Logo"


describe("Logo", ()=>{
    test('should render the Logo with the link', async () => {
        render(<Logo link="/assets/pictures/Blinklist" />)
        const imageElement = screen.getByAltText("Blink List Logo")
        expect(imageElement.attributes[0].value).toBe("/assets/pictures/Blinklist")
    })
})