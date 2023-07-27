const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                <h1>REST-rant</h1>
                <div>
                    <img src="/images/MTNLake.jpg" alt='Lake in mountains'/>
                </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
