import {useState} from "react"

function SearchBear({ onSubmit}){
    const[term, setTermn] = useState(' ')

const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('necesito decirle al componente padre sobre los datos ')
    onSubmit(term)

}
const handleChange = (event) =>{
console.log(event.target.value)
setTermn(event.target.value)

}
const handleClick = () => {


    onSubmit(term)

}
return (


<div>
    <h1>SearchBar</h1>
    <form onSubmit={handleFormSubmit}>
        confirma tu busqueda: {term}
        <input onChange={handleCHange} value={term}/>
        </form>
        <button onClick={handleClick}>clic me! </button>
        </div>
    )

}
export default SearchBar