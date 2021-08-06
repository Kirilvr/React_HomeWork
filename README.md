# C приведенным ниже массивом данных пользователей сделать следующий задачи, используя **_map/reduce_** вместо **_for, forEach_**:

- Получить строку c именами и фамилиями всех пользователей через запятую.
- Получить объект, где были бы
  - a) данные о среднем возрасте пользователей,
  - b) количество пользователей старше **_30_**,
  - c) количество пользователей старше **_40_**,
  - d) количество пользователей старше **_18_**.
- Создать новый массив пользователей, где объект пользователя должен содержать только **_id_** и **_поле_**, отвечающее за имя пользователя, которое должно содержать имя и фамилию.
- Создать массив из **_emails_** по алфавиту.
- Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше **_40_** лет.
- Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве.
___

```json
 [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg",
						"age": 23
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg",
						"age": 20
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg",
						"age": 40
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg",
						"age": 36
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg",
						"age": 70
        },
				{
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg",
						"age": 45
        }
    ]
```
