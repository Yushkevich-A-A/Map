import { ErrorRepository } from '../ErrorRepository';

const dataWithErrors = [
  [400, 'неправильный, некорректный запрос'],
  [401, 'не авторизован (не представился)'],
  [402, 'необходима оплата'],
  [403, 'запрещено (не уполномочен)'],
  [404, 'не найдено'],
  [500, 'внутренняя ошибка сервера'],
  [501, 'не реализовано'],
  [502, 'плохой, ошибочный шлюз'],
  [503, 'сервис недоступен'],
  [504, 'шлюз не отвечает'],
];

const errorRepositiry = new ErrorRepository(dataWithErrors);

test('при существующей ошибке возвращается описание', () => {
  expect(errorRepositiry.translate(404)).toBe('не найдено');
});

test('при несуществующей ошибке возвращается предупреждение', () => {
  expect(errorRepositiry.translate(100)).toBe('Unknown error');
});
