import { useState } from "react";


function SearchBox({ onSearch }) {

    const [handle, setHandle] = useState("");


    const handleSubmit = () => {

        if(handle.trim() !== ""){
            onSearch(handle);
        }

    };


    return (

        <div>

            <input


            value={handle}


            onChange={(e)=>

                setHandle(e.target.value)

            }


            onKeyDown={(e)=>{


                if(e.key==="Enter"){


                    analyzeUser();


                }


            }}


            />


        </div>

    );

}


export default SearchBox;