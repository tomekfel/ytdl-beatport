var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
    let title = 'some_title';
    let album = 'some_album';
    let artist = 'some_artist';

    sendURL(URLinput.value, title, album, artist);
});

function sendURL(URL, title, album, artist) {
    window.location.href = `https://cryptic-sierra-24159.herokuapp.com/download?URL=${URL}&title=${title}&artist=${artist}&album=${album}`;
}