class TenthMarks {
  constructor() {
    console.log("Calculate Total Marks");
    this.englishMarks = 90;
    this.teluguMarks = 95;
    this.hindiMarks = 32;
    this.mathsMarks = 80;
    this.scienceMarks = 75;
    this.socialMarks = 28;
  }
  engMarks = () => {
    console.log("Passed in English");
  };
  telMarks = () => {
    console.log("Passed in Telugu");
  };
  hinMarks = () => {
    console.log("Failed in Hindi");
  };
  matMarks = () => {
    console.log("Passed in Maths");
  };
  sciMarks = () => {
    console.log("Passed in Science");
  };
  socMarks = () => {
    console.log("Failed in Social");
  };
}

export default TenthMarks;
