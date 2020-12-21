export default {
  inputVariables: [
    {
      name: 'Количество разработчиков',
      initValue: 0,
      areas: [
        {
          name: 'Мало', range: [0, 0, 5, 11],
        },
        {
          name: 'Средне', range: [10, 14, 25, 30],
        },
        {
          name: 'Много', range: [20, 40, 50, 50],
        },
      ],
    },
    {
      name: 'Количество оставшихся дней',
      initValue: 0,
      areas: [
        {
          name: 'Мало',
          range: [0, 0, 4, 5],
        },
        {
          name: 'Средне',
          range: [4, 7, 10, 11],
        },
        {
          name: 'Много',
          range: [10, 12, 14, 14],
        },
      ],
    },
    {
      name: 'Сумма оставшихся SP',
      initValue: 0,
      areas: [
        {
          name: 'Мало',
          range: [0, 0, 45, 70],
        },
        {
          name: 'Средне',
          range: [50, 70, 110, 150],
        },
        {
          name: 'Много',
          range: [110, 150, 200, 200],
        },
      ],
    },
    {
      name: 'Сумма выполненных SP',
      initValue: 0,
      areas: [
        {
          name: 'Мало',
          range: [0, 0, 45, 70],
        },
        {
          name: 'Средне',
          range: [50, 70, 110, 150],
        },
        {
          name: 'Много',
          range: [110, 150, 200, 200],
        },
      ],
    },
  ],
  outputVariables: [
    {
      name: 'Успевает команда или нет',
      areas: [
        {
          name: 'Точно не успевает',
          range: [0, 0, 15, 20],
        },
        {
          name: 'Скорее всего не успевает',
          range: [15, 20, 40, 50],
        },
        {
          name: 'Возможно успевает',
          range: [40, 60, 70, 85],
        },
        {
          name: 'Точно успевает',
          range: [80, 90, 100, 100],
        },
      ],
    },
  ],
  rules: [
    [1, 0, 1, 1, 1],
    [1, 1, 2, 0, 1],
    [0, 1, 3, 0, 1],
    [1, 2, 3, 0, 1],
    [1, 3, 3, 1, 1],
    [1, 3, 3, 2, 1],
    [0, 1, 1, 1, 1],
    [2, 2, 1, 1, 1],
    [2, 2, 3, 1, 1],
    [1, 1, 1, 2, 2],
    [1, 2, 2, 1, 2],
    [2, 1, 2, 0, 2],
    [2, 2, 1, 2, 2],
    [2, 2, 2, 1, 2],
    [2, 2, 3, 2, 2],
    [1, 1, 1, 3, 3],
    [1, 2, 1, 2, 3],
    [1, 2, 2, 2, 3],
    [1, 2, 3, 2, 3],
    [1, 3, 1, 2, 3],
    [1, 3, 2, 1, 3],
    [1, 3, 3, 3, 3],
    [2, 1, 1, 2, 3],
    [2, 2, 2, 2, 3],
    [2, 2, 3, 3, 3],
    [2, 3, 2, 1, 3],
    [2, 3, 3, 1, 3],
    [3, 1, 1, 2, 3],
    [3, 1, 2, 0, 3],
    [3, 2, 2, 1, 3],
    [3, 2, 3, 0, 3],
    [1, 2, 1, 3, 4],
    [1, 2, 2, 3, 4],
    [1, 2, 3, 3, 4],
    [1, 3, 1, 3, 4],
    [1, 3, 2, 2, 4],
    [1, 3, 2, 3, 4],
    [2, 1, 1, 3, 4],
    [2, 2, 1, 3, 4],
    [2, 2, 2, 3, 4],
    [2, 3, 1, 0, 4],
    [2, 3, 2, 2, 4],
    [2, 3, 2, 3, 4],
    [2, 3, 3, 2, 4],
    [2, 3, 3, 3, 4],
    [3, 1, 1, 3, 4],
    [3, 2, 1, 0, 4],
    [3, 2, 2, 2, 4],
    [3, 2, 2, 3, 4],
    [3, 3, 0, 0, 4],
  ],
};