import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {
    @track selectedAnswer = {};
    pass = false;
    scoreSentence = "";
    @track quizData = [
        {
            id: 1,
            question: "If a car travels 200 miles in 4 hours, what is its average speed",
            answers: {
                a: '40 Mph',
                b: '50 Mph',
                c: '60 Mph',
                d: '70 Mph'
            },
            correctAnswer: 'b'
        },
        {
            id: 2,
            question: "If it takes 5 hours for 5 men to dig 5 holes, how long does it take for 100 men to dig 100 holes",
            answers: {
                a: '1 Hour',
                b: '2 Hour',
                c: '5 Hour',
                d: '10 Hour'
            },
            correctAnswer: 'c'
        },
        {
            id: 3,
            question: "Mary is three times as old as John. If Mary is 30 years old, how old is John",
            answers: {
                a: '10 Years Old',
                b: '20 Years Old',
                c: '30 Years Old',
                d: '40 Years Old'
            },
            correctAnswer: 'a'
        },
        {
            id: 4,
            question: "A rectangle has a length of 12 cm and width of 8 cm. What is its area?",
            answers: {
                a: '20 cm²',
                b: '40 cm²',
                c: '80 cm²',
                d: '96 cm²'
            },
            correctAnswer: 'd'
        },
        {
            id: 5,
            question: "If 3x + 7 = 22, what is the value of x?",
            answers: {
                a: '3',
                b: '5',
                c: '7',
                d: '9'
            },
            correctAnswer: 'b'
        },
        {
            id: 6,
            question: "A store offers a 20% discount on a $50 item. What is the final price?",
            answers: {
                a: '$30',
                b: '$35',
                c: '$40',
                d: '$45'
            },
            correctAnswer: 'c'
        },
        {
            id: 7,
            question: "If a pizza is divided into 8 equal slices and you eat 3 slices, what fraction of the pizza remains?",
            answers: {
                a: '3/8',
                b: '1/2',
                c: '5/8',
                d: '3/4'
            },
            correctAnswer: 'c'
        },
        {
            id: 8,
            question: "What is the perimeter of a square with side length 5 cm?",
            answers: {
                a: '10 cm',
                b: '15 cm',
                c: '20 cm',
                d: '25 cm'
            },
            correctAnswer: 'c'
        }
    ];

    handleClick(event){
        event.preventDefault();
        const correctAnswers = this.quizData.filter(item => {
            const selected = this.selectedAnswer[item.id];
            // console.log(JSON.parse(JSON.string))
            return item.correctAnswer === selected;
        });

        console.log('correct Answers:', correctAnswers.length);
        
        const score = (correctAnswers.length / this.quizData.length) * 100.0;
        this.scoreSentence = `Your score is ${score}%`;
    }



    updateAnswers(event){
        event.preventDefault();
        const answer = event.target.value;
        const questionNumber = event.target.name;
        this.selectedAnswer[questionNumber] = answer;
    }
}