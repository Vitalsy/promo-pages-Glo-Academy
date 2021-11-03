const Lists = document.querySelectorAll(".feature-sub");
const btns = document.querySelectorAll(".feature__link");
// console.dir(btn);// dir выводит элемент как объект
// console.log(btns);
// btn.addEventListener("click", function() {
//   alert("cc")
// }); //принимает события и функцию, по которой она должна принимать события 

// for (let i = 0; i < btns.length;i++){
//   btns[i].addEventListener("click", () => {console.log(btns[i]);} );
// }; попробуем другой цикл
btns.forEach((btnItem, index)  => {
  btnItem.addEventListener("click", () => {
    btns.forEach((btnItem)  =>{
      btnItem.classList.remove("feature__link_active");
    });
    btnItem.classList.add("feature__link_active");

    Lists.forEach((listItem) => {
      listItem.classList.add("hidden");
    });

    Lists[index].classList.remove("hidden");
  });
});

//addEventListener может принимать и выполнять несколько функций, в то время обычный обработчик событий лишь одну, если указать вторую, то он перезапишет первую на последнюю
// btn.onclick = function(){
//   alert("1")
// };
// btn.onclick = function(){
//   alert("2")
// };  - выведет 2
// btn.addEventListener("click", function(){
//   alert("f");
// });
// btn.addEventListener("click", function(){
//   alert("g");
// }); - выведет и f и g

// btn.addEventListener("click", () =>{
//   console.log("1");
//   console.log("2");

// })
// btn.addEventListener("click", () => console.log("4") )
