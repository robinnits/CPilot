function ProfileCard({user,analytics}){


const progress = analytics.rankProgress;


const beginner =
progress.currentRating==="Unrated";


const displayMaxRating = Math.max(

    user.rating || 0,

    user.maxRating || 0

);



const getRankColor = (rating) => {

    if (rating == null) return "#808080";          // Unrated / Newbie
    if (rating < 1200) return "#808080";           // Newbie
    if (rating < 1400) return "#008000";           // Pupil
    if (rating < 1600) return "#03A89E";           // Specialist
    if (rating < 1900) return "#0000FF";           // Expert
    if (rating < 2100) return "#AA00AA";           // Candidate Master
    if (rating < 2300) return "#FF8C00";           // Master
    if (rating < 2400) return "#FF8C00";           // International Master
    return "#FF3333";                              // GM+
};



return (


<div className="profile-card">


    {/* AVATAR */}

    <img

    className="profile-avatar"

    src={user.titlePhoto || user.avatar}

    />



    {/* DETAILS */}

    <div className="profile-info">


        <h1>
            {user.handle}
        </h1>



        <p

        className="rank-text"

        style={{

            color:getRankColor(user.rating)

        }}

        >

            {
            user.rank ?

            user.rank
            .split(" ")
            .map(
                word =>
                word[0].toUpperCase()
                +
                word.slice(1)
            )
            .join(" ")

            :

            "Unrated"

            }

        </p>





        <div className="profile-stats">


            <div>

                <span>Rating</span>

                <br/>

                <strong>

                    {user.rating || "-"}

                </strong>

            </div>





            <div>

                <span>Max Rating</span>

                <br/>

                <strong>

                    {displayMaxRating || "-"}

                </strong>

            </div>





            <div className="solved-stat">


                <span>

                    Solved


                    <span className="info-icon">

                        ⓘ


                        <div className="stat-tooltip">

                            Unique problems solved.

                            <br/>

                            Duplicate Div1/Div2 problems are counted once.

                        </div>


                    </span>


                </span>


                <br/>


                <strong>

                    {analytics.solvedProblems}

                </strong>


            </div>



        </div>







        <div className="road-card">


            <h2>

                Road To{" "}

                <span
                style={{
                    color:getRankColor(progress.targetRating),
                    fontWeight:"700"
                }}
                >

                    {progress.targetRank}

                </span>

            </h2>



            <h3>


            {

                beginner ?

                "Start Your Journey"

                :

                `${progress.currentRating} / ${progress.targetRating}`


            }


            </h3>





            {!beginner &&

            <>


                <div className="progress-bar">


                    <div
                    className="progress-fill"

                    style={{

                        width:`${progress.progress}%`,

                        background:getRankColor(progress.targetRating)

                    }}
                    >


                    </div>


                </div>




                <p>

                {
                progress.achieved ?

                "✓ Achieved"

                :

                `Need +${progress.ratingNeeded} rating`

                }

                </p>


            </>


            }



        </div>


    </div>



</div>


);


}



export default ProfileCard;