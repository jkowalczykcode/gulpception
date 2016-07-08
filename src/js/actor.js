import {Movie} from './movie';
export class Actor {
	constructor(name, character, image, description, movies) {
		this.name = name;
		this.character = character;
		this.image = image;
		this.description = description;
		this.movies = movies;
	}
	introduce() {
		console.log('Hi, i\'m ' + this.name);
	}
}
