let brandendcontainer = document.querySelector(".brandend");
let brandend = async () => {
  let data = await fetch("http://localhost:3000/brandend");
  let res = await data.json();
  res.map((brandend) => {
    let pic = `<div class="w-full items-center justify-center bg-slate-200"><img class="object-cover w-[70px] items-center justify-center" src="${brandend.image}"></div>`;
    brandendcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default brandend;
