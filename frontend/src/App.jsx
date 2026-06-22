import { useState } from "react";

import SearchBox from "./components/SearchBox";

import API from "./services/api";



function App() {


    const [user,setUser] = useState(null);


    const analyzeUser = async(handle)=>{


        const response = await API.get(
            `/user/${handle}`
        );


        setUser(response.data.data);


    };



    return (

        <div>


            <h1>
                CPilot 🚀
            </h1>


            <SearchBox 
                onSearch={analyzeUser}
            />


            {
                user && (

                    <div>


                        <img 
                        src={user.avatar}
                        />


                        <h2>
                            {user.handle}
                        </h2>


                        <p>
                            Rating: {user.rating}
                        </p>


                        <p>
                            Rank: {user.rank}
                        </p>


                        <p>
                            Max Rating: {user.maxRating}
                        </p>


                    </div>

                )
            }


        </div>

    );


}


export default App;