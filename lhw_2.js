/*concurrentPromises.Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів,
 що виконуються одночасно. Функція має виконати проміси паралельно,
 але не більше зазначеної максимальної кількості. Результатом функції має бути масив результатів промісів.
*/
function concurrentPromises(promises, maxConcurrent) {
    const results = [];
    let currentIndex = 0;
  
    function runNext() {
      if (currentIndex >= promises.length) {
        return Promise.resolve();
      }
  
      const currentPromiseIndex = currentIndex++;
      const promise = promises[currentPromiseIndex];
  
      return promise.then(result => {
        results[currentPromiseIndex] = result;
        return runNext();
      });
    }
  
    const concurrentTasks = [];
    for (let i = 0; i < maxConcurrent; i++) {
      concurrentTasks.push(runNext());
    }
  
    return Promise.all(concurrentTasks).then(() => results);
  }

  concurrentPromises([
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))
  ], 2).then(console.log);