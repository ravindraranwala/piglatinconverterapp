import pigLatin from 'piglatin';

export const PIG_LATIN = 'PIG_LATIN';

export function pigLatinConvert(input){
  const output = pigLatin(`${input.inputtext}`);
  return {
    type: PIG_LATIN,
    payload: output
  };
}
