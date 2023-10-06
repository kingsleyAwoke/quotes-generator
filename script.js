let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"efrr"`,
    person: "kingsley"
},
{
    quote: '"happy"',
    person: "cki"
},
{
    quote: '"you are good"',
    person: "man"
},
{
    quote: '"oka okay"',
    person: "woman"
}];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
