const food = {
  name: "Pasta",
  calories: 350,
  type: "vegan",
  topings: ["cheese", "tomato", "corn"],
  contry: "Italy",

  getFood() {
    console.log(this);
  },

  // changeType(){
  //  this.type = "meat"
  // }
  changeType(typeFood) {
    this.type = typeFood;
  },

  addTopings(topin) {
    this.topings.push(topin);
  },
};


// food.getFood()

const { name, calories, topings, type, contry, qwerty = "hjkl" } = food;
food.changeType("meat");

console.log("topings :>> ", topings);

// for (const element of topings) {
//   console.log("element :>> ", element);
// }

const [a,b,c] = topings;

const msg = `Наша страва називається ${name}, у ній ${calories} калорій, це національна страва країни ${contry} ==== ${qwerty}`;

console.log(msg);

console.log('a :>> ', a,b,c);
