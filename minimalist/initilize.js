const Batata = function(num1, num2) {
  return {
    out() {
      console.log(num1, num2)
    }
  }
};

const a = Batata(1, 2);
console.log(a);
a.out();