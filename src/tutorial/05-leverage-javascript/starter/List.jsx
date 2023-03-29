import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
        {people.map((person)=>{
            return <ul>
                <li><Person key={person.id} {...person}></Person></li>
            </ul> 
        })}
    </div>
  )
}
export default List