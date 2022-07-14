import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TabsBlinkList from "./TabsBlinkList"

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
        const tabPanelOne = screen.getByRole("tabpanel", {value: "one"})
        expect(tabPanelOne).toBeInTheDocument()
    })
    
    it("should render the Tab panel two", async ()=>{
        render(<MockTabsBlinkList />)
        const tabPanelOne = screen.getByRole("tabpanel", {value: "two"})
        expect(tabPanelOne).toBeInTheDocument()
    })
})