'use strict';
const helloWord = 'Hello, Word'

function salutation() {
    return "Hello, Word"
}

ReactDOM.render(
    <main>
    <section>
        <h1>{helloWord}</h1>
        {salutation()}
    </section>
</main>, document.getElementById('root'))