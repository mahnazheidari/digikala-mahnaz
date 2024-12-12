let menwatchcontainer = document.querySelector(".menwatch");
let menwatch = async () => {
  let data = await fetch("http://localhost:3000/menwatch");
  let res = await data.json();
  res.map((menwatch) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${menwatch.image}"/></div>`;
    menwatchcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default menwatch;
