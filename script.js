document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('color-picker');
    const listStyleSelect = document.getElementById('list-style');
    const imageDropdown = document.getElementById('image-dropdown');
    const sampleList = document.getElementById('sample-list');
    const body = document.body;

    // Load preferences from local storage
    const savedColor = localStorage.getItem('themeColor');
    const savedListStyle = localStorage.getItem('listStyle');
    const savedBackgroundImage = localStorage.getItem('backgroundImage');

    if (savedColor) {
        colorPicker.value = savedColor;
        document.documentElement.style.setProperty('--theme-color', savedColor);
    }

    if (savedListStyle) {
        listStyleSelect.value = savedListStyle;
        sampleList.className = savedListStyle;
    }

    if (savedBackgroundImage) {
        imageDropdown.value = savedBackgroundImage;
        body.style.backgroundImage = `url(${savedBackgroundImage})`;
    }

    // Event listeners
    colorPicker.addEventListener('input', function() {
        const color = colorPicker.value;
        document.documentElement.style.setProperty('--theme-color', color);
        localStorage.setItem('themeColor', color);
    });

    listStyleSelect.addEventListener('change', function() {
        const listStyle = listStyleSelect.value;
        sampleList.className = listStyle;
        localStorage.setItem('listStyle', listStyle);
    });

    imageDropdown.addEventListener('change', function() {
        const backgroundImage = imageDropdown.value;
        body.style.backgroundImage = backgroundImage ? `url(${backgroundImage})` : '';
        localStorage.setItem('backgroundImage', backgroundImage);
    });
});
