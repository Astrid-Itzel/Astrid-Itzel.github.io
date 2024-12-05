/*Type writer:  https://safi.me.uk/typewriterjs/ z*/

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Front-end developer Jr.')
    .pauseFor(2500)
    //después de pausar, se elimina y escribe lo siguiente
    .deleteAll()
    .typeString("Where there's a will, there's a way")
    .pauseFor(2500)
    //Número de caracteres que se borrarán
    .deleteChars(3)
    .typeString('<strong>code!</strong>')
    .pauseFor(2500)
    .start();