// Factory Object Creation Pattern.
// Pros: Can make lots of objects of similar type quickly
// Cons: No way to check if object was created by certain factory (can't do freedomTower instanceof makeBuilding); 
// Wasted space/memory as each object does not share behavior so methods are recreated for each object instance. 
function makeBuilding(name, height) {
	return {
		name: name,
		height: height,

		introduce: function() {
			console.log(`The ${this.name} is ${this.height}m tall.`);
		}
	};
}

var freedomTower = makeBuilding('Freedom Tower', 546);
freedomTower.introduce();

var empireStateBuilding = makeBuilding('Empire State Building', 443);
empireStateBuilding.introduce();


// Constructor with prototypes
// Pros: The introduce method is shared among all Building instances and doesn't take up as much space/memory 
function Building(name, height) {
	this.name = name;
	this.height = height;
}

Building.prototype.introduce = function() {
	console.log(`The ${this.name} is ${this.height}m tall.`);
}

var freedomTower2 = new Building('Freedom Tower', 546);
var empireStateBuilding2 = new Building('Empire State Building', 443);
freedomTower2.introduce();
empireStateBuilding2.introduce();