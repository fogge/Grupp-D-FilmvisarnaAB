class Booking {

	// constructor(userid) {
		// this.userID = userid;
	constructor() {
	//Alla beställningar som har gjorts
		JSON._load('booking').then((seats) => {
	      // Retrieve the app from JSON
	      this.bookedSeats = seats;
	      console.log(this.bookedSeats)
	    });

	    JSON._load('shows').then((shows) => {
	      // Retrieve the app from JSON
	      this.showObjects = shows;
	      console.log(this.showObjects)
	    });
	}

	getshowObject(showName) {
		console.log(showName);
		this.showObject = this.showObjects.find((x) => showName == x.name);
	}

	eventHandler() {
		// JSON._load('booking').then((seats) => {
	 //      // Retrieve the app from JSON
	 //      this.bookedSeats = seats;
	 //      console.log(this.bookedSeats)
	 //    });

		this.booking = {};
		let that = this;
		$(document).on('click','.book-btn',function(){
			
			that.booking.show = {
				// "date": "2018-03-01",
		  //     	"auditorium": "Lilla Salongen",
		  //     	"film": "Tjuren Ferdinand",
		  //     	"time": "22.40"
			};

			that.booking.show.userID = this.userID;
			that.booking.show.seats = [];

			console.log(this.booking);
			$('.seat.booked').each(function(){
				let seat = $(this);
				let seatID = seat.data('seatid');
				console.log(seatID);
				that.booking.show.seats.push(seatID);
			});

			that.bookedSeats.push(that.booking);
			//Save booked-info + sittplats to JSON
			JSON._save('booking', that.bookedSeats);
			console.log('saving', that.bookedSeats,)

		});

		// JSON._load('booking',(data){
		// 	this.bookings = data;
		// 	this.seatOccupied();
		// });

};