class Login {

	constructor(){
		this.eventHandlers();
		JSON._load('users').then((users) => {
     	this.userObjects = users;
   		})
	}

	eventHandlers(){

		$("#loginbtn").on("click", () => {
			let tempObject = {};

			let username = $("#username").val();

			let condition = true;

			for (let i = 0; i < this.userObjects.length; i++) {
				if (username = this.userObjects[i].username) {
					condition = false;
				}
			}

			if (condition) {
				tempObject.username = $("#username").val();

				tempObject.name = $("#name").val();

				tempObject.password = $("#password").val();

				tempObject.id = this.generateId();

				this.saveUsers(tempObject);
			} else {
				console.log('This username already exist');
			}


		});
	}

	getLastId(){

		let highestID = this.userObjects[0].id;

		for(let i = 0; i < this.userObjects.length; i++){
			if (this.userObjects[i].id > highestID) {
				highestID = this.userObjects[i].id;
			}
		}
		return highestID;
	}

	generateId(){

		let newId = this.getLastId() / 1;
		newId += 1;
		return newId;
	}

	saveUsers(newUserObject){
		this.userObjects.push(newUserObject);
		JSON._save('users.json', this.userObjects).then(function(){
			console.log('success!');
		});
	}

}

let x = new Login;

/*

let username;
let name;
let password;

function eventHandlers(){

	$("#loginbtn").on("click", function(){

	username = $("#username").val();
	console.log(username);

	name = $("#name").val();
	console.log(name);

	password = $("#password").val();
	console.log(password);

	});
}
*/
