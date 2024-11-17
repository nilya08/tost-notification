let successBtn = document.getElementById("success");
let invalidBtn = document.getElementById("invalid");
let errorBtn = document.getElementById("error");
let toastBox= document.getElementById("ToastBox");

let successMsg = '<i class="fa-solid fa-circle-check"> </i>&nbsp; succesfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"> </i>&nbsp; Please fix the error !';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>&nbsp; invalid input check again';


successBtn.addEventListener("click",()=>{
    showToast(successMsg);
});

invalidBtn.addEventListener("click",()=>{
    showToast(errorMsg);
});

errorBtn.addEventListener("click",()=>{
    showToast(invalidMsg);
});

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
    toast.classList.add('error');
    }
    if(msg.includes('again')){
        toast.classList.add('again');
        }

        setTimeout(()=>{
            toast.remove();
        },6000)
}