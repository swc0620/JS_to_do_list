const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon"
    },
    {
        quote: "The world is a book and those who do not travel read only one epage",
        author: "Saint Augustine"
    },
    {
        quote: "Life is either a daring adventure or nothing at all",
        author: "Helen Keller"
    },
    {
        quote: "To travle is to live",
        author: "Hans Christian Andersen"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerHTML = todaysQuote.quote;
author.innerHTML = `- ${todaysQuote.author} - `;