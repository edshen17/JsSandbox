// Basic module
let testModule = (function() {
	let score = 0;

	return {
		incrementScore: function() {
			score++;
			console.log(`Score is now ${score}`);
		},

		resetScore: function() {
			score = 0;
			console.log(`Score has now been reset to ${score}`);
		}
	};
})();

testModule.incrementScore();
testModule.incrementScore();
testModule.resetScore();


// Mode modules...

let publicPrivate = (function() {
	let _privateVar = 0;
	let _privateFunction = function (someVar) {
		console.log(someVar);
	}

	return {
		publicVar: `Hello, I'm a public variable!`,
		publicFunction: function(testVar) {
			_privateVar++;
			_privateFunction(testVar);
		}
	};

})();

publicPrivate.publicFunction(`Can you read this?`);
console.log(publicPrivate.publicVar); // Outputs publicVar
console.log(publicPrivate._privateVar); // Outputs undefined. Great!

let shoppingListModule = (function() {
	// private stuff:
	let _list = [];
	let _printList = function() {
		console.log(_list);
	}

	// public stuff:
	return {
		addItem: function (item) {
			_list.push(item);
		},

		listCount: function() {
			console.log(_list.length);
		},

		publicPrint: _printList,

		getTotal: function() {
			return _list.reduce(function (acc, obj) { return acc + obj.price; }, 0);
		} 
	};
})();

shoppingListModule.addItem({
	item: "GPU",
	price: 300
});

shoppingListModule.addItem({
	item: "CPU",
	price: 250
})

shoppingListModule.listCount();
shoppingListModule.publicPrint();
console.log(shoppingListModule.getTotal());