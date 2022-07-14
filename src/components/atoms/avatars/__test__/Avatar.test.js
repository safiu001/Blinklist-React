import { render, screen } from "@testing-library/react"
import AvatarUser from "../AvatarUser"


describe("AvatarUser", ()=>{
    test('should Render the Avatar with the given text', async () => {
        render(<AvatarUser children={"A"}/>)
        const textElement = screen.getByText("A")
        expect(textElement.textContent).toBe("A")
    })
})