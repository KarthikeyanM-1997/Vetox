var library = [
	{
		title : "javascript",
		price : 500,
		readers : [
			{
				name : "Person 1",
				count : 300
			},
			{
				name : "Person 2",
				count : 400
			}
		],
		authorDetails :{
			name : "Raj",
			age : 40
		}
	},
	{
		title : "Nodejs",
		price : 600,
		readers : [],
		authorDetails : {
			name : "Raj",
			age : 40
		}
	}
]

console.log(library);

console.log(library[0]["price"]);
console.log(library[1]["authorDetails"]["age"]);
console.log(library[0]["readers"].length);
console.log(library[0]["readers"][1]["count"]);
