let questions = [
    {
      question: "What Does HTML Stand For?",
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
      currect: "b",
    },
  
    {
      question: "What Does CSS Stand For?",
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
      currect: "b",
    },
    {
      question: "What Does JS Stand For?",
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
      currect: "b",
    },
  
    {
      question: "What Python HTML Stand For?",
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
      currect: "b",
    },
  
    {
      question: "What Does JAVA Stand For?",
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
      currect: "b",
    },
  ];


  const input = document.querySelectorAll("input")
  const questionHTML = document.querySelector(".questionHTML")
  let index = 0;
  let que = questions[index]
  console.log(que)

  loadQuestion()
function loadQuestion(){
    // console.log(que.a)
    questionHTML.innerHTML = `${index + 1}` + " "+ que.question
    input[0].nextElementSibling.innerHTML = que.a
    input[1].nextElementSibling.innerHTML = que.b
    input[2].nextElementSibling.innerHTML = que.c
    input[3].nextElementSibling.innerHTML = que.d
  }
  