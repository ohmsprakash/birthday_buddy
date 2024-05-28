import {useState} from 'react';
import './App.css'

const friendsBirthdays = [
  {
    avatorurl:"https://www.course-api.com/images/people/person-1.jpeg",
    name: "Bertie Yates",
    age: "29 years"
  },
  {
    avatorurl:"https://www.course-api.com/images/people/person-2.jpeg",
    name: "Hester Hogan",
    age: "32 years"
  },
  {
    avatorurl:"https://www.course-api.com/images/people/person-3.jpeg",
    name: "Larry Little",
    age: "36 years"
  },
  {
    avatorurl:"https://www.course-api.com/images/people/person-4.jpeg",
    name: "Sean Walsh",
    age: "34 years"
  },
  {
    avatorurl:"https://www.course-api.com/images/people/person-5.jpeg",
    name: "Lola Gardner",
    age: "29 years"
  }
];

function App() {
  const [list, setList] = useState(friendsBirthdays);
  return (
    <div>
    <section className="main">
    <h2>{list.length} Birthdays Today</h2>
      {
        list.map((friends) => {
          const {avatorurl, name, age} = friends;
          return (
          <article style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}>
            <img style={{
              borderRadius : "50%"
            }} width={80} height = {70}src={avatorurl}/>
            <div>
            <h1>{name}</h1>
            <p>{age}</p>
            </div>
          </article>
        )})
      }
      <button onClick={()=>{setList(0)}}>Clear All</button>
    </section>
    </div>
  )
}
export default App
