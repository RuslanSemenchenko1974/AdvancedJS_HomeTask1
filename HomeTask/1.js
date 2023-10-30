"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  alboms: [
    { title: "Albom1", artist: "Singer1", year: "Год выпуска1" },
    { title: "Albom2", artist: "Singer2", year: "Год выпуска2" },
    { title: "Albom3", artist: "Singer3", year: "Год выпуска3" },
  ],

  [Symbol.iterator]() {
    let i = 0;
    const array = this.alboms;
    return {
      next() {
        return i < array.length
          ? { done: false, value: array[i++] }
          : { done: true };
      },
    };
  },

  // *[Symbol.iterator]() {
  //   for (const albom of this.alboms) {
  //     yield albom;
  //   }
  // },
};

for (const albom of musicCollection) {
  console.log(
    `Название альбома: ${albom.title} - Исполнитель: ${albom.artist} (Год выпуска: ${albom.year})`
  );
}
