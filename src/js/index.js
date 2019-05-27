import Search from './models/Search'

const state = {}

const controlSearch = async () => {
    // Notes: 1. Get Query from view
    const query = 'pizza'

    if (query) {
        // Notes: 2. New search object and add to state
        state.search = new Search(query)

        // Notes: 3. Prepare UI for results

        // Notes: 4. Search for recipes
        await state.search.getResults()

        // Notes: 5. Render results on UI
        console.log(state.search.result)
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()
})
