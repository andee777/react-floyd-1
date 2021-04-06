import React, { useState } from 'react';
import './App.css';
import Tableau1 from './Tableau1'

function App() {

  // les poids des transitions sans passer par des intermediares
  var A = [
    [0, 33, 999999, 7], 
    [8, 0, 2, 999999], 
    [5, 999999, 0, 1], 
    [2, 999999, 999999, 0]
  ];
  const [tabA, setTabA] = useState(A);
  // P est la matrice des sommets intermédiaires
  var P = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  const [tabP, setTabP] = useState(P);
  var n = 3;

  const floyd = (e) => {
    e.preventDefault();
    console.log('Floyd cliqué.');
    for(let k = 0; k <= n; k++) {
      // System.out.println("\n- Ronde " + (k+1) + " -");
      for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= n; j++) {
          if((tabA[i][k] + tabA[k][j]) < tabA[i][j]) {
            let XA = tabA.map((x) => x);
            XA[i][j] = min(tabA[i][j],(tabA[i][k] + tabA[k][j]));
            setTabA(XA);
            let XP = tabP.map((x) => x);
            XP[i][j] = (k + 1); 
            setTabP(XP);
          }
        }
      }
      // afficherTableaux();
    }
    // System.out.println();
  };

  const resetTabs = (e) => {
    e.preventDefault();
    console.log('Reset a été cliqué.');
    setTabA(A);
    setTabP(P);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Algorithme de Floyd
        </p>
        <Tableau1 tableau={tabA}/>
        <br/>
        <Tableau1 tableau={tabP}/>
        <br/>
        <button onClick={floyd}>Floyd</button>
        <button onClick={resetTabs}>Reinitialiser</button>

      </header>
    </div>
  );
}



const min = (m, n) => {
  // System.out.print("min(" + m + ", " + n + ")");
  if(m > n) {
    // System.out.println(" => " + n);
    return n;
  }
  else {
    // System.out.println(" => " + m);
    return m;
  }
};


export default App;
