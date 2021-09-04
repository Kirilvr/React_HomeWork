**(Обязательно)** Решить приведенные ниже задачи с массивом факультетов (предметы в факультетах не повторяются, всегда уникальны) используя всегда и только **reduce**. (Даже если логичнее использовать map/filter).

- Создать массив всех факультетов.
- Создать массив всех предметов. Помним, что предметы у нас всегда уникальны (проверку на повторения делать не надо).
- Посчитать общее количество студентов на всех факультетах.
- Создать объект, где ключ это название факультета, а значение - предметы этого факультета.

```json
[
	{
		id: 1,
		faculty: "History department",
		subjects: ["The World History", "History of Rome"],
		countStudents: 44,
	},
	{
		id: 2,
		faculty: "Department of Biology",
		subjects: ["biology", "chemistry"],
		countStudents: 50,
	},
	{
		id: 3,
		faculty: "Faculty of Mathematics",
		subjects: ["mathematics", "geometry", "trigonometry"],
		countStudents: 72,
	},
	{
		id: 4,
		faculty: "Faculty of Design",
		subjects: ["ui", "ux", "graphic design"],
		countStudents: 37,
	}
]
```
