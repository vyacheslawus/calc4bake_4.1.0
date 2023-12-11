const ingObj = [
  {
    itemName: 'hleb beliy',
    description: 'pizdatiy beliy hleb',
    image: "https://avatars.mds.yandex.net/i?id=f1ffc7e7623bc154c5d4d24a9353f340e438b504-8497218-images-thumbs&n=13",
    id: 01,
    flour: 300,
    water: 325,
    salt: 8,
    sugar: 20,
    yeast: 8

  },

    {
    itemName: 'hleb seriy',
    description: 'ohuevshiy seriy hleb to chto nado na zakvasochke',
    image: "https://newslab.ru/images/2017/sept/30/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%201%20(1).jpg",
    id: 02,
    flour: 2250,
    water: 250,
    salt: 7,
    sugar: 3,
    yeast: 15

  },

    {
    itemName: 'BATON NAREZNOI',
    description: 'pizdatiy no toje seriy kak na kartinki, drugoi ne nashel potomu chto',
    image: "https://lenta.servicecdn.ru/globalassets/1/-/19/43/17/256242_2.png?preset=fulllossywhite",
    id: 03,
    flour: 420,
    water:385,
    salt: 13,
    sugar: 26,
    yeast: 20

  },
];


//         ${
//   item.flour ? `<li class="ingredient-elem">мука пшеничная В/С
//           <span class="count flour-count">${item.flour}</span> <span>гр.</span>
//           </li>` : ''
// } 

          

//          ${
//   item.flourGrey ? `<li class="ingredient-elem">мука ржаная
//           <span class="count flourGrey-count">${item.flourGrey}</span> <span>гр.</span>
//           </li>` : ''
// } 

//              ${
//   item.flourFrench ? `<li class="ingredient-elem">мука пш. Франц. В/С
//           <span class="count flourFrench-count">${item.flourFrench}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.flourItaly ? `<li class="ingredient-elem">мука пш. Итальянская. В/С
//           <span class="count flourItaly-count">${item.flourItaly}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.wholeGrainFlour ? `<li class="ingredient-elem">мука пш. цельнозерновая
//           <span class="count wholeGrainFlour-count">${item.wholeGrainFlour}</span> <span>гр.</span>
//           </li>` : ''
// }
          

//           ${
//   item.butter72Percent ? `<li class="ingredient-elem">масло сл-слив. 72.5%
//           <span class="count butter72Percent-count">${item.butter72Percent}</span> <span>гр.</span>
//           </li>` : ''
// } 

//               ${
//   item.butter84Percent ? `<li class="ingredient-elem">масло сл-слив 84.5%
//           <span class="count butter84Percent-count">${item.butter84Percent}</span> <span>гр.</span>
//           </li>` : ''
// } 

//             ${
//   item.sugar ? `<li class="ingredient-elem">сахар
//           <span class="count sugar-count">${item.sugar}</span> <span>гр.</span>
//           </li>` : ''
// }

//             ${
//   item.caneSugar ? `<li class="ingredient-elem">сахар тростниковый
//           <span class="count caneSugar-count">${item.caneSugar}</span> <span>гр.</span>
//           </li>` : ''
// }

//             ${
//   item.salt ? `<li class="ingredient-elem">соль
//           <span class="count salt-count">${item.salt}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.yeast ? `<li class="ingredient-elem">дрожжи
//           <span class="count yeast-count">${item.yeast}</span> <span>гр.</span>
//           </li>` : ''
// } 

//           ${
//   item.yeastPress ? `<li class="ingredient-elem">дрожжи пресс.
//           <span class="count yeastPress-count">${item.yeastPress}</span> <span>гр.</span>
//           </li>` : ''
// } 

//           ${
//   item.water ? `<li class="ingredient-elem">вода
//           <span class="count water-count">${item.water}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.milk ? `<li class="ingredient-elem">молоко
//           <span class="count milk-count">${item.milk}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.condensedMilk ? `<li class="ingredient-elem">молоко сгущенное
//           <span class="count condensedMilk-count">${item.condensedMilk}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.margarine ? `<li class="ingredient-elem">маргарин
//           <span class="count margarine-count">${item.margarine}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.kefir ? `<li class="ingredient-elem">кефир
//           <span class="count kefir-count">${item.kefir}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.eggs ? `<li class="ingredient-elem">яйца
//           <span class="count eggs-count">${item.eggs}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.bananas ? `<li class="ingredient-elem">бананы
//           <span class="count bananas-count">${item.bananas}</span> <span>шт.</span>
//           </li>` : ''
// }

//           ${
//   item.oil ? ` <li class="ingredient-elem">масло подсолнечное
//           <span class="count oil-count">${item.oil}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.oliveOil ? ` <li class="ingredient-elem">масло оливковое
//           <span class="count oliveOil-count">${item.oliveOil}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.brew ? ` <li class="ingredient-elem">заварка солодовая
//           <span class="count brew-count">${item.brew}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.fermentGrey ? ` <li class="ingredient-elem">закваска ржаная
//           <span class="count fermentGrey-count">${item.fermentGrey}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.wholeGrainFerment ? ` <li class="ingredient-elem">закваска пш. цельнозерновая
//           <span class="count wholeGrainFerment-count">${item.wholeGrainFerment}</span> <span>гр.</span>
//           </li>` : ''
// }


//           ${
//   item.bakingPowder ? ` <li class="ingredient-elem">разрыхлитель
//           <span class="count bakingPowder-count">${item.bakingPowder}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.vanillin ? ` <li class="ingredient-elem">ванилин
//           <span class="count vanillin-count">${item.vanillin}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.walnut ? ` <li class="ingredient-elem">грецкий орех
//           <span class="count walnut-count">${item.walnut}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.raisin ? ` <li class="ingredient-elem">изюм
//           <span class="count raisin-count">${item.raisin}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.sourCream ? ` <li class="ingredient-elem">сметана
//           <span class="count sourCream-count">${item.sourCream}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.chocolate ? ` <li class="ingredient-elem">горький шоколад
//           <span class="count chocolate-count">${item.chocolate}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.cocoa ? ` <li class="ingredient-elem">какао
//           <span class="count cocoa-count">${item.cocoa}</span> <span>гр.</span>
//           </li>` : ''
// }

//           ${
//   item.raisin ? ` <li class="ingredient-elem">изюм
//           <span class="count raisin-count">${item.raisin}</span> <span>гр.</span>
//           </li>` : ''
// }