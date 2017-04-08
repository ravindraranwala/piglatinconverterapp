export const PIG_LATIN = 'PIG_LATIN';

export function pigLatinConvert(input){
  console.log(input);
  return {
    type: PIG_LATIN,
    payload: input.inputtext
  };
}
