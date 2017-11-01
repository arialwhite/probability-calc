
export { fact, bicoeff, bilaw, bilawDistrib, expectedValue, variance, stdDev };

function fact(n: number): number {
  return n === 0 ? 1 : n * fact(n-1);
}

function bicoeff(n: number, p: number): number {
  return fact(n) / (fact(n - p) * fact(p));
}

function bilaw(n: number, p: number, k: number) {
  return bicoeff(n, k)  *
         Math.pow(p, k) *
         Math.pow(1 - p, n - k);
}

function bilawDistrib(n: number, p: number): [number, number][] {
  const result: [number, number][] = [];
    for (let i = 0; i <= n; i++) {
      result[i] = [i, bilaw(n , p, i)];
    }
  return result;
}

function expectedValue(n: number, p: number): number {
  return (n * p);
}

function variance(n: number, p: number): number {
  return (n * p) * (1 - p);
}

function stdDev(n: number, p: number): number {
  return Math.sqrt(variance(n, p));
}
