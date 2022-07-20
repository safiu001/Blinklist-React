import { render, screen } from "@testing-library/react"
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

jest.mock('axios', () => ({
    __esModule: true,
    default: {
       get: () => ({
         data:[
            {
                author: "Jim Collins & Bill Lazier",
                title: "Beyond Entrepreneurship",
                state: "",
                image: "/assets/pictures/beyondEntrepreneurship.png",
                time: "13-minute read",
                reads: "1.9k reads",
                category: "Trending blinks",
                id: 11
            },
            {
                author: "James Moore",
                title: "Dropshipping",
                state: "added to lib",
                image: "/assets/pictures/dropshipping.png",
                time: "12-minute read",
                category: "Just added",
                id: 9
            },
            {
                author: "Trey Gowdy",
                title: "Doesn’t Hurt to Ask",
                state: "Finished",
                image: "/assets/pictures/DoesntHurtToAsk.png",
                time: "13-minute read",
                reads: "1.9k reads",
                category: "Featured audio blinks",
                id: 3
            }
         ]
       })
    }
}));

const MockHomePage:FC = ()=>{
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

describe("Home", ()=>{
    it('should render the My library Heading', async () => {
        render(<MockHomePage />)
        const textElements = await screen.findAllByText(/My Library/i)
        expect(textElements[0]).toBeInTheDocument()
    })
})