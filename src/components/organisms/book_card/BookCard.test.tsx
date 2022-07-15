import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import BookCard from "./BookCard"
import axios from "axios";

const bookData={
    author: "Erica Keswin",
    title: "Bring Your Human to Work",
    state: "Finished",
    image: "/assets/pictures/BringYourHumanToWork.png",
    time: "13-minute read",
    reads: "1.9k reads",
    category: "Featured audio blinks",
    id: 1
}

type Props = {
    state?: string
}

const mockGridCLick = jest.fn()

const MockBookCardHome = ({state}: Props)=>{
    if(state === undefined)
        state = "Finished"
    return (
        <BrowserRouter>
            <BookCard bookData={{
                        ...bookData,
                        state: state
                        }} category={false} onClick={mockGridCLick}/>
        </BrowserRouter>
    )
}

const MockBookCardCategory = ({state}: Props)=>{
    if(state === undefined)
        state = "Finished"
    return (
        <BrowserRouter>
            <BookCard bookData={{
                        ...bookData,
                        state: state
                        }} category={true} onClick={mockGridCLick}/>
        </BrowserRouter>
    )
}

jest.mock("axios")

describe("BookCard", ()=>{
    describe("BookCardTexts", ()=>{
        test("should render the title", async ()=>{
            render(<MockBookCardHome />)
            const titleTextElement = screen.getByText(bookData.title)
            expect(titleTextElement).toBeInTheDocument()
        })
    
        test("should render the author", async ()=>{
            render(<MockBookCardHome />)
            const authorTextElement = screen.getByText(bookData.author)
            expect(authorTextElement).toBeInTheDocument()
        })
    
        test("should render the time required to read", async ()=>{
            render(<MockBookCardHome />)
            const timeTextElement = screen.getByText(bookData.time)
            expect(timeTextElement).toBeInTheDocument()
        })
    
        test("should render the reads", async ()=>{
            render(<MockBookCardHome />)
            const readsTextElement = screen.getByText(bookData.reads)
            expect(readsTextElement).toBeInTheDocument()
        })
    })

    describe("BookCardButtonLinks", ()=>{
        test("should render the add button", async ()=>{
            render(<MockBookCardCategory state={""}/>)
            const buttonElement = screen.getByRole("button", {name: /Add to Library/i})
            expect(buttonElement).toBeInTheDocument()
        })

        test("should render the finish Link", async ()=>{
            render(<MockBookCardHome state={"added to lib"}/>)
            const linkElement = screen.getByText(/Finished Reading/i)
            expect(linkElement).toBeInTheDocument()
        })

        test("should render the Read again Link", async ()=>{
            render(<MockBookCardHome />)
            const linkElement = screen.getByText(/Read Again/i)
            expect(linkElement).toBeInTheDocument()
        })
    })

    describe("BookCardHandleClick", ()=>{
        it("should update the API with add Button", async ()=>{
            render(<MockBookCardCategory state={""}/>)
            
            const buttonElement = screen.getByRole("button", {name: /Add to Library/i})
            fireEvent.click(buttonElement)

            expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/books/${bookData.id}`, {
                ...bookData, state: "added to lib"
            });
        })

        it("should update the API with finished Button", async ()=>{
            render(<MockBookCardHome state={"added to lib"}/>)
            
            const linkElement = screen.getByText(/Finished Reading/i)
            fireEvent.click(linkElement)

            expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/books/${bookData.id}`, {
                ...bookData, state: "Finished"
            });
        })

        it("should update the API with Read Again Button", async ()=>{
            render(<MockBookCardHome state={"Finished"}/>)
            
            const linkElement = screen.getByText(/Read Again/i)
            fireEvent.click(linkElement)

            expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/books/${bookData.id}`, {
                ...bookData, state: "added to lib"
            });
        })
    })
})