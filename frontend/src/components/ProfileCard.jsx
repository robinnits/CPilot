function ProfileCard({user,analytics}){


const progress =
analytics.rankProgress;


const beginner =
progress.currentRating==="Unrated";



return (


<div

className="
bg-[#161B22]
border
border-gray-800
rounded-2xl
p-10
"

>


<div
className="
flex
justify-between
items-start
"
>



{/* LEFT SIDE */}


<div
className="
flex-1
"
>


<h1
className="
text-5xl
font-bold
"
>

{user.handle}

</h1>




<p
className="
text-green-400
text-xl
mt-2
"
>

{user.rank || "Unrated"}

</p>





<div
className="
grid
grid-cols-3
gap-16
mt-12
max-w-xl
"
>



<div>


<p
className="text-gray-400"
>
Rating
</p>


<h2
className="text-3xl"
>

{user.rating || "-"}

</h2>


</div>






<div>


<p
className="text-gray-400"
>
Max Rating
</p>


<h2
className="text-3xl"
>

{user.maxRating || "-"}

</h2>


</div>





<div>


<p
className="text-gray-400"
>
Solved
</p>


<h2
className="text-3xl"
>

{analytics.solvedProblems}

</h2>


</div>




</div>



</div>







{/* RIGHT AVATAR */}


<img

src={user.titlePhoto || user.avatar}


className="
w-50
h-50
rounded-xl
object-cover
border
border-gray-700
"

/>




</div>







<hr

className="
my-10
border-gray-700
"

/>






{/* ROAD SECTION */}


<div>



<h2
className="
text-3xl
font-semibold
"
>

Road To {progress.targetRank}

</h2>





<h3
className="
text-2xl
mt-5
"
>


{

beginner

?

"Start Your Journey"

:

`${progress.currentRating} / ${progress.targetRating}`

}


</h3>






{


!beginner &&


<>



<div

className="
w-full
h-4
bg-gray-800
rounded-full
mt-6
"

>


<div

style={{

width:`${progress.progress}%`

}}


className="
h-full
bg-green-500
rounded-full
"

>

</div>


</div>





<p
className="
mt-5
text-gray-300
"
>

Need +{progress.ratingNeeded} rating

</p>


</>


}




</div>



</div>


);


}



export default ProfileCard;