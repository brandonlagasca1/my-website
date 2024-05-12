const toggleButton = document.getElementById('toggleButton');
const hiddenMessage = document.getElementById('hiddenMessage');

toggleButton.addEventListener('click', function() {
    if (hiddenMessage.style.display === 'none') {
        hiddenMessage.style.display = 'block';
    } else {
        hiddenMessage.style.display = 'none';
    }
});
