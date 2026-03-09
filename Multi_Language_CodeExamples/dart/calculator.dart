class Calculator {
  int add(int a, int b) => a + b;
  int multiply(int a, int b) => a * b;
}

void main() {
  var calc = Calculator();
  print('5 + 3 = ${calc.add(5, 3)}');
  print('5 * 3 = ${calc.multiply(5, 3)}');
}
