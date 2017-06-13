//The page will have a linked JavaScript file for the blog posts section. 
//Create an array to hold your posts (at least 2 posts). 
//Each item in the array must be an object that contains at a minimum 
//the following information: Title, Copy, Date. 
//Use JavaScript to add each post to the DOM.
console.log("print" );

var posts = [
	{ 
		"title": "Wonderland",
		"author": "Aspen Humphrey",
		"date": "June 10th, 2017",
		"blog": "Chasing what seems like an incredibly quick rabbit. Diving, Jumping, and Sprinting through tunnels- Could I be in Wonderland? What is this place they call NSS? Or is the better question to ask..What in the world is JavaScript? When will I stop falling through the abyss, stop talking to the caterpillar who asks Where are you, and finally catch the rabbit? As I start feeling as if I am close to catching the rabbit (finally grasping the concept of javascript in its entirety) Tweedle Dee and Dum throw me for a loop once more and I find my head detached by the Red Queen. By now I have officially turned into the Mad Hatter. As I accept my fate of eternally attending wild tea parties I also accept the phrase let go and let the code happen."
	},
	{
		"title": "	Zen",
		"author": "Aspen Humphrey",
		"date": "June 12th",
		"blog": "Unity between body and mind. Or for me letting go (of control). But what does all of this mean? What does it take to really be Zen? This has been the toughest challenge I have faced thus far. Not only here at NSS (while navigating Wonderland)- but in my daily life. I thoroughly enjoy knowing what I am doing, when, how, and why- always. I am truly searching for my center in every aspect of my life; being in Cohort 20 has escalated this idea and has been changing my core with such force I have whiplash! I am becoming more and more uncomfortable with each passing day. As this level grows,  I have no choice but to let go of more and more. Thus being said- I am having a difficult time letting go and trusting the method- not just in NSS but in my life. I am very thankful for this change and for this opportunity."
	},
];

function populateDom() {
	for (var i = 0; i = posts.length; i++){
		document.getElementById("blogposts").innerHTML += 

		`<div>
			<h2>${posts.title}</h2>
		 	<p>${posts.blog}</p>
		 	<h3>${posts.author}</h3>
		 	<date>${posts.date}</date>
		 </div>`;
	}

};
