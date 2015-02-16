// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys
// Correct D, C, E, D, A, C, B, B, B, C, C, A, C, E, A
var quizJSON = {
    "info": {
        "name":    "Jamie Lee's Thesis Quiz!!!",
        "main":    "<p>“You will be anonymously matched with another test taker, and the amount you are compensated will depend on your performance relative to your opponent. Once you have answered all your questions your score, and your opponent’s score will appear on your results screen. Your raw score will be divided by the sum of your score and your opponent’s score to determine what proportion of the total reward of fifteen dollars you will receive. For example, if you answer eight questions correctly, and your opponent answers four, then you will receive two thirds of the money, rounded to the nearest dollar, which in this case would be ten dollars. Please report the number of questions you and your opponent answered correctly to the proctor to receive your compensation.”</p>",
        "results": "<h5>Results</h5><p>The specific result stuff will go here</p>",
        "level1":  "$Amount",
        "level2":  "$Amount",
        "level3":  "$Amount",
        "level4":  "$Amount",
        "level5":  "$Amount (Maybe some explanation text)" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "A bag contains 2 red, 3 black, and 4 white balls. What is the probability of drawing a black and red ball in two successive draws, each ball being put back after it is drawn?",
            "a": [
                {"option": "2/27",      "correct": false},
                {"option": "1/9",     "correct": false},
                {"option": "1/3",      "correct": false},
                {"option": "4/27",     "correct": true}, // no comma here
                {"option": "2/9",       "correct": false}
            ],
            "correct": "<p><span>That's right!</span> The odds of drawing a black ball and then a red ball consecutively is 4/27</p>",
            "incorrect": "<p><span>Uhh no.</span> Actually, the odds of drawing a black ball and then a red ball consecutively is 4/27</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "If the sum of five consecutive positive integers is A, then the sum of the next five consecutive in terms of A is:",
            "a": [
                {"option": "A+1",               "correct": false},
                {"option": "A+5",   "correct": false},
                {"option": "A+25",               "correct": true},
                {"option": "2A", "correct": false}, // no comma here
                {"option": "5A", "correct": false}
            ],
            "correct": "<p><span>Nice!</span> A+25 is the correct answer!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the number in the one’s digit of 567 * 2487?",
            "a": [
                {"option": "1",          "correct": false},
                {"option": "4",          "correct": false},
                {"option": "5",          "correct": false},
                {"option": "8",          "correct": false}, 
                {"option": "9",          "correct": true}
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius.</p>",
            "incorrect": "<p><span>Not Quite.</span></p>" // no comma here
        },
        { // Question 4
            "q": "Jessica and Taylor are two of five swimmers competing at a meet at Hamilton College. If no participant can finish at exactly the same time, and all participants are able to finish the race, how many possible orders can the participants finish the race such that Jessica finishes before Taylor?",
            "a": [
                {"option": "24",    "correct": false},
                {"option": "30",     "correct": false},
                {"option": "42",      "correct": false},
                {"option": "60",   "correct": true},
                {"option": "90",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 6
            "q": "The area of a square swimming pool is “A” square feet and the perimeter is “P” feet. If A = 2P+9, what is the perimeter of the pool, in feet?",
            "a": [
                {"option": "36",    "correct": true},
                {"option": "40",     "correct": false},
                {"option": "42",      "correct": false},
                {"option": "50",   "correct": false},
                {"option": "56",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 7
            "q": "5X + 2Y = 50" + "4X + 1Y = 40" + "X = ?",
            "a": [
                {"option": "5",    "correct": false},
                {"option": "8",     "correct": false},
                {"option": "10",      "correct": true},
                {"option": "12",   "correct": false},
                {"option": "16",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 8
            "q": "At Syracuse, there are 80 Freshman, 100 Sophomores, and 220 Upperclassmen taking a particular economics class. Sixty percent of these students come from city A, thirty percent from city B, and the rest come from city C. All students from city C are Freshmen and half of the students from city B are upperclassmen, while the rest are split evenly between the two other grades. How many Sophomores come from city A?",
            "a": [
                {"option": "60",    "correct": false},
                {"option": "70",     "correct": true},
                {"option": "80",      "correct": false},
                {"option": "90",   "correct": false},
                {"option": "100",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 9
            "q": "How many prime numbers are there between 101 and 123 inclusive?",
            "a": [
                {"option": "4",    "correct": false},
                {"option": "5",     "correct": true},
                {"option": "6",      "correct": false},
                {"option": "7",   "correct": false},
                {"option": "8",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 10
            "q": "If the perimeter of a circle is 2π, what is its area?",
            "a": [
                {"option": "2π",    "correct": false},
                {"option": "π",     "correct": true},
                {"option": "2",      "correct": false},
                {"option": "1",   "correct": false},
                {"option": "4π",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 11
            "q": "If two workers take three hours to finish a job, and another separate pair of workers takes two hours to finish a job, how many minutes would it take all four workers working together to finish ",
            "a": [
                {"option": "",    "correct": false},
                {"option": "",     "correct": false},
                {"option": "",      "correct": true},
                {"option": "",   "correct": false},
                {"option": "",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 12
            "q": "What is the remainder when 547 is divided by 8?",
            "a": [
                {"option": "",    "correct": false},
                {"option": "",     "correct": false},
                {"option": "",      "correct": true},
                {"option": "",   "correct": false},
                {"option": "",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 13
            "q": "If two six-sided die are rolled and the numbers added up together, what is the probability of a total lower than 3?",
            "a": [
                {"option": "",    "correct": true},
                {"option": "",     "correct": false},
                {"option": "",      "correct": false},
                {"option": "",   "correct": false},
                {"option": "",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 14
            "q": "Forty percent of participants in a recent survey with 250 students said they enjoyed zucchini. Eighty percent of all students in the survey said they did not enjoy squash. If 50 students said they enjoyed squash and zucchini, how many students who enjoyed zucchini did not enjoy squash?",
            "a": [
                {"option": "30",    "correct": false},
                {"option": "40",     "correct": false},
                {"option": "50",      "correct": true},
                {"option": "60",   "correct": false},
                {"option": "70",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 14
            "q": "If Rob gains 10 pounds he will weigh one and a half times his wife’s weight. Currently, their combined weight is 340 pounds. What is Rob’s current weight?",
            "a": [
                {"option": "140",    "correct": false},
                {"option": "160",     "correct": false},
                {"option": "180",      "correct": false},
                {"option": "190",   "correct": false},
                {"option": "200",   "correct": true }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        },
        { // Question 15
            "q": "James traveled at a rate of 50 miles per hour for 2 hours, and a rate of 20 miles per hour for 13 hours. What was his average speed for the fifteen hour period?",
            "a": [
                {"option": "24",    "correct": true},
                {"option": "25",     "correct": false},
                {"option": "28",      "correct": false},
                {"option": "30",   "correct": false},
                {"option": "32",   "correct": false }
            ],
            "correct": "<p>Correct!</p>",
            "incorrect": "<p>Incorrect</p>"
        }
 
    ]
};
