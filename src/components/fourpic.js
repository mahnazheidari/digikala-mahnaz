let fourpiccontainer = document.querySelector(".fourpic");
let fourpics = async () => {
  let data = await fetch("http://localhost:3000/fourpic");
  let res = await data.json();
  res.map((fourpics) => {
    let pic = `<div class="flex items-center justify-center flex-col gap-3"><img class="rounded-xl object-cover" src="${fourpics.image}" alt="${fourpics.image}"></div>`;
    fourpiccontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default fourpics;
