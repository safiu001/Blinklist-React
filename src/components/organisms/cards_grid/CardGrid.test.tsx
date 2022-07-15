import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CardsGrid from "./CardsGrid"

const booksData=[
    {
        author: "Erica Keswin",
        title: "Bring Your Human to Work",
        state: "Finished",
        image: "/assets/pictures/BringYourHumanToWork.png",
        time: "13-minute read",
        reads: "1.9k reads",
        category: "Featured audio blinks",
        id: 1
    }
]

const MockCardGrid = ()=>{
    return(
        <BrowserRouter>
            <CardsGrid data={booksData}/>
        </BrowserRouter>
    )
}

describe("CardGrid", ()=>{
    it('should render the Grid Items', async () => {
        render(<MockCardGrid />)
        const gridElement = screen.getByTestId(booksData[0].id)
        expect(gridElement).toBeInTheDocument()
    })

    it("should change the state when props is changed", ()=>{
        render(
            <BrowserRouter>
                <CardsGrid data={booksData} category={true}/>
            </BrowserRouter>
        )
        const gridElement = screen.getByText(booksData[0].title)
        expect(gridElement).toBeInTheDocument()
    })
})