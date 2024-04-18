import axios from  'axios '
const SearchImage = async (term) => {
    const url = 'https://api.unplash.com/search/photos/?client_id=uJ8wJdXvQe1Zhh_uBQ_qdFkdasoQhNZNp9GOer4nRU4'
    const response = await axios.get(url, {
        params: {
            query: term

        }
    })
    console.log(response)
    return response.data.results

}

export default SearchImage
