import translatePigLatin from '../components/piglatin';

export const PIG_LATIN = 'PIG_LATIN';

export function pigLatinConvert(input){
  const output = translatePigLatin(`${input.inputtext}`);
  return {
    type: PIG_LATIN,
    payload: output
  };
}
