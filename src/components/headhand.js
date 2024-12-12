let headhandcontainer = document.querySelector(".headhand");
let headhand = async () => {
  let data = await fetch("http://localhost:3000/headhand");
  let res = await data.json();
  res.map((headhand) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${headhand.image}"/></div>`;
    headhandcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};

export default headhand;
