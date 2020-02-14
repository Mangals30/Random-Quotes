const generateButton = document.querySelector('.generate')
const innerDiv = document.querySelector('.inner-div')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

const randomQuotes = () => {
    const index = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[index]
    return randomQuote
}

generateButton.addEventListener('click',event => {
    const randomQuote = randomQuotes()
    quote.innerHTML = '<i class="fas fa-quote-left fa-3x"></i>' +randomQuote.quote
    author.textContent = randomQuote.author
    
})