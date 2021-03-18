import React from "react";

export default function AnswerBlock(props) {
  return (
    <div className="col">
      <strong>{props.order}. </strong>
      <button
        type="button"
        className=" answer btn btn-secondary"
        onClick={() => checkIfCorrect(props)}
      >
        {decodeHtml(props.answer)}
      </button>
    </div>
  );
}

function checkIfCorrect(props) {
  if (props.isCorrect) {
    console.log("Correct!");
    props.callback(1);
    //window.location.reload(false);
  } else {
    props.validate(false);
  }
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
