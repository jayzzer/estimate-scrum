import initialData from '@/utils/initialData';

/**
 * Возвращает значение трапезоиды
 * @param range - диапазон
 * @param value - значение
 */
export function trapezoid(range: number[], value: number): number {
  if (value < range[0] || value > range[3]) return 0;
  if (value < range[1]) {
    return range[0] === range[1] ? 1 : (value - range[0]) / (range[1] - range[0]);
  }
  if (value <= range[2]) return 1;
  return (range[3] - value) / (range[3] - range[2]);
}

/**
 * Возвращает строковое представление правила
 * @param rule
 */
export function getRuleStr(rule: number[]): string {
  let res = '';
  for (let i = 0; i < 4; i += 1) {
    if (!rule[i]) continue;
    const input = initialData.inputVariables[i];
    const inputArea = input.areas[rule[i] - 1];
    if (!res.length) res += 'IF ';
    else res += ' AND ';
    res += `${input.name} IS ${inputArea.name}`;
  }
  res += ` THEN ${initialData.outputVariables[0].areas[rule[4] - 1].name}`;
  return res;
}
