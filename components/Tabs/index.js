// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const createTab = ()=>{
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    return tabDiv
}

const topicSpan = document.querySelector('.tabs .topics .title')

const topicsURL = `https://lambda-times-backend.herokuapp.com/topics`
axios.get(topicsURL)
.then(response => {
    response.data.topics.forEach(element => {
        const tabDiv = createTab()
        tabDiv.textContent = element
        topicSpan.appendChild(tabDiv)
    });
})
.catch(err=>{
console.log(err)
})