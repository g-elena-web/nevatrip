## 1. Верстка блока ##

Верстка [по макету](https://www.figma.com/file/JyFQcxiynMH1i5ViWz4qi0/Layout-test-task) выполнена при помощи React и Bootstrap. 

С помощью React-компонента Trip можно динамически создавать блоки для каждой экскурсии с любыми данными. Данные о каждой экскурсии хранятся в массиве в файле trips.js

Демо готовой страницы [здесь](https://g-elena-web.github.io/nevatrip/)

## 2. Таблица на странице ##

Для наилучшего отображения таблицы на [странице](https://codepen.io/kizoso/pen/VwpeeRY) потребовалось добавить следующее:

- `meta name="viewport" content="width=device-width, initial-scale=1"` в html-документ

- `box-sizing: border-box` в css-файл

- `width: 100% и word-break: break-word` в стили таблицы

Полный код доступен в репозитории в папке src/table.
