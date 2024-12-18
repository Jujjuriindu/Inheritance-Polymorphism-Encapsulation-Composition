import logo from "./logo.svg";
import "./App.css";
import TenthMarks from "./Classes/TenthMarks";
import BtechMarks from "./Classes/BtechMarks";

function App() {
  let marks = new TenthMarks();
  marks.englishMarks = 90;
  marks.teluguMarks = 95;
  marks.hindiMarks = 32;
  marks.mathsMarks = 80;
  marks.scienceMarks = 75;
  marks.socialMarks = 28;

  marks.engMarks();
  marks.telMarks();
  marks.hinMarks();
  marks.matMarks();
  marks.sciMarks();
  marks.socMarks();

  console.log("------Btech Marks------");

  let subjects = new BtechMarks();
  subjects.englishMarks = 21;
  subjects.teluguMarks = 95;
  subjects.hindiMarks = 32;
  subjects.mathsMarks = 80;
  subjects.scienceMarks = 75;
  subjects.socialMarks = 28;

  subjects.engMarks();
  subjects.telMarks();
  subjects.hinMarks();
  subjects.matMarks();
  subjects.sciMarks();
  subjects.socMarks();

  subjects.calculateMarks();
  subjects.calculateMarks(1);
  subjects.calculateMarks(1, 2);
  subjects.calculateMarks(1, 2, 3);

  return <div className="App">
    <h1>Oops Concepts</h1>
  </div>;
}

export default App;
