/*sumArrayPromise.Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise. 
Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.
*/
function sumArrayPromise(numbers) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sum = numbers.reduce((acc, num) => acc + num, 0); 
        resolve(sum);
      }, 3000); 
    });
  }
  
  sumArrayPromise([1, 2, 3, 4, 5]).then(console.log)

  
