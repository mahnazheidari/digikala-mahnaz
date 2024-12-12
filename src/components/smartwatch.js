let smartwatchcontainer = document.querySelector(".smartwatch");
let smartwatch = async () => {
  let data = await fetch("http://localhost:3000/smartwatch");
  let res = await data.json();
  res.map((smartwatch) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${smartwatch.image}"/></div>`;
    smartwatchcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default smartwatch;
