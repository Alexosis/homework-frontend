'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), "Шахматной доски размером меньше чем 2х2 не бывает");
		assert.strictEqual(chess('1'), "Шахматной доски размером меньше чем 2х2 не бывает");
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

	QUnit.test('Проверка входных данных на валидность', function (assert) {
		const object = {
			this: 1,
			is: "2",
			Sparta: "!!!",
		};
		assert.strictEqual(chess("this is a string"), "Ошибка ввода");
		assert.strictEqual(chess(Infinity), "Ввод бесконечен");
		assert.strictEqual(chess(object), "Ошибка ввода");
	});
});
