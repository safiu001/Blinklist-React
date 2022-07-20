import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Template from "./Template"

const MockTemplate = ()=>{
    return (
        <BrowserRouter>
            <Template children={<div>Hello</div>} height={"980px"}/>
        </BrowserRouter>
    )
}

jest.mock('axios', () => ({
    __esModule: true,
    default: {
       get: () => ({
         data:[
            {
                link: "Entrepreneurship",
                image: "/assets/pictures/icons/Enterpreneurship.png",
                id: 1
            },
            {
                link: "Science",
                image: "/assets/pictures/icons/Science.png",
                id: 2
            }
         ]
       })
    }
}));

describe("Template", ()=>{
    test('should render the children as passed in the props', async () => {
        render(<MockTemplate />)
        const bodyElement = screen.getByText("Hello")
        expect(bodyElement).toBeInTheDocument()
    })

    it("should change the state when clicked on the drop down", async()=>{
        render(<MockTemplate />)
        const linkElement = screen.getByTestId("explore")
        fireEvent.click(linkElement)
        const navHeaderElement = await screen.findByText(/Entrepreneurship/i)
        expect(navHeaderElement).toBeInTheDocument()
    })
})