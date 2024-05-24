import "./App.css";
import raact, { useEffect, useState } from "react";
import Cardfilter from "./components/CardFilter";
import SearchBard from "./components/SearchBar";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchFiled, setSearchFiled] = useState("");
  const [filtermonster, setFiltermonster] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setMonsters(data));
  }, []);

  const onsearch = (event) => {
    const searchf = event.target.value.toLocaleLowerCase().trim();
    setSearchFiled(searchf);
 
  };
  const onsearchtitle = (event) => {
    const searchf = event.target.value.toLocaleLowerCase();
    setSearchTitle(searchf);
 
  };
  useEffect(() => {
    const filtermonsterr = monsters.filter((monstre) => {
      return monstre.name.toLocaleLowerCase().trim().includes(searchFiled);
    });
    setFiltermonster(filtermonsterr);
  }, [monsters,searchFiled]);

  
  return (
    <div>
      <div className="App">
        <div>
          <h1 className="title-monster">{searchTitle}</h1>
        </div>

        <div>
          <SearchBard
            className="monster-search-bar"
            handleonserach={onsearch}
          />
          
        </div>
        <br/>
        <div>
          <SearchBard
            className="monster-search-bar"
            handleonserach={onsearchtitle}
          />
          
        </div>
        <div className="card-list-monster">
          <Cardfilter filtermonster={filtermonster} />
        </div>
      </div>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monstres: [],
//       searchF: "",

//     };

//     console.log("1");

//   }
//   componentDidMount() {
//     console.log("3");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((data) =>
//         this.setState(() => ({
//           monstres: data,
//         }))
//       )
//       .catch((Error) => Error);
//   }

//   onsearch = (event) => {
//     const searcht = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {
//         searchF: searcht,
//       };
//     });
//   };

//   render() {
//     console.log("2");
//     const { monstres, searchF } = this.state;
//     const filtermonster = monstres.filter((monstre) => {
//       return monstre.name.toLocaleLowerCase().includes(searchF);
//     });
//     console.log(monstres, "eerzerzerezr ");

//     return (
//       <div className="App">
//         <div> <h1 className="title-monster">Monsters</h1></div>

//         <div>
//           <SearchBard
//             className="monster-search-bar"
//             handleonserach={this.onsearch}
//           />
//         </div>
//         <div className="card-list-monster">
//           <Cardfilter filtermonster={filtermonster} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
