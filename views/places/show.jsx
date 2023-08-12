const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            
            </div>
            <div>
            <h2>Description</h2>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
   


          </main>
        </Def>
    )
}

module.exports = show
