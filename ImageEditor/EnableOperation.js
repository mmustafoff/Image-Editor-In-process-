export let Enable =  function(Save, Clear){
let save = this.Save;
let clear = this.Clear;
save.disabled = false;
clear.disabled = false;

return [save, clear];
};

export let Disable = function(Save, Clear){

let save = this.Save;
let clear = this.Clear;
save.disabled = true;
clear.disabled = true;

return [save, clear];
}

