import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {


	if (params.a && params.b && params.op) {

        const a = parseFloat(params.a);
        const b = parseFloat(params.b);
        let op = '';
        let answer = NaN;

        switch (params.op) {
            case 'add':
              answer = a + b;
              op = '+';
              break;
            case 'sub':
              answer = a - b;
              op = '-';
              break;       
            case 'mul':
              answer = a * b;
              op = '*';
              break;  
              case 'div':
                answer = a / b;
                op = '/';
                break; 
              default:
                answer = 0;
                op = '?';   
          }
        return {
            a: a,
            b: b,
            op: op,
            answer: answer

        }

	}
	throw error(404, 'Not found');
}