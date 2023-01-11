
window.onload=function() {
  const Browse = document.getElementById('Browse');
  const Canvas = document.querySelector('#Canvas');
  const context = Canvas.getContext('2d');
  const FileName = document.getElementById('FileName');
  const X = document.getElementById('X');
  const Save = document.getElementById('Save');
  const CorrectionPanel = document.getElementById("CorrectionPanel");
  const Range = document.querySelectorAll('input[type="range"]');
  const Txt = document.querySelectorAll('.Txt2');


Browse.addEventListener('change', function(){
  console.log(Canvas.height, Canvas.width);
  const myFile = Browse.files[0];
  console.log(myFile.name);
  const img = new Image();
  img.src = URL.createObjectURL(myFile);
  img.onload = function(){
    Canvas.width = this.naturalWidth;
    Canvas.height = this.naturalHeight;
  console.log(img.height,img.width);
  context.drawImage(this,0,0,Canvas.width, Canvas.height);
  }

FileName.textContent = this.files[0].name;
  $(".CustomBtn").hide();
CorrectionPanel.style.background = "#070707";
Save.disabled = false;
X.disabled = false;
console.log(Range);
Range.forEach((e) => {
  e.disabled = false;  
  })  
  Txt.forEach((e) => {
    e.style.color = "#ffffff"; 
    })  
})
X.addEventListener('click', function(){
  Save.disabled = true;
  X.disabled = true;
  $(".CustomBtn").show();
context.clearRect(0, 0, Canvas.width, Canvas.height);
FileName.textContent = "No selected file";
CorrectionPanel.style.background = "#0000003a";
})
}

