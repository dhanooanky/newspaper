
import Card from './Card';

import React, { useState, useEffect } from 'react';

const Newsapp = () => {
    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState(null)
const API_KEY = "d2498004bef4400eaf620359157ba3f6";

const GetData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)

}
useEffect(() => {
GetData()
}, [])
const handleInput = (e) =>{
    console.log(e.target.value);
    setSearch(e.target.value)
}

const userInput = (event) => {
    setSearch(event.target.value); 
  };

  return (
    <div>
      <nav>
        <div>
          <h1 className='sidebar'>Trendy News</h1>
        </div>
        

        <div className="searchbar">
          <input type="text" placeholder="Search News" value={search}onChange={handleInput}/>
          <button onClick={GetData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Update With Trendy News</p>
      </div>

      <div className="categoryBtn">
        < button onClick={userInput} value="sport">Sport</button>
        < button onClick={userInput} value="politics">Politics</button>
        < button onClick={userInput} value="entertainment">Entertainment</button>
        < button onClick={userInput} value="helth">Helth</button>
        < button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {newsData? <Card data={newsData}/> :null}
        <Card data={newsData}/>
      </div>
    </div>
  );
};

export default Newsapp;
