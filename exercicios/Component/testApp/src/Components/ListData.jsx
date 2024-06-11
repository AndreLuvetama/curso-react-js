import { useState } from "react"



const ListData = () =>{
    const[list] = useState(["Andre", "Luvetama", "Mbiyavanga"]);
    const [users, setUsers] = useState([
                    {id: 1, name: "Andre", age: "37"},
                    {id: 2, name: "José", age: "23"},
                    {id: 3, name: "Isaac", age: "1"},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            { /** retorna o estado anterior */}
            console.log(prevUsers) 
            return prevUsers.filter((user) => randomNumber !== user.id); {/*filtra os Id diferente da lista */}
        });
    };


    return (
        <>
        <div>
            <span>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Listas$$$$$$$$$$$$$$$$$$$$$$$$$</span>
            <ul>
                {
                    list.map((item, id)=> (
                            <li key={id}>{item}</li>
                    )
                    )
                }
            </ul>
            <ul>
                {
                    users.map((user, id)=> (
                        <li key={user.id}>Nome:  {user.name}  - Idade: {user.age}</li>                    
                    ))
                }
            </ul>
        </div>
        <div>
            <button onClick={deleteRandom}>Delete ramdom users</button>
        </div>
        </>
    )
}
export default ListData