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
      currect: "c",
    },
    {
      question: "What Does JS Stand For?",
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
      currect: "a",
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
  const btn = document.querySelector(".btn_position")
  const message = document.querySelector(".message")
  const question = document.querySelector(".question")

  let index = 0;
  let rightAns = 0;
  let wrongans = 0;

    function loadQuestion(){
      if(index === questions.length){
       return endIndex()
      }
      reset()
    let que = questions[index]
    questionHTML.innerHTML = `${index+1} ) ${que.question}`
    input[0].nextElementSibling.innerHTML = que.a
    input[1].nextElementSibling.innerHTML = que.b
    input[2].nextElementSibling.innerHTML = que.c
    input[3].nextElementSibling.innerHTML = que.d
    }

    function submitInput (){
        let ans;
        input.forEach((inp) => {
            if(inp.checked){
                ans = inp.value

            } 
        })
        return ans;
    }

    function reset() {
        input.forEach((inp) => {
          if (inp) {
            inp.checked = false;

          }
        });
      }
      

  btn.addEventListener("click", () => {
    let rightQuestion = questions[index]
    let sub = submitInput();
    // console.log(rightQuestion, sub)/

    if(rightQuestion.currect == sub){
        rightAns++;
        message.innerHTML = "SUCCESS";

        setTimeout(() => {
        message.innerHTML = "";
        }, 2000)

        }else{
        wrongans++;
        message.innerHTML = "WRONG";

        setTimeout(() => {
        message.innerHTML = "";
            }, 2000)
    }
    index++;
    loadQuestion()

  })

  function endIndex (){
    question.innerHTML = `Currect : ${rightAns} , Wromg${wrongans}`
  }
  loadQuestion()
