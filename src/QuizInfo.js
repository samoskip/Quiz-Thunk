import React, { useState } from "react";
import AnswerBlock from "./AnswerBlock";
import QuestionBlock from "./QuestionBlock";
import _ from "lodash";

function QuizInfo(props) {
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(true);
  const questionsArr = {
    0: { question: props.user[score].correct_answer, correct: true },
    1: { question: props.user[score].incorrect_answers[0], correct: false },
    2: { question: props.user[score].incorrect_answers[1], correct: false },
    3: { question: props.user[score].incorrect_answers[2], correct: false }
  };
  const t = (e) => {
    console.log(score + e);
    setScore(score + e);
  };

  const w = (e) => {
    console.log(e);
    setWin(e);
  };

  const refresh = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 4000);
  };

  var o = _.shuffle([0, 1, 2, 3]);
  return (
    <div>
      {win ? (
        <div>
          {score < 5 ? (
            <div>
              <h1>
                <span
                  class="badge badge-secondary text-center"
                  style={{
                    alignItems: "center",
                    justifyContent: "space-around",
                    display: "flex"
                  }}
                >
                  {" "}
                  {"\u00A0"}Q{score + 1}
                  {"\u00A0"}
                </span>
              </h1>

              <div className="alert alert-secondary" role="alert">
                <QuestionBlock question={props.user[score].question} />
                <div className="container">
                  <div className="row">
                    <AnswerBlock
                      answer={questionsArr[o[0]].question}
                      isCorrect={questionsArr[o[0]].correct}
                      order="A"
                      callback={t}
                      validate={w}
                    />
                    <AnswerBlock
                      answer={questionsArr[o[1]].question}
                      isCorrect={questionsArr[o[1]].correct}
                      order="B"
                      callback={t}
                      validate={w}
                    />
                    <div className="w-100"></div>
                    <AnswerBlock
                      answer={questionsArr[o[2]].question}
                      isCorrect={questionsArr[o[2]].correct}
                      order="C"
                      callback={t}
                      validate={w}
                    />
                    <AnswerBlock
                      answer={questionsArr[o[3]].question}
                      isCorrect={questionsArr[o[3]].correct}
                      order="D"
                      callback={t}
                      validate={w}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="jumbotron jumbotron-fluid"
              style={{ backgroundColor: "white" }}
            >
              <div className="container text-center">
                <h1 className="display-4">You win!</h1>
                <p className="lead">
                  You've answered all five questions correctly! {refresh()}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white" }}
        >
          <div className="container text-center">
            <h1 className="display-4">You lose!</h1>
            <p className="lead">
              You answered that last question incorrectly!
              {refresh()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizInfo;
