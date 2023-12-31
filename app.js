const quiz=[
    {
        question: "僕のすきな食べ物は何?",
        answers: [
            "からあげ",
            "とんかつ",
            "和風オムライス",
            "うどん"
        ],
        correct: "和風オムライス"
    },{
        question: "僕の出身小学校は？",
        answers: [
            "厚生小学校",
            "宮山小学校",
            "明倫小学校",
            "有緝小学校"
        ],
        correct: "厚生小学校"
    },{
        question: "僕がやったことのない習い事は？",
        answers: [
            "そろばん",
            "サッカー",
            "水泳",
            "茶道"
        ],
        correct: "茶道"
    }
]
const quizLength = quiz.length;
let quizIndex = 0;
let correctIndex=0;

const $button = document.getElementsByTagName("button");
let buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解!");
        correctIndex++;
    }else{
        window.alert("不正解! 正解は"+quiz[quizIndex].correct+"でした")
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        switch(correctIndex){
            case 0:
                window.alert("正解数"+correctIndex+"問 お前は何も理解していない");
                break;
            case 1:
                window.alert("正解数"+correctIndex+"問 甘い");
                break;
            case 2:
                window.alert("正解数"+correctIndex+"問 やるやん");
                break;
            case 3:
                window.alert("正解数"+correctIndex+"問 Congratulation!")
                break;
        }
    }
}
let handlerIndex=0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

