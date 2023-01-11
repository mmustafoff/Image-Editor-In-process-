
window.onload= () => {


  const Browse = document.getElementById('Browse');
  const FileName = document.getElementById('FileName');
  const X = document.getElementById('X');
  const Save = document.getElementById('Save');
  const CorrectionPanel = document.getElementById("CorrectionPanel");
  const CstBtn =  document.querySelector(".CustomBtn");
  const Range = document.querySelectorAll('input[type="range"]');
  const Txt = document.querySelectorAll('.Txt2');
  const Btn = document.querySelectorAll(".Btn");
  const Canvas = document.querySelector('#Canvas');
  const context = Canvas.getContext('2d');
//function for opening File Explorer to select image
Browse.addEventListener('change',  function(){
  
  console.log(Canvas.height, Canvas.width);
  const myFile = Browse.files[0];
  console.log(myFile.name);
  const img = new Image();
  img.src = URL.createObjectURL(myFile);

//positioning of the selected image
  img.onload = function(){
    Canvas.width = this.naturalWidth;
    Canvas.height = this.naturalHeight;
  console.log(img.height,img.width);
  context.drawImage(this,0,0,Canvas.width, Canvas.height);
  }

  //
FileName.textContent = this.files[0].name;
CstBtn.style.display = 'none';
CorrectionPanel.style.background = "#070707";
Btn.forEach((e) => {e.disabled = false;  })  
console.log(Range);
Range.forEach((e) => {e.disabled = false;  })  
  Txt.forEach((e) => {e.style.color = "#ffffff"; })  
})

//Function for clearing canvas and disable all buttons/input[range]
X.addEventListener('click', function() {
  Btn.forEach((e) => {e.disabled = true;  })  
  $(".CustomBtn").show();
context.clearRect(0, 0, Canvas.width, Canvas.height);
FileName.textContent = "No selected file";
CorrectionPanel.style.background = "#0000003a";
Range.forEach((e) => {e.disabled = true;})  
Txt.forEach((e) => {e.style.color = "#ffffff3a"; })  
})

Save.addEventListener('click', function() {
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = Canvas.toDataURL();
  link.click();
  link.delete;

})
}

