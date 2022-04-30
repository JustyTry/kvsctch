const SelecttionArea = document.querySelector('#Select-area'),
  fileInput = document.querySelector('.file-input');
let preview = document.getElementById('file-preview');
let removeImage = document.getElementById('remove-img');

removeImage.style.display = 'none';

removeImage.addEventListener('click', () => {
  preview.src = '';
  preview.style.display = 'none';
  SelecttionArea.style.display = '';
  removeImage.style.display = 'none';
  fileInput.value = '';
});

SelecttionArea.addEventListener('click', () => {
  fileInput.click();
});

fileInput.onchange = ({ target }) => {
  let file = target.files[0];
  let src = URL.createObjectURL(file);
  preview.src = src;
  SelecttionArea.style.display = 'none';
  removeImage.style.display = '';
  preview.style.display = '';
};
