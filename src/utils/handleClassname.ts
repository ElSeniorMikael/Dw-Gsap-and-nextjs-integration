function handleClassname(
  classList: string[],
  styles: { [key: string]: string }
) {
  let classToReturn: string = "";

  classList.map((className: string, i) => {
    if (className === "" || typeof className !== "string")
      classToReturn = classToReturn + "";
    else {
      if (i === 0 && className !== "") classToReturn = styles[className] + " ";
      else if (i === classList.length - 1 && className !== "")
        classToReturn = classToReturn + styles[className];
      else if (className !== "") {
        classToReturn = classToReturn + styles[className] + " ";
      }
    }
  });

  return classToReturn;
}

export default handleClassname;
