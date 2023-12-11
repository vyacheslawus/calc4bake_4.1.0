
// // LOGIN USER COMP

// const loginWrapper = document.querySelector('.login-wrapper');
// const loginButton = document.querySelector('.login-button');
// const loginInput = document.querySelector('.login-input');
// const passwordInput = document.querySelector('.login-password');
// const userWrapper = document.querySelector('.user-wrapper');
// const userName = document.querySelector('.user-name');
// const logOutButton = document.querySelector('.logout-button');

// loginButton.addEventListener('click', () => {
//   const loginValue = loginInput.value;

//   if (loginInput.value !== '' && loginInput.value.length > 4) {
//     loginWrapper.style.display = 'none';
//     userWrapper.classList.add('user-active');
//     userName.textContent = loginValue;
//   } else {
//     alert('логин должен содержать не менее 4 символов')
//   }
// });

// logOutButton.addEventListener('click', () => {

//   loginWrapper.style.display = 'block';
//   userWrapper.classList.remove('user-active');
//   loginInput.value = '';
//   passwordInput.value = '';
// });

// import arrayREcipes from './objects1.json'

// console.log(arrayREcipes);

const CardListArray = [

  {
    itemName: "Львовский сырник",
    description: "Lvov sirnik Lvov sirnik Lvov sirnik Lvov sirnik Lvov sirnik Lvov sirnik ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAnId2Q3oqffoD4AtlW8mqcnjZzRxIPoTHujaFdgunzCmfcaSQcKkGZkuFjkyP6OANaw&usqp=CAU",
    id: 19,
  },

  {
    itemName: "Булки с кардамоном",
    description: "cardamom buns cardamom buns cardamom buns cardamom",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw7jFZ6HLPWKd2RgnGhp680akj60VwPNt0pVrIu9G2fffCEhaqUiv2MXb2dINM-1K1TY&usqp=CAU",
    id: 17,


  },

  {
    itemName: "Pavlova",
    description: "pavlova_pavlova pavlova_pavlova pavlova_pavlova pavlova_pavlova pavlova_pavlova pavlova_pavlova ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b2bG1zYW-c5P7MItOtVXbaOeupOt9oEEGoowjObP0G49nSizy18bdMJzCSJ-7ssrM5g&usqp=CAU",
    id: 16,


  },

  {
    itemName: 'Хлеб Бородинский',
    description: 'Бездрожжевой бородинский хлеб на закваске',
    image: "./pics/borodino.jpeg",
    id: 2,

  },

  {
    itemName: 'Хлеб Дарницкий',
    description: 'Хлеб бездрожжевой на ржаной закваске.</br> Прозводится согласно рецептуре соответствующей стандарту качества',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQtzqPpSXV32FqUoCWRyDeHIWYJTNv0_uLXJ_4vubTs06Q-qOxjDGjnld7gWAkSny-c4&usqp=CAU",
    id: 3,

  },
  {
    itemName: 'Круасcан',
    description: 'Французский круасcан по классической рецептуре на кефире',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyulwap_tBm07pYnFFsWo9v1L30TzTRgDLMg&usqp=CAU",
    id: 4,



  },

  {
    itemName: 'Круассан сливочный 5-ти слойный',
    description: 'Французский круассан особой рецептуры на сливочном масле',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyulwap_tBm07pYnFFsWo9v1L30TzTRgDLMg&usqp=CAU',
    id: 5,

  },

  {
    itemName: "Тартин",
    description: "Хлеб бездрожжевой из цельнозерновой пшеничной муки",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyj483hD-L5OSmKQ-GtPXYrIkCgNZ8DhHD0h_TAfIixvOKHvlSdRqcVBtF0t3Vv9Xmf9I&usqp=CAU',
    id: 6,

  },

  {
    itemName: "keks bananoviy",
    description: 'bananoviy keks bananoviy keks bananoviy keks',
    image: "https://www.gastronom.ru/binfiles/images/20201224/b68cdea5.jpg",
    id: 7,

  },

  {
    itemName: "Rum Baba",
    description: "Rum baba rum baba rum baba",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLngCV8iijrk2xJdwGa1M_9aCzDxM4gHO3baVbWsTZ9BsrtgGVFgNkvn78CW8GymvlKc&usqp=CAU",
    id: 9,

  },

  {
    itemName: "Ciabatta",
    description: 'from italy with love from italy with love from italy with love',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwAmBwqAcRzh7zavXxioHNl8b0nHfOPj8EIfPVqguwq_qij4xhKt2YmCPyyIQa6CUJos&usqp=CAU",
    id: 8,

  },

  {
    itemName: "sochnik",
    description: 'sochnik with cottage cheese',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwST2MtDtFTvoednu5MGC-Dc2iPADLP5Z7_1Z2kXTgVAnMoiBhCtLxNO3-ZxA_6encTIM&usqp=CAU",
    id: 10,

  },

  {
    itemName: 'Charlotte with apples',
    description: 'just a pie with apples just a pie with apples just a pie with apples just a pie with apples just a pie with apples',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMKDUOpqpXLcAZUXAXcwzI7tmXNSRsgMHRoSSglpb88oHsl9CelW-kfBb0grU0tiJM7g&usqp=CAU",
    id: 18,

  },

  {
    itemName: 'banoffee pie',
    description: 'pie with banannas',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAUm-K_XjG7dk1mOrr3P-pVeJXxb2XQoC_71bN8viMMEULfxxkjMwpbIOpBF9bAwPx2o&usqp=CAU",
    id: 11,

  },

  {
    itemName: "Lemon pie",
    description: "pie with lemons",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JcRBR1IlMwl2UIAN9p9e0tQiIMQF_fEjGk130Kkz6nY7bRQ6roDdi-rVG-wWjn3IKCM&usqp=CAU",
    id: 12,

  },

  {
    itemName: "cheese cake",
    description: "just a cheesecake with mascarpone cream",
    image: "https://vsedoma-family.ru/sites/default/files/styles/product/public/product/f8bfddda8e19625d5d5a625987dd3ca7.jpg?itok=_P-pTXCy",
    id: 13,

  },

  {
    itemName: "brownie pie",
    description: "chocolate cocoa pie",
    image: "https://img.iamcook.ru/2020/upl/recipes/cat/u-350b1fd89240624e1b382107ac6e64e2.JPG",
    id: 14,


  },

  {
    itemName: "тыквенный",
    description: "тыквенный пирог тыквенный пирог тыквенный пирог тыквенный пирог тыквенный пирог",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7caaJtskPC8W2Exk_kMaf_c5iPcLggHnPfrsrehcqZdSB05_vhZj0vb-G13RafcX3eM&usqp=CAU",
    id: 15,

  },

];

const borodinoBread = {
  itemName: 'Хлеб Бородинский',
  description: 'Бездрожжевой бородинский хлеб на закваске',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pR9lYrLL6foi2hJVTthl0imMjSe06TGHCw&usqp=CAU",
  id: 2,
  ingredients: [

    {
      name: "заварка солодовая",
      amount: 60
    },

    {
      name: "закваска ржаная",
      amount: 100
    },

    {
      name: "мука пш.",
      amount: 85
    },

    {
      name: "мука ржаная",
      amount: 100
    },

    {
      name: "вода",
      amount: 85
    },

    {
      name: "дрожжи",
      amount: 1.5
    },

  ],
};

const darnitsaBread = {
  itemName: 'Хлеб Дарницкий',
  description: 'Хлеб бездрожжевой на ржаной закваске.</br> Прозводится согласно рецептуре соответствующей стандарту качества',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQtzqPpSXV32FqUoCWRyDeHIWYJTNv0_uLXJ_4vubTs06Q-qOxjDGjnld7gWAkSny-c4&usqp=CAU",
  id: 3,
  ingredients: [
    {
      name: "мука пш.",
      amount: 150
    },

    {
      name: "мука ржаная",
      amount: 120
    },

    {
      name: "вода",
      amount: 170
    },

    {
      name: "закваска ржаная",
      amount: 220
    },

    {
      name: "соль",
      amount: 7
    },

    {
      name: "тростниковый сахар",
      amount: 200
    },

    {
      name: "дрожжи сух.",
      amount: 1.5
    },
  ],
};

const croissant = {
  itemName: 'Круасcан',
  description: 'Французский круасcан по классической рецептуре на кефире',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyulwap_tBm07pYnFFsWo9v1L30TzTRgDLMg&usqp=CAU",
  id: 4,
  flour: 42,
  kefir: 11,
  salt: 0.5,
  sugar: 4.25,
  yeastPress: 2.5,
  eggs: 8,


};

const croissantButter = {
  itemName: 'Круассан сливочный 5-ти слойный',
  description: 'Французский круассан особой рецептуры на сливочном масле',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyulwap_tBm07pYnFFsWo9v1L30TzTRgDLMg&usqp=CAU',
  id: 5,
  ingredients: [
    {
      name: "мука пш. французская",
      amount: 1200
    },

    {
      name: "дрожжи сух.",
      amount: 16
    },

    {
      name: "сахар",
      amount: 120
    },

    {
      name: "соль",
      amount: 20
    },

    {
      name: "вода",
      amount: 300
    },

    {
      name: "молоко",
      amount: 300
    },

    {
      name: "яйца",
      amount: 80
    },

    {
      name: "масло сл. 82%",
      amount: 80
    },
  ],
};

const tartin = {
  itemName: "Тартин",
  description: "Хлеб бездрожжевой из цельнозерновой пшеничной муки",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyj483hD-L5OSmKQ-GtPXYrIkCgNZ8DhHD0h_TAfIixvOKHvlSdRqcVBtF0t3Vv9Xmf9I&usqp=CAU',
  id: 6,
  ingredients: [
    {
      name: "мука пш. итальянская",
      amount: 338
    },

    {
      name: "мука пш. цельнозерновая",
      amount: 38
    },

    {
      name: "закваска пш. цельнозерн.",
      amount: 63
    },

    {
      name: "вода",
      amount: 257
    },

    {
      name: "дрожжи сух.",
      amount: 1
    },

    {
      name: "соль",
      amount: 7
    },
  ],
}

const bananaCake = {
  itemName: "keks bananoviy",
  description: 'bananoviy keks bananoviy keks bananoviy keks',
  image: "https://www.gastronom.ru/binfiles/images/20201224/b68cdea5.jpg",
  id: 7,
  ingredients: [
    {
      name: "мука",
      amount: 200
    },
    {
      name: "яйца",
      amount: 2
    },

    {
      name: "сахар",
      amount: 100
    },
    {
      name: "соль",
      amount: 3
    },

    {
      name: "бананы",
      amount: 250
    },

    {
      name: "маргарин",
      amount: 100
    },

    {
      name: "разрыхлитель",
      amount: 5
    },

    {
      name: "тростниковый сахар",
      amount: 10
    },

    {
      name: "грецкий орех",
      amount: 50
    },

  ],
}

const rumBaba = {
  itemName: "Rum Baba",
  description: "Rum baba rum baba rum baba",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLngCV8iijrk2xJdwGa1M_9aCzDxM4gHO3baVbWsTZ9BsrtgGVFgNkvn78CW8GymvlKc&usqp=CAU",
  id: 9,
  ingredients: [

    {
      name: "мука",
      amount: 35,
    },

    {
      name: "вода",
      amount: 12,
    },

    {
      name: "дрожжи сух.",
      amount: 1,
    },

    {
      name: "масло сл. 82%",
      amount: 8,
    },

    {
      name: "сахар",
      amount: 9,
    },

    {
      name: "яйца",
      amount: 5,
    },

    {
      name: "соль",
      amount: 0.2,
    },

    {
      name: "ванилин",
      amount: 0.5,
    },

    {
      name: "изюм",
      amount: 5,
    },

  ],

  //its will should doing later in the modal window
  // sugarFudge: {
  //   sugar: 40,
  //   water: 13,
  //   lemonJuice: 2
  // },
  // syrupFudge: {
  //   water: 25,
  //   sugar: 25,
  //   rum: 3
  // },
  //its will should doing later in the modal window
}

const ciabatta = {
  itemName: "Ciabatta",
  description: 'from italy with love from italy with love from italy with love',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwAmBwqAcRzh7zavXxioHNl8b0nHfOPj8EIfPVqguwq_qij4xhKt2YmCPyyIQa6CUJos&usqp=CAU",
  id: 8,
  ingredients: [
    {
      name: "мука",
      amount: 300,
    },

    {
      name: "дрожжи сух",
      amount: 4,
    },

    {
      name: "вода",
      amount: 225,
    },

    {
      name: "соль",
      amount: 5,
    },

    {
      name: "сахар",
      amount: 5,
    },
  ],
}

const sochnik = {
  itemName: "sochnik",
  description: 'sochnik with cottage cheese',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwST2MtDtFTvoednu5MGC-Dc2iPADLP5Z7_1Z2kXTgVAnMoiBhCtLxNO3-ZxA_6encTIM&usqp=CAU",
  id: 10,
  ingredients: [

    {
      name: "мука пш.",
      amount: 50
    },


    {
      name: "сахар",
      amount: 11
    },

    {
      name: "масло сл. 82%",
      amount: 20
    },

    {
      name: "яйца",
      amount: 8
    },

    {
      name: "сметана",
      amount: 10
    },


    {
      name: "соль",
      amount: 0.3
    },

    {
      name: "разрыхлитель",
      amount: 1
    },
    // FILLING SPACE
    {
      addIng: "Начинка творожная :"
    },
    // FILLING SPACE
    {
      name: "творог",
      amount: 50,
    },

    {
      name: "сахар",
      amount: 10,
    },

    {
      name: "ванилин",
      amount: 10,
    },

    {
      name: "яйцо",
      amount: 0.5,
    },

    {
      name: "сметана",
      amount: 3,
    },

    {
      name: "мука пш.",
      amount: 5,
    },

  ],


}

const charlotteWithApple = {
  itemName: 'Charlotte with apples',
  description: 'just a pie with apples',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMKDUOpqpXLcAZUXAXcwzI7tmXNSRsgMHRoSSglpb88oHsl9CelW-kfBb0grU0tiJM7g&usqp=CAU",
  id: 18,
  ingredients: [

    {
      name: "яйцо",
      amount: 200
    },

    {
      name: "сахар",
      amount: 300
    },

    {
      name: "мука",
      amount: 300
    },

    {
      name: "разрыхлитель",
      amount: 10
    },

    {
      name: "яблоко",
      amount: 380
    },

  ],

}

const banoffeePie = {
  itemName: 'banoffee pie',
  description: 'pie with banannas',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAUm-K_XjG7dk1mOrr3P-pVeJXxb2XQoC_71bN8viMMEULfxxkjMwpbIOpBF9bAwPx2o&usqp=CAU",
  id: 11,
  ingredients: [
    {
      addIng: "Основа: "
    },

    {
      name: "печенье крошка",
      amount: 220
    },


    {
      name: "фундук крошка",
      amount: 100
    },

    {
      name: "масло слив. 82%",
      amount: 150
    },

    {
      addIng: "Крем: "
    },

    {
      name: "маскарпоне",
      amount: 500
    },

    {
      name: "сливки 33%",
      amount: 100
    },

    {
      name: "сахарная пудра",
      amount: 60
    },


    {
      addIng: "Солёная карамель "
    },


    {
      name: "сахар",
      amount: 200
    },


    {
      name: "вода",
      amount: 50
    },


    {
      name: "сливки 33%",
      amount: 100
    },


    {
      name: "масло слив. 82%",
      amount: 65
    },

  ],

}

const lemonTart = {
  itemName: "Lemon pie",
  description: "pie with lemons",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JcRBR1IlMwl2UIAN9p9e0tQiIMQF_fEjGk130Kkz6nY7bRQ6roDdi-rVG-wWjn3IKCM&usqp=CAU",
  id: 12,

  ingredients: [
    {
      addIng: "Основа: "
    },

    {
      name: "мука",
      amount: 410
    },

    {
      name: "масло слив. 72%",
      amount: 250
    },

    {
      name: "сметана",
      amount: 180
    },

    {
      name: "разрыхлитель",
      amount: 10
    },

    {
      name: "сахар",
      amount: 230
    },

    {
      name: "загуститель",
      amount: 15
    },

    {
      addIng: "Лимонная начинка: "
    },


    {
      name: "лимон",
      amount: 350
    },

    {
      name: "сахар",
      amount: 350
    },


  ],


}


const cheeseCake = {
  itemName: "cheese cake",
  description: "just a cheesecake with mascarpone cream",
  image: "https://vsedoma-family.ru/sites/default/files/styles/product/public/product/f8bfddda8e19625d5d5a625987dd3ca7.jpg?itok=_P-pTXCy",
  id: 13,
  ingredients: [
    {
      addIng: "Основа: "
    },

    {
      name: "печенье крошка",
      amount: 300
    },

    {
      name: "фундук крошка",
      amount: 50
    },

    {
      name: "масло слив. 82%",
      amount: 220
    },

    {
      addIng: "Крем: "
    },

    {
      name: "маскарпоне",
      amount: 600
    },

    {
      name: "сливки 33%",
      amount: 300
    },

    {
      name: "яйцо",
      amount: 150
    },

    {
      name: "сахар",
      amount: 150
    },

    {
      name: "лимонный сок",
      amount: 10
    },
  ],

}

const browniePie = {
  itemName: "brownie pie",
  description: "chocolate cocoa pie",
  image: "https://img.iamcook.ru/2020/upl/recipes/cat/u-350b1fd89240624e1b382107ac6e64e2.JPG",
  id: 14,
  ingredients: [
    {
      name: "масло сл. 82%",
      amount: 60,
    },

    {
      name: "шоколад",
      amount: 200,
    },

    {
      name: "мука пш.",
      amount: 30,
    },

    {
      name: "разрыхлитель",
      amount: 5,
    },

    {
      name: "какао",
      amount: 30,
    },

    {
      name: "яйца",
      amount: 100,
    },

    {
      name: "тростниковый сахар",
      amount: 140,
    },

    {
      name: "оливковое масло",
      amount: 30,
    },

    {
      name: "сметана",
      amount: 60,
    },

    {
      name: "сгущенное молоко",
      amount: 200,
    },

  ],

}

const pumpkinPie = {
  itemName: "тыквенный",
  description: "тыквенный пирог тыквенный пирог тыквенный пирог тыквенный пирог тыквенный пирог",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7caaJtskPC8W2Exk_kMaf_c5iPcLggHnPfrsrehcqZdSB05_vhZj0vb-G13RafcX3eM&usqp=CAU",
  id: 15,
  ingredients: [
    {
      name: "тыква",
      amount: 300,
    },

    {
      name: "лимон",
      amount: 1,
    },

    {
      name: "яйца",
      amount: 3,
    },

    {
      name: "мука",
      amount: 230,
    },

    {
      name: "сахар",
      amount: 150,
    },

  ],

}


const pavlova = {
  itemName: "Pavlova",
  description: "pavlova_pavlova pavlova_pavlova pavlova_pavlova pavlova_pavlova pavlova_pavlova pavlova_pavlova ",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b2bG1zYW-c5P7MItOtVXbaOeupOt9oEEGoowjObP0G49nSizy18bdMJzCSJ-7ssrM5g&usqp=CAU",
  id: 16,
  ingredients: [
    {
      name: "яичный белок",
      amount: 150
    },

    {
      name: "сахар",
      amount: 300
    },

    {
      name: "загуститель",
      amount: 20
    },
  ],
}

const cardamomBuns = {
  itemName: "Cardamom buns",
  description: "cardamom buns cardamom buns cardamom buns cardamom buns cardamom buns cardamon buns cardamon buns cardamon buns cardamon buns cardamon buns cardamon buns ",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw7jFZ6HLPWKd2RgnGhp680akj60VwPNt0pVrIu9G2fffCEhaqUiv2MXb2dINM-1K1TY&usqp=CAU",
  id: 17,
  ingredients: [

    {
      addIng: "Тесто: "
    },

    {
      name: "мука пш.",
      amount: 52
    },

    {
      name: "дрожжи сух.",
      amount: 1
    },

    {
      name: "молоко",
      amount: 23
    },

    {
      name: "сахар",
      amount: 7
    },

    {
      name: "соль",
      amount: 0.3
    },

    {
      name: "яйцо",
      amount: 5
    },

    {
      name: "маргарин",
      amount: 6
    },

    {
      name: "кардамон",
      amount: 0.2
    },


    {
      addIng: "Начинка :"
    },



    {
      name: "масло слив. 82%",
      amount: 14
    },

    {
      name: "сахар",
      amount: 12
    },

    {
      name: "тростниковый сахар",
      amount: 8
    },

    {
      name: "корица",
      amount: 3
    },

    {
      name: "ванилин",
      amount: 1
    },

    {
      name: "соль",
      amount: 0.3
    },

    {
      name: "кардамон",
      amount: 0.4
    },
  ],

}

const LvovskiyCheeseCake = {
  itemName: "Львовский сырник",
  description: "Lvov sirnik Lvov sirnik Lvov sirnik Lvov sirnik Lvov sirnik Lvov sirnik ",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAnId2Q3oqffoD4AtlW8mqcnjZzRxIPoTHujaFdgunzCmfcaSQcKkGZkuFjkyP6OANaw&usqp=CAU",
  id: 19,
  ingredients: [

    {
      name: "творог фермерский",
      amount: 1200
    },

    {
      name: "яйцо",
      amount: 300
    },

    {
      name: "сахар",
      amount: 300
    },

    {
      name: "масло слив. 82%",
      amount: 200
    },

    {
      name: "цедра лимона",
      amount: 30
    },

    {
      name: "манка",
      amount: 40
    },

    {
      addIng: "Шоколадная глазурь:"
    },


    {
      name: "масло слив. 82%",
      amount: 80
    },


    {
      name: "какао порошок",
      amount: 60
    },


    {
      name: "смеатана 15%",
      amount: 160
    },


    {
      name: "сахар",
      amount: 80
    },
  ],
}

// import myJson from "./test.json"
// console.log(myJson);

// fetch("../objects1.json")
//   .then(response => response.json())
//   .then(data => console.log(data))





const generateCardArrayAnother = (data) => {

  const wrapper = document.querySelector('.cards-container');
  wrapper.style.display = 'block';


  const cardList = document.createElement('ul');
  cardList.classList.add('card_list_wrapper')
  cardList.classList.add('active')


  function renderCard(card) {
    const liElem = document.createElement('li');
    liElem.className = 'card_list_item';

    liElem.innerHTML = `
    <a class="btn_for_card open-card" href="#" data-idd="${card.id < 10 ? '0' + card.id : card.id}">
      <span class="the_card_list" id="${card.id < 10 ? '0' + card.id : card.id}">${card.itemName}</span> 
      <img class="the_card_list_image" src="${card.image}" height="60" width="100"></img>   
      </a>
    `;

    wrapper.insertAdjacentElement('beforeend', cardList);
    cardList.append(liElem)

  };

  data.map(renderCard)

};


const generateCardsArray = (data) => {

  const wrapper = document.querySelector('.cards-container');
  wrapper.style.display = 'block';


  const cardsContainer = document.createElement('container');
  cardsContainer.classList.add('card_stone_wrapper');



  function renderRecipeCard(recipeCard) {

    const cardElem = document.createElement('div');
    cardElem.className = 'card card-compact w-96 shadow-xl';

    cardElem.innerHTML = `
    
            
          <div class="card-body">
            <div class="card-image">
              <img
                src="${recipeCard.image}"
                width="300" height="200" alt="" class="card-product-img">
            </div>

            <div class="description-container">

              <h2 class="card-title">${recipeCard.itemName}</h2>
              <p class="card-product-description">
                ${recipeCard.description}
              </p>
              <div class="card-actions justify-end">
                <button class="open-card btn btn-primary" data-idd="${recipeCard.id < 10 ? '0' + recipeCard.id : recipeCard.id}">
                  Открыть карточку
                </button>
              </div>
            </div>

          </div>
       

    `;

    wrapper.insertAdjacentElement('beforeend', cardsContainer)
    cardsContainer.insertAdjacentElement('beforeend', cardElem)

  }
  data.map(renderRecipeCard);

};

//GENERATED TWO ARRAYS WITH UNVISIBLE PROPERTIES
generateCardsArray(CardListArray)
generateCardArrayAnother(CardListArray);



const swtichPositionFunction = () => {

  const wrapperCards = document.querySelector('.cards-container');
  const listWrap = wrapperCards.querySelector('.card_list_wrapper');
  const cardWrap = wrapperCards.querySelector('.card_stone_wrapper');

  if (listWrap.classList.contains('active')) {
    console.log('true');
    listWrap.classList.remove('active');
    cardWrap.classList.add('active_block')
  } else {
    console.log('else');
    cardWrap.classList.remove('active_block');
    listWrap.classList.add('active');
  }


};

const switchMenuButton = document.querySelector('.swtich_position_btn');
switchMenuButton.addEventListener('click', () => {
  swtichPositionFunction()

})


const cardContainer = document.querySelector('.cards-container');
const watchBtn = document.querySelector('.watch_button');
const welcomePage = document.querySelector('.welcome-page');

cardContainer.style.display = 'none';

watchBtn.addEventListener('click', () => {
  cardContainer.style.display = 'block';
  welcomePage.style.display = 'none';

});


const arrayOfCards = document.querySelectorAll('.card');
console.log(arrayOfCards);
arrayOfCards.forEach(item => {
  item.classList.add('bg-slate-300');
  item.style.display = 'block';



  return item;
})


const func = function (data) {

  const elem1 = document.querySelector('.ing-elem_parent');


  data.map(item => {

    if (item.addIng) {

      const addIngElem = document.createElement('h2')
      addIngElem.style.color = 'red';
      addIngElem.textContent = item.addIng;

      elem1.insertAdjacentElement('beforeend', addIngElem)

      return
    }

    const nameIng = document.createElement('li');
    const amountIng = document.createElement('span');
    const weigth = document.createElement('span');

    nameIng.classList.add('ingredient-elem');
    amountIng.classList.add('count');

    nameIng.textContent = ' — ' + item.name + '  ';
    amountIng.textContent = ' ' + item.amount
    weigth.textContent = ' гр.'

    nameIng.append(amountIng);
    nameIng.append(weigth);


    elem1.insertAdjacentElement('beforeend', nameIng);


  });




  const ingLi = document.querySelectorAll('.count');
  setTimeout(() => {
    console.log(ingLi)
  }, 1000);

  const changeCountBtn = document.querySelector('.change-count');
  const inputValue = document.querySelector('.change-count-input');

  changeCountBtn.addEventListener('click', () => {

    if (inputValue.value <= 0) {
      alert('Поле ввода не может быть пустым, а так же иметь отрицательное значение. Пожалуйста, убедитесь в правильности введенных данных.')

    } else {

      ingLi.forEach(item => {

        console.log(item.textContent);
        item.textContent *= inputValue.value;
        item.textContent = item.textContent % 1 > 0 ? Number(item.textContent).toFixed(1) : item.textContent

        changeCountBtn.style.display = 'none';
        inputValue.style.display = 'none';


        const productCounter = document.querySelector('.product-count');

        if (inputValue.value > 20) {
          productCounter.textContent = inputValue.value + ' шт. ВНИМАНИЕ! Большой объем, лейте воду постепенно'
        } else if (inputValue.value < 5) {
          productCounter.textContent = inputValue.value + ` шт.`

        } else if (inputValue.value > 30) {
          productCounter.textContent = inputValue.value + ` шт.`
        } else {
          productCounter.textContent = inputValue.value + ` шт.`
        }

      });

    };

  })

};

const funcAdditional = function (data) {

  const elem1 = document.querySelector('.ing-elem_parent');

  const elem2 = document.createElement('span');
  elem2.textContent = data.map(item => {
    item.additionalName.filter(Boolean)

  })

  elem1.append(elem2);


  data.map(item => {

    const nameIng = document.createElement('li');
    const amountIng = document.createElement('span');
    const weigth = document.createElement('span');


    nameIng.classList.add('ingredient-elem');
    amountIng.classList.add('count');

    nameIng.textContent = item.name + '  ';
    amountIng.textContent = '' + item.amount
    weigth.textContent = ' гр.'

    nameIng.append(amountIng);
    nameIng.append(weigth);

    elem1.insertAdjacentElement('beforeend', nameIng);

  });
};


function renderRecipeIngredients(recipe) {
  const container = document.querySelector(".ingredients.ingredients-wrapper")
  const div = document.createElement("div")
  const h3 = document.createElement("h3")
  h3.textContent = recipe.itemName
  div.appendChild(h3)
  container.appendChild(div)

}

const generateItemProduct = (item) => {

  // data.forEach(item => {

  const itemElem = document.createElement('ul');
  itemElem.className = 'ingredients ingredients-wrapper bg-slate-200';


  itemElem.innerHTML = `
   
          <h3 class="item-product__description">${item.description}</h3>

         <img src=${item.image} alt="Хлеб белый" class="swiper-slide product-image" width="300" height="200">
      <div class="count-elements">

      ${item.id === 5 ? `<div class="product-count font-semibold">
         Ниже представлена рецептура из расчета на 1 кг готового теста
        </div>` : `<div class="product-count font-semibold">
         Ниже представлена рецептура из расчета на еденицу продукта
        </div>`}


        <input type="text" required name="количество булок для расчета" class="change-count-input">

        <button class="change-count text-sm mb-5" data-idd="${item.id}">изменить кол-во для расчета</button>
      </div>
        <h2 class="product-elem-name font-medium mb-5">
          Рецептура продукта: ${item.itemName}
        </h2>
<ul class="ing-elem_parent mx-5 bg-slate-200">
   
          
          ${item.curdFilling ? `<h3>Для начинки:</h3>` : ''}
          
          ${item.curdFilling ? ` <li class="ingredient-elem">творог
          <span class="count cottageCheese-count">${item.curdFilling.cottageCheese}</span> <span>гр.</span>
          </li>` : ''}

          ${item.curdFilling ? ` <li class="ingredient-elem">сахар
          <span class="count sugar-count">${item.curdFilling.sugar}</span> <span>гр.</span>
          </li>` : ''}

          ${item.curdFilling ? ` <li class="ingredient-elem">ванилин
          <span class="count vanilin-count">${item.curdFilling.vanillin}</span> <span>гр.</span>
          </li>` : ''}

          ${item.curdFilling ? ` <li class="ingredient-elem">яйца
          <span class="count eggs-count">${item.curdFilling.eggs}</span> <span>гр.</span>
          </li>` : ''}

          ${item.curdFilling ? ` <li class="ingredient-elem">сметана
          <span class="count sourCream-count">${item.curdFilling.sourCream}</span> <span>гр.</span>
          </li>` : ''}

          ${item.curdFilling ? ` <li class="ingredient-elem">мука пш. франц.
          <span class="count flourFrench-count">${item.curdFilling.flourFrench}</span> <span>гр.</span>
          </li>` : ''}


         

          ${item.baseLemon || item.baseCheeseCake ? `<h3 class="font-semibold">Основа:</h3>` : ''}


          ${item.baseCheeseCake ? ` <li class="ingredient-elem">фундук крошка
          <span class="count hazelnutCrumbs-count">${item.baseCheeseCake.hazelnutCrumbs}</span> <span>гр.</span>
          </li>` : ''}

          ${item.baseCheeseCake ? ` <li class="ingredient-elem">печенье крошка
          <span class="count cookieСrumbs-count">${item.baseCheeseCake.cookieCrumbs}</span> <span>гр.</span>
          </li>` : ''}





         ${item.baseLemon ? `<li class="ingredient-elem">мука пшеничная В/С
          <span class="count flour-count">${item.baseLemon.flour}</span> <span>гр.</span>
          </li>` : ''} 

          ${item.baseLemon ? ` <li class="ingredient-elem">сметана
          <span class="count sourCream-count">${item.baseLemon.sourCream}</span> <span>гр.</span>
          </li>` : ''}

          ${item.baseLemon ? ` <li class="ingredient-elem">разрыхлитель
          <span class="count bakingPowder-count">${item.baseLemon.bakingPowder}</span> <span>гр.</span>
          </li>` : ''}

          ${item.baseLemon ? ` <li class="ingredient-elem">масло сл. 72%
          <span class="count butter72Percent-count">${item.baseLemon.butter72Percent}</span> <span>гр.</span>
          </li>` : ''}

          ${item.baseLemon ? `<li class="ingredient-elem">сахар
          <span class="count sugar-count">${item.baseLemon.sugar}</span> <span>гр.</span>
          </li>` : ''}

          ${item.baseLemon ? `<li class="ingredient-elem">загуститель
          <span class="count thickener-count">${item.baseLemon.thickener}</span> <span>гр.</span>
          </li>` : ''}
        


          ${item.creamLemon || item.creamCheeseCake ? `<h3 class="font-semibold mt-5">Крем:</h3>` : ''}


          ${item.creamCheeseCake ? ` <li class="ingredient-elem">маскарпоне
          <span class="count mascarpone-count">${item.creamCheeseCake.mascarpone}</span> <span>гр.</span>
          </li>` : ''}

           ${item.creamCheeseCake ? ` <li class="ingredient-elem">сливки 33%
          <span class="count creamMilk33perc-count">${item.creamCheeseCake.creamMilk33perc}</span> <span>гр.</span>
          </li>` : ''}

          ${item.creamCheeseCake ? ` <li class="ingredient-elem">яйца
          <span class="count eggs-count">${item.creamCheeseCake.eggs}</span> <span>гр.</span>
          </li>` : ''}

          ${item.creamCheeseCake ? ` <li class="ingredient-elem">сахар
          <span class="count sugar-count">${item.creamCheeseCake.sugar}</span> <span>гр.</span>
          </li>` : ''}
       
          ${item.creamCheeseCake ? ` <li class="ingredient-elem">лимонный сок
          <span class="count lemonJuice-count">${item.creamCheeseCake.lemonJuice}</span> <span>гр.</span>
          </li>` : ''}


          ${item.creamLemon ? ` <li class="ingredient-elem">лимоны
          <span class="count lemonPcs-count">${item.creamLemon.lemon}</span> <span>шт.</span>
          </li>` : ''}

          ${item.creamLemon ? ` <li class="ingredient-elem">сахар
          <span class="count sugarInCream-count">${item.creamLemon.sugar}</span> <span>гр.</span>
          </li>` : ''}




          ${item.baseBanoffee ? `<h3 class="font-semibold">Основа:</h3>` : ''}


          ${item.baseBanoffee ? ` <li class="ingredient-elem">печенье крошка
          <span class="count cookieСrumbs-count">${item.baseBanoffee.cookieСrumbs}</span> <span>гр.</span>
          </li>` : ''}

           ${item.baseBanoffee ? ` <li class="ingredient-elem">фундук крошка
          <span class="count hazelnutCrumbs-count">${item.baseBanoffee.hazelnutCrumbs}</span> <span>гр.</span>
          </li>` : ''}

          ${item.baseBanoffee ? ` <li class="ingredient-elem">масло сл. 82%
          <span class="count butter84Percent-count">${item.baseBanoffee.butter84Percent}</span> <span>гр.</span>
          </li>` : ''}



          ${item.creamBanoffee ? `<h3 class="font-semibold mt-5">Крем:</h3>` : ''}




          ${item.creamBanoffee ? ` <li class="ingredient-elem">маскарпоне
          <span class="count mascarpone-count">${item.creamBanoffee.mascarpone}</span> <span>гр.</span>
          </li>` : ''}

          ${item.creamBanoffee ? ` <li class="ingredient-elem">сливки 33%
          <span class="count creamMilk33perc-count">${item.creamBanoffee.creamMilk33perc}</span> <span>гр.</span>
          </li>` : ''}

          

          

          
          ${item.saltCaramel ? `<h3 class="font-semibold mt-5">Солёная карамель:</h3>` : ''}
          

          ${item.saltCaramel ? ` <li class="ingredient-elem">сахар
          <span class="count saltCaramelService-count">${item.saltCaramel.sugar}</span> <span>гр.</span>
          </li>` : ''}

          ${item.saltCaramel ? ` <li class="ingredient-elem">вода
          <span class="count saltCaramelWater-count">${item.saltCaramel.water}</span> <span>гр.</span>
          </li>` : ''}

          ${item.saltCaramel ? ` <li class="ingredient-elem">масло сл. 72%
          <span class="count butter72Percent_Caramel-count">${item.saltCaramel.butter72Percent}</span> <span>гр.</span>
          </li>` : ''}

          ${item.saltCaramel ? ` <li class="ingredient-elem">сливки 33%
          <span class="count creamMilk33perc-count">${item.saltCaramel.creamMilk33perc}</span> <span>гр.</span>
          </li>` : ''}
          

</ul>
          <button class="btn btn-active btn-neutral refresh-card" data-idd="${item.id}">Посчитать еще раз</button>
         
  
`;

  // LA FUNKCIONALAS 







  const generateModal = () => {
    const modalButton = document.createElement('button');
    modalButton.classList.add('open_modal_btn');
    modalButton.textContent = 'Описание процесса'

    itemElem.insertAdjacentElement('beforeend', modalButton);

    const modalWrapper = document.querySelector('.modal');
    const contentWrapper = document.querySelector('.content-product');

    const closeModal = function (event) {
      const target = event.target;

      if (target.className === 'close_modal_elem' || target.className === 'okeyModalBtn') {
        modalWrapper.classList.remove('active_modal');
        contentWrapper.style.opacity = '';


      };

      if (target.className === 'readmoreModalBtn') {
        alert('Извините, данный раздел в разработке...');
        console.log('ALERT ALERT');
      }

    }

    modalButton.addEventListener('click', () => {
      modalWrapper.classList.add('active_modal');
      contentWrapper.style.opacity = '10%';


      contentWrapper.addEventListener('click', e => {
        if (e.target.className !== 'open_modal_btn' && e.target.className !== 'fudge-btn') {
          modalWrapper.classList.remove('active_modal');
          contentWrapper.style.opacity = '';

        }
      });

    });

    modalWrapper.addEventListener('click', closeModal);
  }

  const additionalButtons = (data) => {
    const fudgeButton = document.createElement('button');
    const rumSyrop = document.createElement('button');
    rumSyrop.textContent = 'Сироп'
    fudgeButton.textContent = 'Помадка';
    fudgeButton.classList.add('fudge-btn');
    rumSyrop.classList.add('syrop-btn');

    itemElem.append(fudgeButton);
    itemElem.append(rumSyrop);

    const modalWrapper = document.querySelector('.modal');
    const contentWrapper = document.querySelector('.content-product');

    fudgeButton.addEventListener('click', (e) => {
      const modalFudge = document.createElement('div');
      const mainContainer = document.querySelector('.container');
      mainContainer.insertAdjacentElement('afterbegin', modalFudge);
      modalFudge.className = 'modal-fudge';
      modalFudge.classList.add('active_modal');

      data.forEach((item) => {
        modalFudge.innerHTML = `
        <h1>RECIPE ON FUDGE:</h1>
        <h2>COUNT:</h2>
        <h3 class="fudge_item_count">1</h3>
        <p class="fudge_water">WATER - ${item.sugarFudge.water}</p>
        <p class="fudge_sugar">SUGAR - ${item.sugarFudge.sugar}</p>
        <input class="recalc_fudge_input" type="text" />
        <button class="recalc_fudge_btn">recalculate</button>
        <button class="yes_i_know_fudge">THANKS I KNOW</button>
        `;

        const recalcBtn = document.querySelector('.recalc_fudge_btn');
        const recalcInput = document.querySelector('.recalc_fudge_input');

        recalcBtn.addEventListener('click', e => {
          e.preventDefault();


          const inputValue = recalcInput.value;

          document.querySelector('.fudge_item_count').textContent = inputValue;




          document.querySelector('.fudge_water').textContent = `WATER : ${item.sugarFudge.water * inputValue}`;

          document.querySelector('.fudge_sugar').textContent = `SUGAR : ${item.sugarFudge.sugar * inputValue}`

          recalcInput.value = '';
        })



        contentWrapper.style.opacity = '10%';



        contentWrapper.addEventListener('click', (e) => {
          if (e.target.className !== 'fudge-btn' && e.target.className !== 'open_modal_btn') {
            modalFudge.classList.remove('active_modal');
            contentWrapper.style.opacity = '';

          } else {
            contentWrapper.style.opacity = '10%';
          }



          const yesButton = document.querySelector('.yes_i_know_fudge');
          yesButton.addEventListener('click', e => {
            console.log('yes yes yes_FUDGE');
            modalFudge.classList.remove('active_modal');
            contentWrapper.style.opacity = '';
          })

        });

      });
    });


    rumSyrop.addEventListener('click', (e) => {
      const modalSyrup = document.createElement('div');
      const okButton = document.createElement('button');
      const mainContainer = document.querySelector('.container');
      mainContainer.insertAdjacentElement('afterbegin', modalSyrup);
      modalSyrup.className = 'modal-fudge';
      modalSyrup.classList.add('active_modal');

      data.forEach((item) => {


        modalSyrup.innerHTML = `
          <h1>SYRUP RECIPE:</h1>
          <p class="syrup_water">WATER - ${item.syrupFudge.water}</p>
          <p class="syrup_sugar">SUGAR - ${item.syrupFudge.sugar}</p>
          <p class="syrup_rum">RUM - ${item.syrupFudge.rum}</p>
          <input class="recalc_syrup_input" type="text" />
          <button class="recalc_syrup_btn">recalculate</button>
          <button class="yes_i_know">YES I KNOW</button>
        `;

        const recalcBtn = document.querySelector('.recalc_syrup_btn');
        const recalcInput = document.querySelector('.recalc_syrup_input');

        recalcBtn.addEventListener('click', e => {
          e.preventDefault();


          const inputValue = recalcInput.value;


          document.querySelector('.syrup_water').textContent = `WATER : ${item.syrupFudge.water * inputValue}`;

          document.querySelector('.syrup_sugar').textContent = `SUGAR : ${item.syrupFudge.sugar * inputValue}`

          document.querySelector('.syrup_rum').textContent = `RUM : ${item.syrupFudge.rum * inputValue}`

          recalcInput.value = '';
        })



        contentWrapper.style.opacity = '10%';

        contentWrapper.addEventListener('click', (e) => {
          if (e.target.className !== 'syrop-btn' && e.target.className !== 'open_modal_btn') {
            modalSyrup.classList.remove('active_modal');
            contentWrapper.style.opacity = '';
          }
          else {
            contentWrapper.style.opacity = '10%';
          }

          const yesButton = document.querySelector('.yes_i_know');
          yesButton.addEventListener('click', e => {
            console.log('yes yes yes');
            modalSyrup.classList.remove('active_modal');
            contentWrapper.style.opacity = '';
          })
        });

      });

    });
  }

  const modalWrapper = document.querySelector('.modal_description');

  const changeDescription = (text, text2) => {

    const item = document.querySelector('.product-count');
    item.textContent = text;
    const p = document.createElement('p');
    p.style.color = 'darkgrey';
    p.textContent = text2;
    item.append(p);

  }



  if (item.id === 5) {
    generateModal()

    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на 2кг готового теста", "Маргарин для закатки слоев на 2кг теста - 600 грамм")
    }, 20)

    modalWrapper.innerHTML = `
     <p>   Технология приготовления:
  <br>
     На первой скорости перемешивают до момента, когда тесто берет всю муку.
    <br>
Достают готовое тесто из тестомеса, делят на куски по 2.7кг и убирают в шоковую камеру на 2.5 часа.
    <br>
Готовят масло-заготовку: из сливочного масла формируют пласт с помощью тестораскатки размером 25см на 30см
Пласт масла должен быть весом — 800 гр.
    <br>
Слоение теста: достают охлажденное тесто из шокера (шок. камеры) и раскатывают на тестораскатке толщиной до 7мм
   <br>
1. Закладывают в пласт теста весом 2.7кг масло-заготовку 800 гр. ровно в центр и закрывают оставшимся тестом масло в форме прямоугольника. Края теста соединяют без нахлеста.
Раскатывают тесто на раскатке до толщины 5.5мм 
Края теста отрезают до видимой полосы сливочного масла от края до края 
Складывают тесто методом сложного сложения в два этапа.
<br>
Этап 1: <br>
Левый край теста складывают вправо на 10см, правый край теста складывают к левому краю без нахлеста, соединение теста должно быть ровным. <br>
Полученную заготовку складывают пополам соединением внутрь. ВАЖНО: тестовая заготовка должна иметь правильную прямоугольную форму! <br>
Тесто охлаждают в шоковой заморозке в течение 30 минут. Тесто не должно замерзнуть полностью!<br>
Тесто должно оставаться холодным и эластичным.<br>
Края теста отрезают до видимой полосы сливочного масла от края до края.<br>
Этап 2 — Сложное сложение:
<br>
Левый край теста складывают в право на 10см, правый край теста складывают к левому без нахлеста. Соединение теста должно быть ровным. Полученную заготовку складывают пополам, соединением внутрь. 
<br>
ВАЖНО: тестовая заготовка должна иметь правильную прямоугольную форму.<br>
Тесто охлаждаем в шоковой заморозке в течение 30 минут. Тесто не должно замерзнуть полностью.<br>
Тесто должно оставаться холодным и эластичным.
<br>
Этап 3 — Охлажденное тесто достают из шокера и раскатывают на раскатке до 3.5 мм 
<br>
Далее нарезаем прямоугольники весом 100 грамм. 10 см ширина у основания, 27 см высота.
<br>

Формовка: 
Тестовую заготовку слегка вытягивают руками в длину , загибают основания треугольника и закручивают симметрично к вершине.
Тестовые заготовки с круассанами укладывают на лист и убирают в шоковую заморозку до полной заморозки изделия -18 градусов цельсия.
    </p>  `;
  };

  if (item.id === 3) {
    generateModal();


    modalWrapper.innerHTML = `
      <p>
      <h3>Дарница</h3>
     <br>
     1) Замес:
     
     <br>
     Согласно рецептуре закладываем ингредиенты, заливаем холодной водой.
     <br>
     В тестомесильной машине вымешиваем содержимое около 5 минут на первой скорости. После, открываем и собираем все непромесы в радиусе дежы тестомеса.
     <br>
     Закрываем и включаем на 10 минут на второй скорости.
     <br>
     Далее органолептическими методами доводим до готовности и выкладываем в тару, подготавливаем место для формовки.
     <br>
     <br>
     2) Формовка:
     <br>
     Выставляем две формы на весы и сбрасываем тару. Двумя шпателямя, через воду, выкладываем тестовые заготовки в форму. Каждая по 600 грамм веса. Далее разравниваем верхний слой теста до аккуратного ровного состояния. 
     Отправляем тесто в расстоечный шкаф с температурой не превыщающей 30 градусов цельсия. Процесс расстойки занимает от 60 до 80 минут. 
     <br>
     ВАЖНО! своевременно посадить заготовки в печь, в противном случае рискуем получить деформацию верхней корки.
     <br>
     <br>
     3) Выпекание:
     <br>
    Печь разогреть до 250 градусов цельсия, после посадки выдать отпаривание 3 раза с задержкой 2-3 секунды, не более.
    <br>
    Таймер выставляем на 40 минут.
    <br>
    Далее опускаем температуру печи до 200 градусов цельсия и оставляем неизменно на 7-8 минут. 
    После этого, понижаем температурный режим до 160 градусов и продолжаемcloseModal();
    Готовность обязательно проверяем технологическим термометром. Температура готового хлеба составляет 96 градусов и выше.
    <br>
    <br>
    4) Заключительный процесс:
    <br>
    После завершения отпекания, вытягиваем формы и оставляем остывать на шпильке около 10 минут. Далее выбиваем хлеб из формы и выставляем остывать на решетки.
    <br>
    <br>
    На этом всё.
      </p>
      `;
  };

  if (item.id === 2) {

    generateModal();

    modalWrapper.innerHTML = `
    <p>
       <h3>Бородино</h3>
     <br>
     1) Замес:
     
     <br>
     Согласно рецептуре закладываем ингредиенты, заливаем холодной водой.
     <br>
     В тестомесильной машине вымешиваем содержимое около 5 минут на первой скорости. После, открываем и собираем все непромесы в радиусе дежы тестомеса.
     <br>
     Закрываем и включаем на 10 минут на второй скорости.
     <br>
     Далее органолептическими методами доводим до готовности и выкладываем в тару, подготавливаем место для формовки.
     <br>
     <br>
     2) Формовка:
     <br>
     Выставляем две формы на весы и сбрасываем тару. Двумя шпателямя, через воду, выкладываем тестовые заготовки в форму. Каждая по 500 грамм веса. Далее разравниваем верхний слой теста до аккуратного ровного состояния. 
     Отправляем тесто в расстоечный шкаф с температурой не превыщающей 30 градусов цельсия. Процесс расстойки занимает от 60 до 80 минут. 
     <br>
     ВАЖНО! своевременно посадить заготовки в печь, в противном случае рискуем получить деформацию верхней корки.
     <br>
     <br>
     3) Выпекание:
     <br>
    Печь разогреть до 250 градусов цельсия, после посадки выдать отпаривание 3 раза с задержкой 2-3 секунды, не более.
    <br>
    Таймер выставляем на 40 минут.
    <br>
    Далее опускаем температуру печи до 200 градусов цельсия и оставляем неизменно на 7-8 минут. 
    После этого, понижаем температурный режим до 160 градусов и продолжаем отпекать до готовности.
    <br>
    Готовность обязательно проверяем технологическим термометром. Температура готового хлеба составляет 96 градусов и выше.
    <br>
    <br>
    4) Заключительный процесс:
    <br>
    После завершения отпекания, вытягиваем формы и оставляем остывать на шпильке около 10 минут. Далее выбиваем хлеб из формы и выставляем остывать на решетки.
    <br>
    <br>
    На этом всё.
    </p>
    `;

  };

  if (item.id === 7) {
    generateModal();

    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на один кекс среднего размера")
    }, 20);

    modalWrapper.innerHTML = `

      <h3>Кекс банановый:</h3>
      <br>
      <br>
      <p>Сахар и яйца взбиваем в первую очередь, далее добавляем растопленный маргарин и продолжаем отбивку. После этого нарезаем бананы по рецептуре на небольшие кусочки и отправляем в нашу дежу, также туда разрыхлитель и муку. После тщательной отбивки, берем  грецкий орех и вручную измельчаем, после чего добавляем в замес. Выливаем содержимое дежи в форму для отпекания. Берем один очищенный банан и разрезаем по вертикальной оси Y на две одинаковые половины, укладываем сверху в нашу форму. Сверху присыпаем кекс равномерным слоем тростникового сахара и помещаем в разгогретую до 180 градусов печь. Отпекаем до готовности.</p>

      `;


  }


  if (item.id === 6) {
    generateModal();
    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на заготовку продукта весом 700 грамм")
    }, 20);

    modalWrapper.innerHTML = `


      <h3>Тартин:</h3>
      <br>
      <br>
      <p>Смесь муки и дрожжей перемешиваем в первую очередь доводя до однородной сухой массы. Далее добавляем холодной воды. Внимание, очень важно чтобы тесто сохраняло температуру не превышающую 22 градусов, если в помещение слишком жарко - замените лёд водой в процентном соотношении от 10 до 30 % в зависимости от температуры цеха. 1 к 1. На первой скорости вымешиваем воду с мукой до однородной массы. Далее добавляем закваску согласно рецептуре и вымешиваем до готовности на второй скорости тестомесильной машины тесто должно быть прохладным и эластичным.</p>
      <br>
      <br>
      <p> помещаем тесто в контейнир и в течение следующих трех часов производим обминку теста 6 раз. Следовательно 1 раз в 30 минут. После этого формуем тесто по 700гр. и отправляем в расстоечный шкаф на 60-90 минут. Отпекаем на температуре 220 градусов в течение 15-16 минут.</p>

      `
  }

  if (item.id === 8) {
    generateModal();
    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на заготовку продукта весом 500 грамм")
    }, 20);

    modalWrapper.innerHTML = `
      <h3>Чиабатта Итальянская:</h3>
      <br>
      <br>
      <p>Отбиваем все ингредиенты до однородной тягучей массы и оставляем в деже при комнатной температуре на 2 часа. После этого формуем и отправляем в расстойку еще на 1 час. Отпекаем 15 минут на 230 градусов с паром, после выпускаем пар и ставим на отсушку еще на 10 минут при температуре 180 градусов.</p>
      `;
  }

  if (item.id === 9) {
    generateModal();
    additionalButtons(rumBaba);

    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на заготовку продукта весом 70 грамм")
    }, 20);

    modalWrapper.innerHTML = `
      <h3>Ромовая баба:</h3>
      <br>
      <br>
      <p>Отбиваем все ингредиенты до однородной тягучей массы и оставляем в деже при комнатной температуре на 2 часа. После этого формуем и отправляем в расстойку еще на 1 час. Отпекаем 15 минут на 230 градусов с паром, после выпускаем пар и ставим на отсушку еще на 10 минут при температуре 180 градусов.</p>
      `;
  }

  if (item.id === 10) {
    generateModal();

    // NOT VALID NOW
    // setTimeout(() => {
    //   additionalListRender(sochnik);
    // }, 10)


  }

  if (item.id === 14) {
    generateModal();
    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на 1 пирог среднего размера", "Хорошо смажьте форму перед отпеканием")
    }, 20);
  }

  if (item.id === 11) {
    generateModal();
    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на 1 торт среднего размера")
    }, 20);

  }

  if (item.id === 12) {
    generateModal();
    setTimeout(() => {
      changeDescription("Ниже приведена рецептура на 1 пирог среднего размера", "Хорошо смажьте форму перед отпеканием")
    }, 20);
  }

  if (item.id === 15) {
    generateModal();
  }

  if (item.id === 17) {
    generateModal();
    setTimeout(() => {
      changeDescription("Ниже приведена рецептура из расчета на еденицу продукта весом 80 гр.", "Дополнительную информацию найдете в разделе ниже")
    }, 20);
  }

  document.querySelector('.ingredients-wrapper').textContent = '';


  document.querySelector('.ingredients-wrapper').insertAdjacentElement('beforebegin', itemElem);

  const changeCountInput = document.querySelector('.change-count-input'),
    changeCountButton = document.querySelector('.change-count'),
    ingredientsElements = document.querySelectorAll('.count');
  //   ingLi = document.querySelectorAll('.ingredient-elem');
  // setTimeout(() => {
  //   console.log(ingLi)
  // }, 3000);
  const refreshCardButton = document.querySelector('.refresh-card');
  refreshCardButton.disabled = true;
  refreshCardButton.classList.add('hide');

  refreshCardButton.addEventListener('click', (event) => {

    event.preventDefault();

    document.querySelector('.ingredients-wrapper').remove();
    const target = event.target.dataset.idd;
    console.log(target)


    if (target === '1') {
      generateItemProduct(whiteBread)
    } else if (target === '2') {
      generateItemProduct(borodinoBread)
      func(borodinoBread.ingredients)
    } else if (target === '3') {
      generateItemProduct(darnitsaBread)
      func(darnitsaBread.ingredients)
    }
    else if (target === '4') {
      generateItemProduct(croissant)

    }
    else if (target === '5') {
      generateItemProduct(croissantButter);
      func(croissantButter.ingredients)

    } else if (target === '6') {
      generateItemProduct(tartin);
      func(tartin.ingredients)

    } else if (target === '7') {
      generateItemProduct(bananaCake);
      func(bananaCake.ingredients)

    } else if (target === '8') {
      generateItemProduct(ciabatta);
      func(ciabatta.ingredients)

    } else if (target === '9') {
      generateItemProduct(rumBaba);
      func(rumBaba.ingredients)

    } else if (target === '10') {
      generateItemProduct(sochnik);
      func(sochnik.ingredients)
      // func(sochnik.cottageCheeseFilling)
      // funcAdditional(sochnik.addIngredients)
    }
    else if (target === '14') {
      generateItemProduct(browniePie);
      func(browniePie.ingredients)
    } else if (target === '11') {
      generateItemProduct(banoffeePie);
      func(banoffeePie.ingredients);
    } else if (target === '12') {
      generateItemProduct(lemonTart)
      func(lemonTart.ingredients)
    } else if (target === '13') {
      generateItemProduct(cheeseCake)
      func(cheeseCake.ingredients)
    } else if (target === '15') {
      generateItemProduct(pumpkinPie)
      func(pumpkinPie.ingredients)
    } else if (target === '16') {
      generateItemProduct(pavlova)
      func(pavlova.ingredients)
    } else if (target === '17') {
      generateItemProduct(cardamomBuns)
      func(cardamomBuns.ingredients)

    } else if (target === '18') {
      generateItemProduct(charlotteWithApple)
      func(charlotteWithApple.ingredients)
    } else if (target === '19') {
      generateItemProduct(LvovskiyCheeseCake)
      func(LvovskiyCheeseCake.ingredients)
    }
  });

  changeCountInput.addEventListener('input', () => {

    changeCountInput.value ? changeCountButton.style.backgroundColor = 'green' : changeCountButton.style.backgroundColor = '';
  });

  changeCountButton.addEventListener('click', () => {

    console.log(typeof (changeCountInput.value));

    if (changeCountInput.value <= 0) {
      alert('Поле ввода не может быть пустым, а так же иметь отрицательное значение. Пожалуйста, убедитесь в правильности введенных данных.')

    } else {
      refreshCardButton.disabled = false;
      refreshCardButton.classList.remove('hide');

      ingredientsElements.forEach(item => {

        item.textContent *= changeCountInput.value;
        item.textContent = item.textContent % 1 > 0 ? Number(item.textContent).toFixed(1) : item.textContent

        changeCountButton.style.display = 'none';
        changeCountInput.style.display = 'none';

        const productCounter = document.querySelector('.product-count');

        if (changeCountInput.value > 20) {
          productCounter.textContent = changeCountInput.value + ' шт. ВНИМАНИЕ! Большой объем, лейте воду постепенно'
        } else if (changeCountInput.value < 5) {
          productCounter.textContent = changeCountInput.value + ` шт.`

        } else if (changeCountInput.value > 30) {
          productCounter.textContent = changeCountInput.value + ` шт.`
        } else {
          productCounter.textContent = changeCountInput.value + ` шт.`
        }

      });

      const inputWrapper = document.querySelector('.count-elements');
      const totalPriceElem = document.createElement('li');
      const totalPriceElemSecond = document.createElement('li');
      totalPriceElem.className = 'total-price-firstly'
      totalPriceElemSecond.className = 'total-price-secondly'

      inputWrapper.append(totalPriceElem);
      inputWrapper.append(totalPriceElemSecond);

      const countColor = document.querySelectorAll('.count');
      countColor.forEach(item => item.classList.add('active'))
    }
  });

  changeCountButton.addEventListener('click', event => {
    const target = event.target;

    if (target.dataset.idd === '4' || target.dataset.idd === '5') {
      let sum = 0;

      ingredientsElements.forEach(elem => {

        sum += parseInt(elem.textContent);
      });


      const ingElemParent = document.querySelector('.ing-elem_parent');
      const margarinElem = document.createElement('li');
      margarinElem.className = `spread-elem`;
      const sumElem = document.createElement('span');
      sumElem.className = `sum-elem`;
      sumElem.textContent = (sum * 0.25);

      margarinElem.textContent = ` гр. — Маргарин для закатки слоёв на общую массу теста ` + sum + ` гр.`;

      ingElemParent.insertAdjacentElement('beforeend', margarinElem);
      margarinElem.insertAdjacentElement('afterbegin', sumElem);
      console.log(`totalWeightDough = ` + sum);
      console.log(`spreadForCroissants =  ` + (sum * 0.25));
    }

  })

  // });

};


const openCardButton = document.querySelectorAll('.open-card');
const productsListWrapper = document.querySelector('.products-list');
const productWrapper = document.querySelector('.content-product');
const backToListBtn = document.querySelector('.back-to-list');

// backToListBtn.className = 'btn btn-active btn-neutral'

openCardButton.forEach(item => {

  item.addEventListener('click', (e) => {


    e.preventDefault();
    productsListWrapper.classList.add('hide');
    productWrapper.classList.add('open');

    const target = e.target.closest('.open-card').dataset.idd;


    if (target === '01') {
      generateItemProduct(whiteBread)
    } else if (target === '02' || target === '2') {
      generateItemProduct(borodinoBread)
      func(borodinoBread.ingredients)

    } else if (target === '03') {
      generateItemProduct(darnitsaBread)
      func(darnitsaBread.ingredients)
      console.log('use');

      console.log('rerere')
    } else if (target === '04') {
      generateItemProduct(croissant)
    }
    else if (target === '05') {
      generateItemProduct(croissantButter)
      func(croissantButter.ingredients)
    } else if (target === '06' || target === '6') {
      generateItemProduct(tartin)
      func(tartin.ingredients)
    } else if (target === '07') {
      generateItemProduct(bananaCake)
      func(bananaCake.ingredients)
    } else if (target === '08') {
      generateItemProduct(ciabatta)
      func(ciabatta.ingredients)
    } else if (target === '09') {
      generateItemProduct(rumBaba)
      func(rumBaba.ingredients)
    } else if (target === '10') {
      generateItemProduct(sochnik)
      func(sochnik.ingredients)
      // func(sochnik.cottageCheeseFilling)
      // funcAdditional(sochnik.addIngredients)
    } else if (target === '14') {
      generateItemProduct(browniePie)
      func(browniePie.ingredients)
    } else if (target === '11') {
      generateItemProduct(banoffeePie)
      func(banoffeePie.ingredients)
    } else if (target === '12') {
      generateItemProduct(lemonTart)
      func(lemonTart.ingredients)
    } else if (target === '13') {
      generateItemProduct(cheeseCake)
      func(cheeseCake.ingredients)
    } else if (target === '15') {
      generateItemProduct(pumpkinPie)
      func(pumpkinPie.ingredients)
    } else if (target === '16') {
      generateItemProduct(pavlova)
      func(pavlova.ingredients)
    } else if (target === '17') {
      generateItemProduct(cardamomBuns)
      func(cardamomBuns.ingredients)
      // func(cardamomBuns.cardamomFilling)
    } else if (target === '18') {
      generateItemProduct(charlotteWithApple)
      func(charlotteWithApple.ingredients)
    } else if (target === '19') {
      generateItemProduct(LvovskiyCheeseCake)
      func(LvovskiyCheeseCake.ingredients)
    } func

  })
});

backToListBtn.addEventListener('click', (e) => {
  e.preventDefault();
  productsListWrapper.classList.remove('hide');
  productWrapper.classList.remove('open');
  document.querySelector('.ingredients-wrapper').remove();
});




