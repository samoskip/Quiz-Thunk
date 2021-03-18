import React from "react";

export default function QuestionBlock(props) {
  return (
    <div className="question alert alert-dark" role="alert">
      {decodeHtml(props.question)}
    </div>
  );
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
