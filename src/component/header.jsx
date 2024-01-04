const reactDescription = ["Fundamental", "Crucial", "Core"]

const genRandomInit = (max) =>{
    return Math.floor(Math.random() * (max + 1))
}

const Header = () =>{
    const description = reactDescription[genRandomInit(2)]
   return(
    <>
    <div className="main">
        <section>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, est!</h1>
            <p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi illo quo soluta, et quos laboriosam facilis iusto ducimus eos cupiditate ipsum sapiente molestiae aperiam quibusdam? Atque neque dolorum excepturi.</p>
        </section>
    </div>

    </>
   )
}


export default Header;