import { fireEvent, render, screen } from "@testing-library/react"
import axios, { AxiosResponse } from "axios"
import { BrowserRouter } from "react-router-dom"
import ExtendedNav from "./ExtendedNav"

const MockExtendedNav = ()=>{
    return (
        <BrowserRouter>
            <ExtendedNav />
        </BrowserRouter>
    )
}

const iconData={
    data: [
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
]} as AxiosResponse

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

const fetch = async ()=>{
    const response = await axios.get("http://localhost:3000/exploreIcons")
    return response.data
}


describe("ExtendedNav", ()=>{
    describe("ExtendedNav Navigation Tab", ()=>{
        it('should return the nav item', async () => {
            render(<MockExtendedNav />)
            const buttonElements = screen.getAllByRole("tab")
            expect(buttonElements.length).toBe(3)
        })

        it("should change the tab when clicked", async ()=>{
            render(<MockExtendedNav />)
            const buttonElement = screen.getByRole("tab", {name: "See recently added titles"})
            fireEvent.click(buttonElement)

            const tabPanelElement = screen.getByText("Finished")
            expect(tabPanelElement).toBeInTheDocument()
        })
    })


    describe("ExtendedNavCardDetails", ()=>{
        // afterEach(() => {
        //     jest.restoreAllMocks();
        // });

        beforeEach(()=> {
            mockedAxios.get.mockResolvedValueOnce(iconData)
        })

        it("should return the grid element", async ()=>{
            render(<MockExtendedNav />)
            const gridTextElement = await screen.findByText(/Entrepreneurship/i)
            expect(gridTextElement).toBeInTheDocument()
        })

        it("should return the icon Image", async ()=>{
            render(<MockExtendedNav />)
            const gridTextElement = await screen.findByTestId(1)
            expect(gridTextElement).toBeInTheDocument()
        })

        it("should handle click in the nav", async ()=>{
            render(<MockExtendedNav />)
            const gridTextElement = await screen.findByTestId(1)
            fireEvent.click(gridTextElement)
            expect(document.location.href).toBe("http://localhost/category/Entrepreneurship")
        })
    })
})