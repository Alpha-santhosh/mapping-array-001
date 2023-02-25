import "./App.css";

function checkNum(j) {
  return (j % 2 === 0);
}

function prime(n) {
  if(n>1){
    for(let l=2;l<=n-1;l++){
      if(n%l === 0){
        return false
      }
    }
    return true
  }
}

const yellow = {
  background: "#FDDB3A",
};
const green = {
  background: "#21BF73",
};
const red = {
  background: "#FD5E53",
};

function App() {
  return (
    <div className="App">
      
      <div className="heading">30 Days Of React</div>
      <h2 className="h2">Number Generator</h2>
      <div className="Container">
        {Array(32)
          .fill("")
          .map((e, i) => {
            return (
              <div className="card" style={checkNum(i)?prime(i)? red: green :prime(i)? red: yellow}>
                <h1>{i}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
