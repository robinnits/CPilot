import { useState } from "react";


function SearchBox({ onSearch }) {


    const [handle,setHandle] =
    useState("");



    const submit = ()=>{


        if(handle.trim()){


            onSearch(
                handle.trim()
            );


        }


    };




    return (

        <div
        className="
        flex
        justify-center
        my-10
        "
        >


            <div
            className="
            w-[500px]
            flex
            items-center
            border-b
            border-gray-600
            "
            >


                <input

                value={handle}

                placeholder="Codeforces User Handle"

                onChange={(e)=>

                    setHandle(e.target.value)

                }


                onKeyDown={(e)=>{


                    if(e.key==="Enter")

                        submit();


                }}


                className="
                flex-1
                bg-transparent
                outline-none
                text-center
                text-2xl
                py-3
                text-white
                placeholder-gray-500
                "

                />




                <button

                onClick={submit}

                className="
                px-5
                py-2
                rounded-lg
                bg-blue-600
                hover:bg-blue-700
                "

                >

                Analyze

                </button>



            </div>


        </div>

    );


}



export default SearchBox;