import {Actor} from './actor';
import {Movie} from './movie';
import * as The from './director';
import * as Youtube from './youtube';
import * as splashscreen from './splash';

window.setActorInfo = (no) => { 
	var actor = actors[no];
	$("#right-panel-title").html(actor.name);
	var movies = actor.movies;
	var content = `
		<p><i>${actor.description}</i></p>
		<p>Other movies with <strong>${actor.name}</strong>:</p>
		<p><h6>(Links points to imdb)</h6></p>
	`;
	for(var i in movies)
		content += `<p><a href="${movies[i].url}">${movies[i].title}</a></p>`;
	$("#right-panel-content").html(content);
}



let actor1 = new Actor('Joseph Gordon-Levitt',
	'Arthur',
	'http://1.fwcdn.pl/p/31/68/3168/392788.1.jpg',
	'he\'s an actor, you know, soon will be playing Edward Snowden in "Snowden"',
	[
		new Movie('The Dark Knight Rises', 'http://www.imdb.com/title/tt1345836'),
		new Movie('Snowden', 'http://www.imdb.com/title/tt3774114')
	]
);
let actor2 = new Actor('Leonardo Di Caprio',
	'Cobb',
	'http://1.fwcdn.pl/p/00/30/30/398646.1.jpg',
	'famous actor',
	[
		new Movie('Titanic', 'http://www.imdb.com/title/tt0120338'),
		new Movie('Departed', 'http://www.imdb.com/title/tt0407887'),
		new Movie('The Revenant', 'http://www.imdb.com/title/tt1663202')
	]); 
let actor3 = new Actor('Ellen Page',
	'Ariadne',
	'http://1.fwcdn.pl/p/37/37/133737/379874.1.jpg',
	'famous actor',
	[
		new Movie('Juno', 'http://www.imdb.com/title/tt0467406'),
		new Movie('Hard Candy', 'http://www.imdb.com/title/tt0424136')
	]); 
let actor4 = new Actor('Tom Hardy',
	'Eames',
	'http://1.fwcdn.pl/p/71/04/57104/398789.1.jpg',
	'famous actor',	[
		new Movie('Mad Max: Fury Road','http://www.imdb.com/title/tt1392190/?ref_=nm_flmg_act_8'),
		new Movie('The Revenant','http://www.imdb.com/title/tt1663202')]);
let actor5 = new Actor('Cillian Murphy',
	'Robert Fischer',
	'http://1.fwcdn.pl/p/45/17/84517/251529_1.1.jpg',
	'famous actor',	[
		new Movie('Mad Max: Fury Road','http://www.imdb.com/title/tt1392190/?ref_=nm_flmg_act_8'),
		new Movie('The Revenant','http://www.imdb.com/title/tt1663202')]);
let actor6 = new Actor('Ken Watanabe',
	'Saito',
	'http://1.fwcdn.pl/p/86/77/88677/245219.1.jpg',
	'well-known asian actor', [
		new Movie('Batman Begins', 'http://www.imdb.com/title/tt0372784'),
		new Movie('The Last Samurai', 'http://www.imdb.com/title/tt0325710/?ref_=nm_knf_i2')
	]);
let actor7 = new Actor('Marion Cotillard',
	'Mal',
	'http://1.fwcdn.pl/p/63/73/6373/319516.1.jpg',
	'actor', [
		new Movie('The Dark Knight Rises', 'http://www.imdb.com/title/tt0372784'),
		new Movie('Assasin\'s Creed', 'http://www.imdb.com/title/tt2094766/?ref_=nm_flmg_act_3')
	]);
let actor8 = new Actor('Michael Caine',
	'Miles',
	'http://1.fwcdn.pl/p/03/28/328/354630.1.jpg',
	'actor', [
		new Movie('The Dark Knight', 'http://www.imdb.com/title/tt0468569/?ref_=nm_knf_i1'),
		new Movie('Interstellar', 'http://www.imdb.com/title/tt0816692/?ref_=nm_flmg_act_7')
	]);
let actors = [];
actors.push(actor1);
actors.push(actor2);
actors.push(actor3);
actors.push(actor4);
actors.push(actor5);
actors.push(actor6);
actors.push(actor7);
actors.push(actor8);

function addActor(no) {
	let actor = actors[no];
	$("#actors").append(
	`<div class="col-sm-4">
        <div class="media">
            <div class="icon img-actor-container">
                <img width="120" alt="Actor" class="img-thumbnail img-actor grow" 
                src="${actor.image}" onclick="setActorInfo(${no});">
            </div>
            <div class="desc"> 
                <h4>${actor.name}</h4>
                <p>${actor.character}</p>
            </div>
        </div>
    </div>`
    );
}


function addDirectorInfo() {
	$('#nolan').append(`
    	<h4>${The.Director.name}</h4>
        <div class="icon">
            <img alt="Director" class="img-thumbnail" src="${The.Director.image}">
        </div>
    `);
	var desc = '<div class="desc">';
		desc += "Other movies of that director:";
	var movies = The.Director.movies;
	desc += '<ul>';
	for(var i=0;i<movies.length;i++)
		desc += `<li>${movies[i].title}</li>`;
	desc += '</ul>';
	desc += '</div>';
	$('#nolan').append(desc);
}

function addAboutInfo() {
	$('#inception').html(
		`<p><strong>Inception</strong> is a title of the movie directed by Christopher Nolan.</p>
		<h4>Plot of the movie</h4>
		<p>DOM Cobb is a skilled thief, the absolute best in the dangerous art of extraction, 
		stealing valuable secrets from deep within the subconscious during the dream state, 
		when the mind is at its most vulnerable. Cobbs rare ability has made him a coveted 
		player in this treacherous new world of corporate espionage, but it has also made 
		him an international fugitive and cost him everything he has ever loved. Now Cobb 
		is being offered a chance at redemption. One last job could give him his life back 
		but only if he can accomplish the impossible - inception. Instead of the perfect heist, 
		Cobb and his team of specialists have to pull off the reverse: their task is not to steal 
		an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of 
		careful planning or expertise can prepare the team for the dangerous enemy that seems to
		 predict their every move. An enemy that only Cobb could have seen coming. </p>
		<p><i>by <a href="http://www.imdb.com/title/tt1375666">imdb</a></i></p>
		`);     
} 
 
function inceptionSound() {    
	player.playVideo();     
}

document.getElementById("menu-cast").addEventListener('click', function(){
	inceptionSound();
	$('#title').html('Actors');
	$('#actors').show();
	$('#nolan').hide();
	$('#inception').hide();
	if($('#right-side').hasClass('opacity0')) {
		setTimeout(function(){
			$('#right-side').removeClass('fade-in');
			$('#right-side').removeClass('opacity0');
		},4000);
		$('#right-side').addClass('fade-in');
	}
}, true);

document.getElementById("menu-director").addEventListener('click', function(){
	inceptionSound();
	$('#title').html('Director');
	$('#actors').hide();
	$('#nolan').show();
	$('#inception').hide();
	if(!$('#right-side').hasClass('fade-out')) {
		setTimeout(function(){
			$('#right-side').removeClass('fade-out');
			$('#right-side').addClass('opacity0');
		},4000);
		$('#right-side').addClass('fade-out');
	}

}, true);

document.getElementById("menu-about").addEventListener('click', function(){
	inceptionSound();
	$('#title').html('About');
	$('#actors').hide();
	$('#nolan').hide();
	$('#inception').show();
	$("#right-panel-title").html('Did you know...');
	$("#right-panel-content").html('...that Inception is also a room name in Lublin?');
}, true);

for(var i in actors)
	addActor(i);
addDirectorInfo();
addAboutInfo();
