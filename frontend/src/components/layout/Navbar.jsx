function Navbar(){


return (

<nav className="navbar">


    <div className="brand-container">
        <img
          src="/logo.svg"
          alt="CPilot"
          className="logo"
        />

        <h1 className="brand">
          CPilot
        </h1>

        {/* <p>Your Competitive Programming Co-Pilot</p> */}
      </div>



    <p>

        Analyze • Improve • Rank Up

    </p>



</nav>


);


}


export default Navbar;