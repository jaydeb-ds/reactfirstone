import logo from './logo.svg';
import './App.css';

function App() {
  let i=0;
  let value;
let name = "Jaydeb";
let mark = [ 54,76,88];
let subject = ["math","physic","computer"]
let obj = {
  "course" : "Bsc.IT",
  "college name":"BTCST"
}
  return(
    <div>
    <h1 className="main">Tripura University</h1>
    <div className="main2">
      <h2>College Name = {obj['college name']}</h2>
      <h2>course = <span>{obj['course']}</span></h2>
      <h3>Student name = {name}</h3>

      <table className="main">
        <caption>marksheet</caption>
        <thead>
          <tr>
            <th>subject</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tfoot>
            <tr>
              <th>total</th>
              <th>888</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              {
                value = ()=>{
                  let i=0;
               while (i<2) {
                console.log(mark[i])
                return mark[i]
                i++;
               }
              } 

              }
            
            </tr>
          </tbody>
      </table>

    </div>
    
    </div>
  )
}

export default App;
