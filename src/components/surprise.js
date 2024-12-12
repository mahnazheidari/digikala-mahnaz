let surprisecontainer = document.querySelector(".surprise");
let surprise = async () => {
  let data = await fetch("http://localhost:3000/surprise");
  let res = await data.json();
  res.map((surprise) => {
    let item = `<div class="gap-3"><img class="rounded-full w-[70px] lg:w-[90px]" src="${surprise.image}"/><p class="bg-red-600 text-white text-bold w-fit text-xs px-1 rounded-2xl">${surprise.title}</p></div>`;
    surprisecontainer?.insertAdjacentHTML("beforeend", item);
  });
};
export default surprise;


