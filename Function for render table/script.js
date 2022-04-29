animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]



function getInfo(arrForTable, titleForTable) {
       
       document.write(`<table class="table">
            <caption class="title">${titleForTable} info </caption>
            <tbody>`);

      for (i = 0; i < arrForTable.length; i++) {
            
            let mas = arrForTable[i];
            console.log(mas);

                   document.write(`<tr> ${mas.map((item) =>
                  `<td > ${ Array.isArray(item) ? item.join(`; `) : item } </td>`).join('')}</tr>`);
      }

      document.write(`</tbody> </table>`);

                                             }

getInfo(animals, `Animals`),
getInfo(food, `Food`),
getInfo(universes, `Universes`)
