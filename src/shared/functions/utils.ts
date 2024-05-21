export function convertEmptyStringToNull(obj: any) {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].trim() === '') {
      obj[key] = null;
    }
  }
}

export function removeNullsFromArray(array: any[]): any[] {
  return array.filter((item) => item !== null);
}
