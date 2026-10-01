import { Meme } from "../../Meme.js";
let current = new Meme();
export const loadImageSelectOptions = (images) => {
  const select = document.forms["meme-form"]["imageId"];
  select.innerHTML = '<option value="-1">no img</option>';
  images.forEach((img) => {
    const opt = document.createElement("option");
    opt.value = img.id;
    opt.textContent = img.name;
    select.appendChild(opt);
  });
};
const refreshSvg=()=>{
  const viewer=document.querySelector('#viewer');
  viewer.innerHTML='';
  viewer.appendChild(current.getSVGNode())

}
export const fillForm = () => {
  const form = document.forms["meme-form"];
  for (let i = 0; i < form.length - 2; i++) {
    const name = form[i].name;
    const input = form[i];
    if (
      input.type == "button" ||
      input.tagName === "BUTTON" ||
      input.type == "submit" ||
      input.type == "reset"
    ) {
      console.log("not used");
    } else if (input.type == "checkbox") {
      input.checked = current[name];
      input.addEventListener("input", (evt) => {
        current[name] = input.checked;
        refreshSvg()
      });
    } else {
      input.value = current[name];
      input.addEventListener("input", (evt) => {
        current[name] = input.value;
        refreshSvg()
      });
    }
  }
};
