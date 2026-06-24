function ProfileCard({user}){


    return (

        <div>


            <img 
            src={user.avatar}
            width="80"
            />


            <h2>
                {user.handle}
            </h2>


            <p>

            {

                user.rating

                ?

                `Rating: ${user.rating}`

                :

                "Unrated"

            }

            </p>


            <p>
                {user.rank}
            </p>


        </div>

    );

}


export default ProfileCard;