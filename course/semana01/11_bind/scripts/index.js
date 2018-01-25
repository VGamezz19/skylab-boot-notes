qs = document.querySelector
qs("h1") //This throw an Error!

qs = document.querySelector.bind(document)
qs("h1") //This worsk 