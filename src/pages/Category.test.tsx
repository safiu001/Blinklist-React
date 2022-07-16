import { fireEvent, render, screen } from "@testing-library/react"
import { FC } from "react"
import { BrowserRouter } from "react-router-dom"
import Category from "./Category"

const MockCategory:FC = ()=>{
    return(
        <BrowserRouter>
            <Category />
        </BrowserRouter>
    )
}

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

describe("Category", ()=>{

    describe("Category with SubCategory", ()=>{
        it('should render the Trending Blinks Text', async () => {
            render(<MockCategory />)
            const trendingBlinksText = await screen.findByText("Trending blinks")
            expect(trendingBlinksText).toBeInTheDocument()
        })
    
        it("should render the Featured Blinks", async ()=>{
            render(<MockCategory />)
            const featuredBlinksText = await screen.findByText(/Featured/i)
            expect(featuredBlinksText).toBeInTheDocument()
        })

        it("should render the Just added Blinks", async ()=>{
            render(<MockCategory />)
            const justAddedBlinksText = await screen.findByText(/Just added/i)
            expect(justAddedBlinksText).toBeInTheDocument()
        })
    })

    describe("Category Search integration", ()=>{
        it("should able to filter the results based on the search", async ()=>{
            render(<MockCategory />)
            const textElement = await screen.findByText(/Jim/i)
            const inputElement = await screen.findByPlaceholderText(/Search by title or author/i) as HTMLInputElement
            fireEvent.change(inputElement, {target: {value: "Jim"}})
            expect(textElement).toBeInTheDocument()
        })
    })
})