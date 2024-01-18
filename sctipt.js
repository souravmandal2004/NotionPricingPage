document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('toggle');
    const toggleLabel = document.getElementById('toggle-label');
    const toggleHandle = document.getElementById('toggle-handle');

    toggleLabel.addEventListener('click', function () {
      const isChecked = toggle.checked;

      if (isChecked) {
        toggle.checked = false;
        toggleHandle.style.transform = 'translateX(0)';
      } else {
        toggle.checked = true;
        toggleHandle.style.transform = 'translateX(100%)';
      }
    });
});