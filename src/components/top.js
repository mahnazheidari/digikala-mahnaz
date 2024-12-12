let topcontainer = document.querySelector(".top");
let top = async () => {
  let data = await fetch("http://localhost:3000/top");
  let res = await data.json();
  res.map((top) => {
    let gif = `<div class="w-full items-center"><img class="w-full h-[30px] object-cover lg:h-[60px]" src="${top.image}"/></div>`;
    topcontainer?.insertAdjacentHTML("beforeend", gif);
  });
};
export default top;
