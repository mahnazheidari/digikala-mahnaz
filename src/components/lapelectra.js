let lapelectracontainer = document.querySelector(".lapelectra");
let lapelectra = async () => {
  let data = await fetch("http://localhost:3000/lapelectra");
  let res = await data.json();
  res.map((lapelectra) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${lapelectra.image}"/></div>`;
    lapelectracontainer?.insertAdjacentHTML("beforeend", pic);
  });
};

export default lapelectra;
