function Navbar(){


    return (


        <nav

        className="

        h-20

        px-10

        flex

        items-center

        justify-between

        border-b

        border-gray-800

        bg-[#0D1117]

        "

        >


            <div>


                <h1

                className="

                text-3xl

                font-bold

                "

                >

                    <span
                    className="text-blue-500"
                    >

                        C▸

                    </span>

                    {" "}

                    CPilot


                </h1>



                <p

                className="

                text-gray-400

                "

                >

                    Your Competitive Programming Co-Pilot


                </p>


            </div>




            <p

            className="

            text-gray-400

            font-medium

            "

            >

                Analyze • Improve • Rank Up


            </p>



        </nav>


    );


}



export default Navbar;