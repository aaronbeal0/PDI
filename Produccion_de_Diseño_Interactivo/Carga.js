window.addEventListener('load', function () {
    // Simula un tiempo de carga de 3 segundos
    setTimeout(function () {
        var loader = document.getElementById('loader');
        var content = document.getElementById('content');

        loader.style.display = 'none';
        content.classList.remove('hidden');
    }, 3000);
});