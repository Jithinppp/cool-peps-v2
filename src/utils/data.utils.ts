// this is a async function that take url: as a string
// and the return value as a promise to define return as a promise we use Promise
// this Promise is a generic type so we have to import or state its type
// that it <T>. pass a type when we using the function
// to receive a type while using the function we use <T> before the parameter
// and pass it to the return generic type
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};
