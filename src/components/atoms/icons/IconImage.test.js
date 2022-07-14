import { render, screen } from "@testing-library/react"
import IconImage from "./IconImage"


describe("IconImage", ()=>{
    test('should return the Icon of the Image link', async () => {
        render(<IconImage link="/assets/pictures/icons/Science"/>)
        const imageElement = screen.getByAltText("Icon")
        expect(imageElement.attributes.src.value).toBe("/assets/pictures/icons/Science")
    })
})