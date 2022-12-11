//создали массив, куда зададим картинки
const arrImages =[];
//в массив добавили картинки
arrImages.push('https://unsplash.com/photos/FQjUaIMQF3Q');
arrImages.push('https://unsplash.com/photos/pAWY7xrsLwc');
arrImages.push('https://unsplash.com/photos/teHMGygdJKs');
arrImages.push('https://unsplash.com/photos/ZpZxpOaZWec');
arrImages.push('https://unsplash.com/photos/YIkhLVA4PdE');

//находим в документы картины, которые добавили в массив
const Cards = document.querySelectorAll('.window');

//добавляем адреса картин к тегам img (в html файл)
for(let i=0; i < Cards; i++){
    Cards[i].setAttribute('src',arrImages[i]);
};

//создаем переменную с адресом большой картины
const Image = document.querySelector('#big');
Image.setAttribute('src', arrImages[5]);

//функция передает новый адрес для большой картины
function show (newUrl) {
    Image.setAttribute('src', newUrl);
}

//слушаем нажатие картинки 
Cards.forEach(card => card.addEventListener('mousedown', () => {
    let button = card.getAttribute('src');
}));



    //создали элемент Div 
    const div = document.createElement("div");
     //стилизовали при  помощи style
     div.style.width = "300px";
     div.style.height = "300px";
     div.style.border = "1px solid black";
     //добавили фоновый цвет в динамике, используя аргумент value
     div.style.backgroundColor = "green";
     div.style.textAlign = "center";
     div.innerHTML="This is created div";
     document.body.append(div);

   
     // Изменить цвет при наведении красный
     div.addEventListener("mouseover", (event) => {
         event.target.style.backgroundColor = "red"
     })
 
     // Изменить обратно на зеленый
     div.addEventListener("mouseout", (event) => {
         event.target.style.backgroundColor = "green"
     })




     //создаем список дел
const ol = document.createElement('ol');
//добавляем список в элемент body
document.body.append(ol);
//входим в бесконечный цикл
while(true){
    //вводим данные (строка элемента списка)
    let listItemContent = prompt("Введите, что вы хотите сегодня сделать", "");
    //обрабатываем условие выхода из цикла - если пользователь ввел пустую строку, цикл завершается
    if(listItemContent==""){
        break;
    }
    //создаем элемент списка (тег li)
    let li = document.createElement('li');
    //добавляем введенную строку в созданный элемент
    li.innerHTML=listItemContent;
    //добавляем созданный элемент в конец списка
    ol.append(li);
}
// Изменить цвет при клике на красный
ol.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.style.width = "300px";
})



