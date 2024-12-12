let lavazemcontainer = document.querySelector(".lavazem");
let lavazem = async () => {
  let data = await fetch("http://localhost:3000/lavazem");
  let res = await data.json();
  res.map((lavazem) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${lavazem.image}"/></div>`;
    lavazemcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default lavazem;
