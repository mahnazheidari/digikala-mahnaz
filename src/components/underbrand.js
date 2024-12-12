let underbrandcontainer = document.querySelector(".underbrand");
let underbrand = async () => {
  let data = await fetch("http://localhost:3000/underbrand");
  let res = await data.json();
  res.map((underbrand) => {
    let pic = `<div class="items-center justify-center gap-3"><img class="rounded-xl object-cover w-full mt-3" src="${underbrand.image}"></div>`;
    underbrandcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default underbrand;
