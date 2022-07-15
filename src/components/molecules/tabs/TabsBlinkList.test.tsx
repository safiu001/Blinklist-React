import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TabsBlinkList from "./TabsBlinkList"

jest.mock("axios")
const booksData = [
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

const MockTabsBlinkList = ()=>{
    return (
        <BrowserRouter>
            <TabsBlinkList data={booksData}/>
        </BrowserRouter>
    )
}

describe("TabsBlinkList", ()=>{
    it('should render the Tabs', async () => {
        render(<MockTabsBlinkList />)
        const tabElements = screen.getAllByRole("tab")
        expect(tabElements.length).toBe(2)
    })

    it("should render the Tab panel one", async ()=>{
        render(<MockTabsBlinkList />)
        const tabOne = screen.getByRole("tab", {name: "Currently Reading"})
        fireEvent.click(tabOne)
        const tabPanelOne = screen.getByRole("tabpanel")
        expect(tabPanelOne).toBeInTheDocument()
    })
    
    it("should render the Tab panel two", async ()=>{
        render(<MockTabsBlinkList />)
        const tabTwo = screen.getByRole("tab", {name: "Finished"})
        fireEvent.click(tabTwo)
        const tabPanelTwo = screen.getByRole("tabpanel")
        expect(tabPanelTwo).toBeInTheDocument()
    })
})