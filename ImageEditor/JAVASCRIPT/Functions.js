const fileExplorer = document.getElementById('fileExplorer'); //Add Image button
const fileName = document.getElementById('FileName'); //Display the name of the selected file above the canvas
const clear = document.getElementById('Clear'); //Clear button
const save = document.getElementById('Save'); //Save button (Download the edited image)
const container = document.querySelectorAll(".Corrections");
const Message = document.getElementById('Message');
const addImage =  document.querySelector("#AddImg"); 
const slider = document.querySelectorAll('input[type="range"]'); 
const Btn = document.querySelectorAll(".Btn");
const colors = ["#ffffff00","#ff4d0060", "#6a0d8360", "#000e3460", 
"	#ee6f6860", "#f3872f60", "#9c570860", "#b3e3f460"]; //Array with the color codes (in HEX) for the filters
const filterNames = ["Original","Sunrise", "Sunset","Midnight","Spring","Summer", "Autumn", "Winter"]; //Array with the name of the filters
const settings = {};
let img = null;
let i=0;
const canvas = document.querySelector('#Canvas');
const context = canvas.getContext('2d');
const Brightness = document.querySelector("#Brig"); 
const Saturation = document.querySelector("#Satu");
const Blur = document.querySelector("#Blur");
const Negative = document.querySelector("#Nega");

const resetSettings = () =>{
  settings.brightness = "100";
  settings.saturation = "100";
  settings.negative = "0";
  settings.blur = "0";
  Brightness.value = settings.brightness;
  Saturation.value = settings.saturation;
  Negative.value = settings.negative;
  Blur.value = settings.blur;
}

const renderImage = () =>{
  canvas.width = img.width;
  canvas.height = img.height;
  context.filter = generateFilter();
  context.drawImage(img, 0, 0);
}

const updateSetting = (key, value) =>{
  if (!img) return;
  settings[key] = value;
  renderImage();
}

const generateFilter = () =>{
  const { brightness, saturation, negative, blur } = settings;
  return `brightness(${brightness}%) saturate(${saturation}%) invert(${negative}%) blur(${blur}px)` ;
}            

Brightness.addEventListener("change", () =>
  updateSetting("brightness", Brightness.value)
);

Saturation.addEventListener("change", () =>
  updateSetting("saturation", Saturation.value)
);

Blur.addEventListener("change", () =>
  updateSetting("blur", Blur.value)
);

Negative.addEventListener("change", () =>
  updateSetting("negative", Negative.value)
);

const Selected = (e) =>{
  e.style.borderStyle = "solid";
  e.style.borderWidth = "2px";
  e.style.borderColor = "#ffffff";
  e.style["boxShadow"] = "0 0 10px #dddddd";
}

/*Display filter buttons after image is selected*/ 
const FilterContainer = document.getElementById("FilterContainer");
const FilterBox = [];
const BtnFilter = [];
const FN = [];
const InsertFilters = () =>{
  FilterContainer.style.visibility = "visible";
  for(let i=0; i<colors.length; i++){
    FilterBox[i] = document.createElement("div");
    FN[i] = document.createElement("p");
    BtnFilter[i] = document.createElement("button");
    FN[i] = document.createTextNode(filterNames[i]);
    FilterBox[i].className = "FilterButton";
    BtnFilter[i].style.background = colors[i];
    BtnFilter[i].className = "CstBttn";
    BtnFilter[i].value = colors[i];
  const ImageBg = document.createElement("img");
    FilterBox[i].appendChild(ImageBg);
    FilterBox[i].appendChild(BtnFilter[i]);
    FilterBox[i].appendChild(FN[i]);
    FilterContainer.appendChild(FilterBox[i]);
    FilterContainer.appendChild(FilterBox[i]);
  }
}

/*Hides the filter panel*/
const enableTools = () =>{
  container.forEach((e) => { 
    e.style.color = "#ffffff";
  })  
  Btn.forEach((e) => {
    e.disabled = false;  
  })  
  console.log(slider);
  slider.forEach((e) => {
    e.disabled = false;
  })  
  Message.style.visibility = 'hidden';
  addImage.style.display = "none";
}

const Transperent = () =>{
  context.clearRect(0,0,canvas.width, canvas.height);
  renderImage();
}
const saveChanges = () =>{
  const link = document.createElement('a');
  link.download = 'EditedImage.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}
//function for opening File Explorer to select image
fileExplorer.addEventListener('change', function(){
  const myFile =  fileExplorer.files[0];
  console.log(myFile.name);
  img = new Image();
  img.src = URL.createObjectURL(myFile);
    img.addEventListener('load', () =>{
    resetSettings();
    renderImage();
  })
img.src = URL.createObjectURL(this.files[0]);
fileName.textContent = this.files[0].name; 
InsertFilters();
const FilterImg = document.querySelectorAll("img");
FilterImg.forEach((e) =>{
  e.src = "Filter Pattern.jpg";
})
const el = document.querySelector(".CstBttn");
Selected(el);
const ButtonColors = document.querySelectorAll(".CstBttn");
ButtonColors.forEach((e) =>{
  e.addEventListener('click', () =>{
    ButtonColors.forEach((e) =>{
      e.style.borderStyle = "none";
      e.style["boxShadow"] = "";
    })
    Selected(e);
    Transperent();
    context.fillStyle = e.value;
    context.fillRect(0,0, canvas.width, canvas.height);
})
})
enableTools();
})

const CloseFilters = () =>{
  for(let i=0; i<colors.length; i++){
    FilterBox[i].removeChild(BtnFilter[i]);
    FilterBox[i].removeChild(FN[i]);
    FilterContainer.removeChild(FilterBox[i]);
  }
  FilterContainer.style.visibility = "hidden";
  Message.style.visibility = 'visible';
}

const clearChanges = () =>{
CloseFilters();
Btn.forEach((e) => {e.disabled = true;  })  
context.clearRect(0, 0, canvas.width, canvas.height);
fileName.textContent = "No selected file";
addImage.style.display = "block";
container.forEach((e) => { 
  e.style.color = "#ffffff3a";
})  
slider.forEach((e) => {
  e.disabled = true;
  resetSettings();

})  
FilterBtns.forEach((e) =>{
  e.style.visibility = "hidden";
})
}

clear.addEventListener('click', () => {
clearChanges();
})

save.addEventListener('click', () => {
saveChanges();
})

