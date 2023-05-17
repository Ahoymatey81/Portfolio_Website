document.querySelector('#tt').classList.add('hide');
const tooltip = document.querySelector('.tooltip');
tooltip.addEventListener('click', function() {
  document.querySelector('#tt').classList.toggle('show');
  document.querySelector('#tt').classList.toggle('hide');
})