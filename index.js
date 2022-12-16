function renderHTML ()

{
    let body = document.querySelector("body");
    let heading = document.createElement("h1");
    let paraGraph = document.createElement("p");
    let table = document.createElement("table");
    heading.innerHTML = `My HTML adventure`
    paraGraph.innerHTML = `<strong>strong text</strong>\n
    <em></em>\n
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">this is a link<a>
    `
    body.appendChild(heading)
    body.appendChild(paraGraph)
    body.appendChild(table)
}

renderHTML();
