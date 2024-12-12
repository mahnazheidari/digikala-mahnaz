let mobilecontainer = document.querySelector(".mobile");
let mobile = async () => {
  let data = await fetch("http://localhost:3000/mobile");
  let res = await data.json();
  res.map((mobile) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${mobile.image}"/></div>`;
    mobilecontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default mobile;
