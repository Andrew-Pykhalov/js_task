// 1. Создайте переменную price и присвойте ей значение 100. Затем создайте переменную discount и присвойте ей значение 0.2 (20%). Вычислите цену со скидкой и выведите результат в консоль: "80 руб, вместо 100 руб".

{
    let price = 100,
        discount = 0.2;

    let discountPrice = price - price * discount;

    console.log(discountPrice + ' руб, вместо ' + price);
}

// 2. Дана строка: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь". Посчитайте сколько раз в строке встречается символ "п". Выведите кол-во в консоль.

{
    let str = 'Дана строка: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь". Посчитайте сколько раз в строке встречается символ "п". Выведите кол-во в консоль.';

    let counter = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'п' || str[i] == 'П') {
            counter ++;
        }
    }

    console.log(counter);
}

// 3. Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Используйте цикл for, чтобы найти и вывести наименьшее число в массиве.

{
    let arr = [123, 456, 789, 987, 654, 321, -500, - 1000];

    let minElem;

    for(let i = 0; i < arr.length; i++) {
        if(minElem == undefined) {
            minElem = arr[i];

            continue;
        }
        if(arr[i] < minElem) {
            minElem = arr[i];
        }
    }

    console.log(minElem);
}

// 4. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы выведите в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев".

{
    let arr = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

    let newArr = [];
    // let arr1 = arr.slice(0, 1);
    // let arr2 = arr.slice(1);
    // let result;

    // console.log(arr1);
    // console.log(arr2);

    // console.log(arr[0][0] + ' из ' +arr[1][0])

    for(let i = 0; i < arr.length - 1; i++) {

        for(let j = 0; j < arr[i].length; j++) {
           newArr.push(arr[i][j] + ' из ' + arr[i + 1][j]);
        }
    }

     console.log(newArr);
}

// 5. Создайте переменную temperature со случайным значением от -10 до 40. Напишите условие, которое проверяет, холодно ли (меньше 0) или жарко (больше 30), либо "нормальная температура", и выведите соответствующее сообщение. Решите задачу с помощью switch.

{
    let teperature = 30;

    switch(true) {
        case teperature < -10:
            console.log('its cold outside');
            break;
        case teperature <= 0:
            console.log('its normal outside');
            break;
        case teperature >= 10 && teperature < 20:
            console.log('its good outside');
            break;
        case teperature >= 20 && teperature < 30 :
            console.log('its supreme outside');
            break;
        case teperature >= 30:
            console.log('its very hot outside');
            break;
        default:
            console.log('other');
    }
}

// 6. Напишите программу, которая запрашивает у пользователя целое положительное число и выводит на экран факториал этого числа с помощью цикла for. Например, для числа 5 = 1*2*3*4*5 = 120.

{
    // let a = prompt();
    // let factorial = 1;

    // for(i = 1; i <= a; i++) {
    //     factorial *= a;
    // }

    // console.log(factorial);
}

// 7. Создайте строку с названиями городов Беларуси, записывая каждый город через запятую (4 городов будет достаточно). Создайте массив из данной строки с городами. Используя метод push, добавьте в массив еще 3 города и выведите результат.

{
    let str = 'Минск, Гродно, Брест, Гомель';
    let arr = str.split(', ');
    arr.push('Витебск', 'Лида', 'Молодечно');

    console.log(arr);
}

// 8. Напишите условие, которое проверяет, что переменная age больше 18 и меньше 65. Если условие выполнено, выведите сообщение о том, что пользователь находится в возрасте трудоспособности.

{
    let age = 29;

    if (age >= 18 && age <= 65) {
        console.log('Go to work');
    } else {
        console.log('Relax');
    }
}

// 9. Создайте массив с названиями месяцев. Используя обратный цикл while, выведите каждый месяц в консоль, добавить порядковый номер к месяцу, например: "1. Январь".

{
    let mounthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    let i = 0;
    while(i < mounthArr.length) {
        console.log((i + 1)+ '. ' + mounthArr[i]);
        i++;
    }
}

// 10. Напишите программу, которая ищет заданное число в произвольном массиве длиной 8 и выводит его индекс. Если число не найдено, выведите сообщение об этом.

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    let num = 8;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == num) {
            console.log(num + ' index ' + i);
            break;
        } else if(arr[i] == arr[arr.length - 1]){
            console.log('not found');
            // break;
        }
    }

   
   if(arr.indexOf(num) === -1) {
    console.log('not found') 
   } else {console.log(num)}
}

// 11. Напишите программу, которая соединяет две строки, представляющие ваше имя и фамилию. Данные запросите у пользователя через prompt. Выведите на экран: "Имя Фаимилия, добро пожаловать в аккаунт!". Если пользователь ввел пустые данные, то ничего не выводить.

{ 
    /*
    let userFirstName = prompt('Enter your name');
    let userLastName = prompt('Enter your last name');

    if(userFirstName !== undefined 
        && userLastName !== undefined 
        && userFirstName !== '' 
        && userLastName !== ''
        && userFirstName !== null 
        && userLastName !== null
    ) {
        alert('Welcome ' + userFirstName + ' ' + userLastName);
    } else {
        alert('');
    }
  */
}

// 12. Напишите условие, которое проверяет, что переменная input, значение в которую записывается через prompt, является положительным числом и не равна нулю. Выведите результат в консоль, но если пользователь нажимает отмена - вывести "Нет значения".

{ 
    /*
    let input = prompt('Enter the number');

    if(input <= 0 
        || input == null 
        || input == '' 
        || input == undefined 
        || input == NaN) {

        console.log('Error');

        } else {
        console.log(input);
    } 
   */
} 

// 13. Создайте переменную day и присвойте ей значение от 1 до 7 (представляющее день недели). Напишите условие, которое проверяет, является ли день выходным (суббота или воскресенье) и выведите результат в консоль.

{
    let day = 7;

    if(day >=1 && day <= 5) {
        console.log('Weekdays');
    } else if(day == 6) {
        console.log('its Saturday');
    } else if(day == 7) {
        console.log('its Sanday');
    } else {
        console.log('Error');
    }
}

// 14. Создайте любой массив из 8 значений и удалите 2 элемента из массива, начиная с индекса 3, и выведите измененный массив.

{
    let arr = [1, 23, 4, 56, 7, 89, 10, 1112, 0];

    arr.splice(2, 3);

    console.log(arr);

}

// 15. Объявите переменные x и y и присвойте им значения 5 и 10 соответственно. Обменяйте значения переменных между собой и выведите их в консоль.

{
    let x = 5,
        y = 10;

    [x, y] = [y, x]

    console.log(x, y);
}

// 16. Объявите переменную items и присвойте ей массив из 5 строковых значений. Выведите в консоль все элементы массива.

{
    let items = ['I', 'adore', 'solving', 'tasks', 'with', 'JS'];

    console.log(items.join(' '));
}

// 17. Объявите переменную isOnline и присвойте ей значение true. Напишите условие, которое будет выводить в консоль "Пользователь онлайн", если isOnline равно true, иначе "Пользователь не в сети"

{
    let isOnline = true;
    (isOnline === true) ? console.log('User is online'): console.log('User is offline');

    /*
    let isOnline = true;
    if(isOnline === true) {
        console.log('User is online');
    } else {
        console.log('User is offline');
    }
    */
}

// 18. Создайте переменную stringNum со значением "100px". Преобразуйте это значение в число и выведите результат в консоль (ожидается NaN).

{
    let strNum = '100px';

    console.log(Number(strNum));
}

// 19. Создайте переменную floatNumber с значением 3.14. Преобразуйте это число в целое и выведите результат в консоль.

{
    let floatNumber = 3.14;

    console.log(parseInt(floatNumber));
    console.log(Math.round(floatNumber));
}

// 20. Объявите переменную array с несколькими элементами. Преобразуйте этот массив в строку и выведите результат в консоль.

{
    let array = ['From', 'array', 'to', 'string'];

    console.log(array.join(' '));
}

// 21. Создайте переменные strNumber1 и strNumber2 со значениями "20" и "30". Преобразуйте их в числа, сложите и выведите результат.

{
    let strNum1 = "20",
        strNum2 = "30";

    console.log(Number(strNum1) + Number(strNum2));
}

// 22. Напишите программу, которая принимает переменную password и сравнивает её с фиксированным значением (например, "secret"). Выведите в консоль сообщение о правильности пароля.

{
    let password = prompt('Enter the password');

    (password === 'secret') ? console.log('Confirmed') : console.log('Denied');
}