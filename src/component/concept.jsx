/* eslint-disable react/prop-types */

const Concept = ({title, description}) =>{
    return(
        <>
          <div className="main">
            <h4>Title:{title} </h4>
            <p>{description}</p>
          </div>
        </>
    )
}

export default Concept;
