import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
 function input(){
  let items=data.items
  let arr=[]
  if(toggle){
  for(let i=0;i<items.length;i++){
arr.push(
  <div className='book'>
    <img src={items[i].volumeInfo.imageLinks.smallThumbnail}/>
    <div className='title'>{items[i].volumeInfo.title}</div>
    <div className='details'>
      <p>{items[i].volumeInfo.title}</p>
      <p>{items[i].volumeInfo.authors[0]}</p>
      <p>page count:{items[i].volumeInfo.pageCount}</p>
      <p>Rating:{items[i].volumeInfo.ratingsCount}</p>
    </div>
  </div>
)
  }
  return (
    <div className='books'>{[...arr]}</div>
    
  )}
 }
  const  handleSearch=(e)=>{
    e.preventDefault()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`).then((response)=>response.json()).then((data)=>{
     setData(data)
     setTimeout(setToggle(true),1000)
    })
    
}
 
  const [title,setTitle]=useState("")
  const [data,setData]=useState({})
  const [toggle,setToggle]=useState(false)
  return (
    <div>
      <h1 className="head">BOOK SEARCH</h1>
      <div>
        <div className='search'>
          <input onChange={(e)=>setTitle(e.target.value)} type="text"/>
          <button onClick={(e)=>handleSearch(e)}> 🔍</button>
        </div>
        <div className='input'>{input()}</div>
      </div>
    </div>
  );
}

export default App;
