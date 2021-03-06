import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';


import { multiplyMatricies } from './multiplyMatricies';


describe('multiplyMatricies()', () => {


	const matrixA = [[1,2],[3,4]];
	const matrixB = [[5,6],[7,8]];
	const matrixC = [[1],[2]];
	const matrixD = [[1,2]];
	const scalarA = 2;
	const scalarB = 3;

	const scaledMatrix_AA = [[2,4],[6,8]];
	const productMatrix_AB = [[19,22],[43,50]];
	const productMatrix_AC = [[5],[11]];

	it('should return a matrix', () => {
		assert(Array.isArray(multiplyMatricies(matrixA, matrixB)) && Array.isArray(multiplyMatricies(matrixA, matrixB)[0]));
	})

	it('should throw an error if at least one input is not a matrix', () => {
		let testPassed = false;

		try {
			multiplyMatricies(scalarA, scalarB);
		} catch(e) {
			testPassed = true
		}

		assert(testPassed);
	})

	it('should throw an error if an input is neither a scalar nor a matrix', () => {
		let testPassed = false;

		try {
			multiplyMatricies("String", matrixA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct product between a matrix and a scalar when the scalar is the first argument', () => {
		assert(arraysDeepEqual(multiplyMatricies(scalarA, matrixA), scaledMatrix_AA));
	})

	it('should return the correct product between a matrix and a scalar when the scalar is the second argument', () => {
		assert(arraysDeepEqual(multiplyMatricies(matrixA, scalarA), scaledMatrix_AA));
	})

	it('should return the correct product between a matrix and a matrix', () => {
		assert(arraysDeepEqual(multiplyMatricies(matrixA, matrixB), productMatrix_AB));
	})

	it('should return the correct product between matricies of different dimensions', () => {
		assert(arraysDeepEqual(multiplyMatricies(matrixA, matrixC), productMatrix_AC));
	})

	it('should throw an error if matricies do not have compatable dimesions', () => {
		let testPassed = false;

		try {
			multiplyMatricies(matrixA, matrixD);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})
})







