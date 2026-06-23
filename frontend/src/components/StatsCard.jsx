function StatsCard({analytics}){


    return (

        <div>


            <h3>
                Statistics
            </h3>


            <p>
            Solved:
            {analytics.solvedProblems}
            </p>


            <p>
            Submissions:
            {analytics.totalSubmissions}
            </p>


            <p>
            Accuracy:
            {analytics.accuracy}%
            </p>


        </div>

    );

}


export default StatsCard;