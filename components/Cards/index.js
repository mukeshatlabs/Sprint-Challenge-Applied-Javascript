// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const createArticleCard = (article) => {
    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const srcImg = document.createElement('img')
    const authorSpan = document.createElement('span')

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imageDiv.classList.add('img-container')

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imageDiv)
    authorDiv.appendChild(authorSpan)
    imageDiv.appendChild(srcImg)

    headlineDiv.textContent = article.headline
    srcImg.src = article.authorPhoto
    authorSpan.textContent = article.authorName

    return cardDiv
}

const cardsDiv = document.querySelector('.cards-container')

const userURL = `https://lambda-times-backend.herokuapp.com/articles`
axios.get(userURL)
.then(response => {
    // console.log(response.data.articles)
    // // console.log(Object.keys(response.data.articles))
    // const topics = Object.keys(response.data.articles)

    // // // console.log(topics)
    // // topics.forEach(topic =>{
    // //     const obj = `response.data.articles.${topic}`
    // //     console.log(obj)
    // //     // obj.forEach(article => {
    // //     //     const articleCard = createArticleCard(element)
    // //     //     cardsDiv.appendChild(articleCard)
    // //     // })
    // // })
    response.data.articles.javascript.forEach(element => {
        const articleCard = createArticleCard(element)
        cardsDiv.appendChild(articleCard)
    });
    response.data.articles.bootstrap.forEach(element => {
        const articleCard = createArticleCard(element)
        cardsDiv.appendChild(articleCard)
    });
    response.data.articles.technology.forEach(element => {
        const articleCard = createArticleCard(element)
        cardsDiv.appendChild(articleCard)
    });
    response.data.articles.jquery.forEach(element => {
        const articleCard = createArticleCard(element)
        cardsDiv.appendChild(articleCard)
    });
})
.catch(err=>{
  console.log(err)
})
