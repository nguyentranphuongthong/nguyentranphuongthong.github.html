const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //******Viet code o day*********************
  setNextQuestion()
  //****************************************
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 //******Viet code o day*********************
 currentQuestionIndex = 0
  //****************************************
  questionContainerElement.classList.remove('hide')
   //******Viet code o day*********************
   setNextQuestion()
  //****************************************
}

function setNextQuestion() {
   //******Viet code o day*********************
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
  //****************************************
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: 'Nếu 1 con tuần lộc bị 1 đàn sư tử đuổi theo. Hỏi con tuần lộc sẽ ra sao ?',
    answers: [
      { text: 'Sẽ chạy thoát', correct: false },
      { text: 'Sẽ bị thịt', correct: false },
      { text: 'Chẳng bị gì cả', correct: true }
    ]
  },
  {
    question: 'Có 1 người dẫn 1 đàn heo đi qua đường. Vậy người đó tên gì ?',
    answers: [
      { text: 'Hợi', correct: false },
      { text: 'Lợn', correct: false },
      { text: 'Hương', correct: true },
      { text: 'Hà', correct: false }
    ]
  },
  {
    question: 'Chim gì bị thương không đau ?',
    answers: [
      { text: 'Chim đại bàng', correct: false },
      { text: 'Chim cánh cụt', correct: true },
      { text: 'Chim điên', correct: false },
      { text: 'Không có', correct: false }
    ]
  },
  {
    question: 'Con gì sống dai nhất ?',
    answers: [
      { text: 'Con rắn', correct: false },
      { text: 'Con gấu nước', correct: true },
      { text: 'Con rùa', correct: false }
    ]
  }
]