import TenthMarks from "./TenthMarks";

class BtechMarks extends TenthMarks {
  constructor() {
    super();
    console.log("Caluculate Btech Marks");
  }
  engMarks = () => {
    console.log("Failed in English");
  };

  calculateMarks = () => {
    console.log("0 Marks");
  };
  calculateMarks = (eng) => {
    console.log("1 Marks");
  };
  calculateMarks = (eng, tel) => {
    console.log("2 Marks");
  };
  calculateMarks = (eng, tel, hin) => {
    console.log("3 Marks");
  };
}

export default BtechMarks;
