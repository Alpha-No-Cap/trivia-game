let mockdata = {
	response_code: 0,
	results: [
		{
			category: "Entertainment: Books",
			type: "multiple",
			difficulty: "medium",
			question: "Which of the following authors was not born in England? ",
			correct_answer: "Arthur Conan Doyle",
			incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"],
		},
		{
			category: "Entertainment: Books",
			type: "multiple",
			difficulty: "easy",
			question:
				"George Orwell wrote this book, which is often considered a statement on government oversight.",
			correct_answer: "1984",
			incorrect_answers: [
				"The Old Man and the Sea",
				"Catcher and the Rye",
				"To Kill a Mockingbird",
			],
		},
		{
			category: "Entertainment: Books",
			type: "multiple",
			difficulty: "easy",
			question:
				"Which famous book is sub-titled &#039;The Modern Prometheus&#039;?",
			correct_answer: "Frankenstein",
			incorrect_answers: [
				"Dracula",
				"The Strange Case of Dr. Jekyll and Mr. Hyde ",
				"The Legend of Sleepy Hollow",
			],
		},
		{
			category: "Entertainment: Books",
			type: "multiple",
			difficulty: "hard",
			question: "Who wrote the novel &quot;Moby-Dick&quot;?",
			correct_answer: "Herman Melville",
			incorrect_answers: [
				"William Golding",
				"William Shakespeare",
				"J. R. R. Tolkien",
			],
		},
	],
};

export default mockdata;
