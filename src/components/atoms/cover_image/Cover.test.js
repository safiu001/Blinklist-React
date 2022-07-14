import { render, screen } from "@testing-library/react"
import Cover from "./Cover"


describe("BookCover", ()=>{
    test('should render the image passed to the link', async () => {
        render(<Cover link={"/assets/pictures/beingBoss.png"}/>)
        const imageElement = screen.getByAltText("BookCover")
        expect(imageElement.attributes.src.value).toBe("/assets/pictures/beingBoss.png")
    })
})