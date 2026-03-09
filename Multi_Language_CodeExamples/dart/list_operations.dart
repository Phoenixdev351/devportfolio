void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  List<int> doubled = numbers.map((n) => n * 2).toList();
  print('Doubled: $doubled');
  
  int sum = numbers.reduce((a, b) => a + b);
  print('Sum: $sum');
}
