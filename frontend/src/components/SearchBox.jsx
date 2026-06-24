import { useState } from "react";



function SearchBox({ onSearch }) {


    const [handle, setHandle] = useState("");



    const handleSubmit = () => {


        if(handle.trim() !== ""){


            onSearch(

                handle.trim()

            );


        }


    };




    return (


        <div>



            <input


                type="text"


                placeholder="Enter Codeforces handle"


                value={handle}



                onChange={(e)=>

                    setHandle(

                        e.target.value

                    )

                }



                onKeyDown={(e)=>{


                    if(e.key === "Enter"){


                        handleSubmit();


                    }


                }}


            />





            <button

                onClick={handleSubmit}

            >


                Analyze


            </button>




        </div>


    );


}



export default SearchBox;