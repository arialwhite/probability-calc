

import 'mathjs'
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

export { fact, bicoeff, bilaw, bilawDistrib, expectedValue, variance,
         stdDev, stdDevMatrix, maxtrixCovBiased, maxtrixCovUnbiased,
         maxtrixCorrUnbiased, maxtrixCorrBiased, sum, mean };

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

function unitColMatrix(n: number): Matrix {
  const arr= [];
  for (let i = 0; i<n; i++) {
    arr.push([1]);
  }
  return math.matrix(arr, 'dense');
}

function unitRowMatrix(n: number): Matrix {
  const arr= [];
  for (let i = 0; i<n; i++) {
    arr.push(1);
  }
  return math.matrix(arr, 'dense');
}

function unitMatrix(n : number): Matrix {
  const result = [];
  for (let i = 0; i<n; i++) {
    const arr = [];
    for (let j = 0; j<n; j++) {
      arr.push(1);
    }
    result.push(arr);
  }

  return math.matrix(result, 'dense');
}

function stdDevMatrix(m: Matrix): Matrix {
  const i = m.size()[0];

  let U = unitMatrix(i);

  let res;
  res = math.multiply(U, m);
  res = math.divide(res, i);
  res = math.subtract(m, res);

  return res;
}

function sum(A: number[]) {
  let result = 0;
  for (let i = 0; i<A.length; i++) {
    result += A[i];
  }
  return result;
}

function mean(A: number[]) {
  return sum(A) / A.length;
}

function varianceBiased(A: number[]) {
  const N = A.length;
  const mA = mean(A);

  let sum = 0;
  for (let i = 0; i<N; i++) {
    sum += (A[i] - mA) * (A[i] - mA);
  }

  return sum / N;
}

function varianceUnbiased(A: number[]) {
  const N = A.length;
  const mA = mean(A);

  let sum = 0;
  for (let i = 0; i<N; i++) {
    sum += (A[i] - mA) * (A[i] - mA);
  }

  return sum / (N - 1);
}

function stdBiased(A: number[]) {
  return Math.sqrt(varianceBiased(A));
}

function stdUnbiased(A: number[]) {
  return Math.sqrt(varianceUnbiased(A));
}

function covUnbiased(A: number[], B: number[]): number {
  const N = A.length;
  const mA = mean(A);
  const mB = mean(B);

  let sum = 0;
  for (let i = 0; i<N; i++) {
    sum += ((A[i] - mA) * (B[i] - mB));
  }

  return sum / (N - 1)
}

function covBiased(A: number[], B: number[]): number {
  const N = A.length;
  const mA = mean(A);
  const mB = mean(B);

  let sum = 0;
  for (let i = 0; i<N; i++) {
    sum += A[i] * B[i];
  }

  return sum / N - (mA * mB);
}

function corrBiased(A: number[], B: number[]): number {
  return covBiased(A, B) / (stdBiased(A) * stdBiased(B));
}

function corrUnbiased(A: number[], B: number[]): number {
  return covUnbiased(A, B) / (stdUnbiased(A) * stdUnbiased(B));
}

function maxtrixCovBiased(X: Matrix): Matrix {
  const i = X.size()[0];

  const x = stdDevMatrix(X);
  const xT = math.transpose(x);

  let res;
  res = math.multiply(xT, x);
  res = math.divide(res, i);

  return res;
}

function maxtrixCovUnbiased(matrix: number[][]): number[][] {
  const result: number[][] = [];

  const N = matrix[0].length;

  for (let i = 0; i<N; i++) {
    result.push([]);
  }

  for (let a = 0; a<N; a++) {
    const A: number[] = [];
    for (let i = 0; i <matrix.length; i++) {
      const row = matrix[i];
      A.push(row[a]);
    }
    for (let b = 0; b<N; b++) {
      const B: number[] = [];
      for (let i = 0; i <matrix.length; i++) {
        const row = matrix[i];
        B.push(row[b]);
      }
      result[a][b] = covUnbiased(A,B);
    }
  }
  return result;
}

function maxtrixCorrUnbiased(matrix: number[][]): number[][] {
  const result: number[][] = [];

  const N = matrix[0].length;

  for (let i = 0; i<N; i++) {
    result.push([]);
  }

  for (let a = 0; a<N; a++) {
    const A: number[] = [];
    for (let i = 0; i <matrix.length; i++) {
      const row = matrix[i];
      A.push(row[a]);
    }
    for (let b = 0; b<N; b++) {
      const B: number[] = [];
      for (let i = 0; i <matrix.length; i++) {
        const row = matrix[i];
        B.push(row[b]);
      }
      result[a][b] = corrUnbiased(A,B);
    }
  }
  return result;
}

function maxtrixCorrBiased(matrix: number[][]): number[][] {
  const result: number[][] = [];

  const N = matrix[0].length;

  for (let i = 0; i<N; i++) {
    result.push([]);
  }

  for (let a = 0; a<N; a++) {
    const A: number[] = [];
    for (let i = 0; i <matrix.length; i++) {
      const row = matrix[i];
      A.push(row[a]);
    }
    for (let b = 0; b<N; b++) {
      const B: number[] = [];
      for (let i = 0; i <matrix.length; i++) {
        const row = matrix[i];
        B.push(row[b]);
      }
      result[a][b] = corrBiased(A,B);
    }
  }
  return result;
}


function getSubCovs(matrix: number[][]): number[][][] {
  const result: number[][][] = [];
  const N = matrix.length;
  for (let a = 0; a<N; a++) {
    for (let b = 1; a+b <= N; b++) {
      const m = matrix.slice(a, a+b);
      
      if (m && m.length && m[0] && m[0].length) {
        const unbiased = maxtrixCovUnbiased(m);
        result.push(unbiased);

        try {
          const mm = math.matrix(m);
          const biased = maxtrixCovBiased(mm);
          const biasedArr = (biased as any).toArray();
          result.push(biasedArr);
        } catch(err) {
          console.log('cannot calculate biased matrix', a, a+b);
        }
      }
    }
  }
  return result;
}
