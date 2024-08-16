/*sequenceAsync.Реалізуйте функцію sequenceAsync, яка приймає масив функцій-промісів asyncFunctions. Кожна функція-проміс приймає
 попередній результат як аргумент і повертає новий результат. Функція sequenceAsync має виконати проміси послідовно,
  передаючи результат попереднього промісу в наступний. Зверніть увагу, що вам потрібно надати реалізацію функції sequenceAsync,
   яка дозволяє виконувати довільну кількість функцій-промісів у правильному порядку.
*/
async function sequenceAsync(asyncFunctions) {
    return asyncFunctions.reduce(async (prevPromise, currentFunction) => {
      const prevResult = await prevPromise; 
      return currentFunction(prevResult);
    }, Promise.resolve());
  }
  
  const asyncFunctions = [
    async (prevResult) => {
      console.log(`Попередній результат: ${prevResult}`);
      return prevResult + 1;
    },
    async (prevResult) => {
      console.log(`Попередній результат: ${prevResult}`);
      return prevResult * 4;
    },
    async (prevResult) => {
      console.log(`Попередній результат: ${prevResult}`);
      return prevResult - 6;
    }
  ];
  
  sequenceAsync(asyncFunctions)
    .then(finalResult => console.log("Кінцевий результат:", finalResult))
    .catch(error => console.error("Помилка:", error));
  