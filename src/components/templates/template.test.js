import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Template from "./Template"

const MockTemplate = ()=>{
    return (
        <BrowserRouter>
            <Template children={<div>Hello</div>} height={"980px"}/>
        </BrowserRouter>
    )
}

describe("Template", ()=>{
    test('should render the children as passed in the props', async () => {
        render(<MockTemplate />)
        const bodyElement = screen.getByText("Hello")
        expect(bodyElement).toBeInTheDocument()
    })
})