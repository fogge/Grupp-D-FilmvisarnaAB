class StartPage extends Base {
	constructor(){
		super();
	}

	renderMovie(movieTitle){
		let movieObject = this.getMovieObject(movieTitle);
		return `

		<div class="movieBlock mb-3 mr-2 ml-2 p-3 col">
			<a href="${movieObject.title}" class="pop d-flex flex-column">
				<img class="img-fluid" src="/img/posters/${movieObject.images[0]}">
				<h5 class="mt-2 mb-2 align-self-center">${movieObject.title}</h5>
			</a>
		</div>
		`
	}

}
