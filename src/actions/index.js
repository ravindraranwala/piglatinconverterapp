import piglatin from 'piglatin';

export const PIG_LATIN = 'PIG_LATIN';

export function pigLatinConvert(input){
  console.log(input);
  const output = piglatin(`${input.inputtext}`);
  console.log(output);
  return {
    type: PIG_LATIN,
    payload: output
  };
}
