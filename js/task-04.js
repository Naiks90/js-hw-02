const formatString = function (string) {
  if (string.length > 40) {
    let shotstring = string.slice(0, 40);
    shotstring = shotstring.split(' ');
    shotstring.push('...');
    shotstring = shotstring.join(' ');
    // string = shotstring;
    return shotstring;
  } else {
    return string;
  }
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка
