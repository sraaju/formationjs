export const loadImagesSelectOptions = (images) => {
  const sel1 = document.forms["meme-form"]["imageId"];
  
  sel1.innerHTML = "";
  // sel1.innerHTML = ...
  images.forEach((img) => {
    const opt = document.createElement("option");
    opt.value = img.id;
    opt.textContent = img.name;
    sel1.appendChild(opt);
  });
};