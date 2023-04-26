import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const { query, searchPost } = useGlobalContext();
    return (

        <
        >
        <
        div >
        <
        h1 > This is Search < /h1>  <
        form >
        <
        div >
        <
        input type = "text"
        placeholder = "Search here"
        value = { query }
        onChange = {
            (e) => searchPost(e.target.value)
        } >

        <
        /input>  <
        /div>  <
        /form>  <
        /div>  <
        />
    )
}

export default Search