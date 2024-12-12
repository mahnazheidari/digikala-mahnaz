let undercatcontainer = document.querySelector(".undercat");
let undercat = async () => {
  let data = await fetch("http://localhost:3000/undercat");
  let res = await data.json();
  res.map((undercat) => {
    let pic = `<div class="items-center justify-center gap-3"><img class="rounded-xl object-cover w-full mt-3" src="${undercat.image}"></div>`;
    undercatcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default undercat;
