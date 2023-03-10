# Система управления базой данных, основанной на технологии блокчейн 
### v0.0.1
### 1. Описание технологии блокчейн (B)

В хронологических системах хранения информации существует
проблема проверки неизменности сохраненных данных. 
Пользователь отправляя информацию на хранение должен быть уверен,
что со временем информация не измениться и есть простой механизм проверки 
этого. Одним из решений данной проблемы может являться механизм блокчейна (B).

(В) представляет собой цепочку последовательных блоков данных, каждый из которых хранит 
краткую информацию (КИ) о предыдущем блоке данных, таким образом, чтобы изменить информацию
в одном блоке данных, необходимо изменить (КИ) во всех последующих. Если 
механизм проверки соответствия (КИ) будет достаточно быст и надежен,
а механизм создания (КИ) будет требователен ко времени ( не быстрый ), то получим цепочку
блоков данных на изменение, данных в одном блоке которого, потребуется полный пересчет (КИ)
во всех последующих. При большом колличестве таких блоков или чем старше хранимая информация
тем больше времени будет требоваться на ее изменение.

![блоки](./media/bloks.jpg)

В оригинальной теории блокчейна для расчета (КИ) используется механизм хеширования основанный 
на элиптических кривых, описываемых уравнением Вейерштрасса.
https://habr.com/ru/company/bitfury/blog/340378/
 В данной работе для упрощения 
будем использовать более простоя метод получения хеша, основанный на взятии ряда чисел после 
запятой от вещественного числа, полученного при вычислении следующего выражения:


![блоки](./media/hash.jpg)

Выражение для вычисления хэш-суммы будет следующим:

![блоки](./media/hash2.jpg)

где, Rn - операция округления к ближайшему целому, L - длина хэш-суммы 

Так же, в оригинальной теории, для увеличения времени получения хэш-суммы используется дополнительное условие к виду полученного хэша. (к примеру хэшь-суимма должна начинаться 8-ю нулями), в данной работе, для упрощения принимаем, что хэшь-сумма будет валидной если содержит миниму две цифры 2.




### 2. Механизм хранения данных
---
#### Алгоритмы хэшировнаие
Файл:  `source/hash/hash.js`\
`hash(число,длина)` - алгоритм хэширования целого числа\
`massivToHash(массив,длина)` - алгоритм преобразования массива чисел в соотвествующий хэш\
`strToMassiv(строка)` - преобразование строки в массив,где каждый элемент соотвествует коду символа в строке\
`strToHash(строка,длина)` - преобразование строки в соотвествующий хэш

---
#### Поиск хеш-суммы определенного вида (майнинг)
 Файл:  `source/mine/mine.js`\
`isHashValid(хеш-сумма)` - проверка соотвествия хеш-сыммы определенному условию\
`mine(строка)` - поиск хеш-суммы определенного вида ( для которой выполнится isHashValid). Результатом 
будет объект {hash,i} hash - найденная сумма, i - приращение , при котором выполняется isHashValid

---
### 3. Блок схема сохранеия информации 

![блок-схема](./media/bs-save-info.jpg)
---
### 4. Блок схема сохранеия информации (функциональная)

![блок-схема](./media/bs-save-info-func.jpg)

---

### 5. Описание файлов
---
#### Клиентская часть (интерфейс)
```client\index.js``` - точка вхоода в программу (стартовый файл) осуществляет подключение остновных модулей-файлов (см ```import```) в программу и запуск первоначальных ф-ций.\
```client\router.config.js``` - настройка подключения к серверу с базой данных.\
```client\index.html``` - шаблон html структуры приложения, содержит первоначальную разметку для интерфейсных блоков приложения, таких как закладки, поля ввода, кнопки и т.д.\
```client\data.js``` - хранилище данных приложения со структурой и начальными данными (внутренние данные программы)\
```client\tabs\clients.js```  - обработка интерфейсных элементов вкладки Клиенты\
```client\tabs\jurnal.js```  - обработка интерфейсных элементов вкладки Журнал\
```client\utils\ui.js```  - утилиты преобразования простых тегов html в объекты jquery, для превращения их в полноценные интерфейсные элементы (поля ввода, кнопки, таблицы, вкладки, диалоги и т.д)\
```client\utils\dialog.js```  - содержит ф-цию вызова простого модального диалога\
```client\utils\table.js```  - ф-ции создания, очистки и добавления данных в таблицы\
```client\utils\isChange.js```  - утилиты для работы с хранилищем приложения\
```client\utils\onResizeScreen.js```  - ф-ция обработчик на событие изменения размеров экрана ( вызывается когда экран будет перерисован)\
```client\utils\pos.js```  - определение габаритов DOM элементов (html - тегов)\
```client\utils\screen.js```  - возвращает текущий размер экрана (размер области броузера)\
```client\style\index.css```  - таблица стилей приложения ( оформление - цвета, фон и тд)
#### Клиентская часть (алгоритмы БЧ)
```source\saveToServer.js```  - основная рабочая ф-ция, реализующая алгоритм представленный в п `3.Блок схема сохранения информации`. Получает данные для сохранения, вычисляет ее хеш-сумму (майнинг) и сохраняет вычисленное на сервер.\
```source\server.js```  - набор ассинхроных ф-ций для доступа к данным на сервере (описание дано в файле и также в мнемонике ( в самих названиях) )\
```source/hash/hash.js``` - ф-ция преобразование строки в ее хеш-сумму\
```source/mine/mine.js``` - поиск хеш-суммы определенного вида ( майнинг ).









