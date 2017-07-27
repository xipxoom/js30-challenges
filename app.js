/*jshint esnext: true, browser: true, devel: true*/

// Wrapper should not be necessary with the defer attribute
document.addEventListener('DOMContentLoaded', function() {
  function handleUpdate() {
    var suffix = '';
    if (this.name === 'spacing' || this.name === 'blur') {
      suffix = 'px';
    }
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  
  const controls = document.querySelectorAll('.controls input');
  for (const control of controls) {
    control.addEventListener('change', handleUpdate);
    control.addEventListener('mousemove', handleUpdate);
  }
});