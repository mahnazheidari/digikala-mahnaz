let supermarketcontainer = document.querySelector(".supermarket");
let supermarket = async () => {
  let data = await fetch("http://localhost:3000/supermarket");
  let res = await data.json();
  res.map((supermarket) => {
    let pic = `<div class="w-full items-center "><img class="rounded-xl w-full object-cover lg:h-[216px]" src="${supermarket.image}" alt="${supermarket.title}"></div>`;
    supermarketcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default supermarket;
