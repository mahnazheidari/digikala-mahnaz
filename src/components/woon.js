let wooncontainer = document.querySelector(".woon");
let woon = async () => {
  let data = await fetch("http://localhost:3000/woon");
  let res = await data.json();
  res.map((woon) => {
    let pic = `<div class="w-full items-center"><img class="rounded-xl w-full object-cover lg:h-[216px]" src="${woon.image}" alt="${woon.title}"></div>`;
    wooncontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default woon;
