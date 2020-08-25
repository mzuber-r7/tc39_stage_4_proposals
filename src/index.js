const martin = {
  name: 'Martin',
  age: 25,
  children: 0,
};

const thomas = {
  name: 'Thomas',
  age: 48,
  address: {
    street: 'Chapel st.',
    city: 'Dublin 1',
    county: 'Dublin',
  },
  children: 5,
};

const john = {
  name: 'John',
  age: 18,
};

const amy = {
  name: 'Amy',
  age: 28,
  address: {
    street: 'First st.',
    city: 'Cork',
    county: 'Cork',
  },
};

martin.friends = [thomas];
thomas.friends = [martin, amy];
john.friends = [thomas, amy];
amy.friends = [john, thomas]

const classMates = [martin, thomas, john, amy];

const log = (text, value) => {
  console.log(`%c${text}`, 'color: blue');
  console.log(value);
}



console.group('flat, flatMap');
// log('classMates', classMates);

// log('[a] .flatMap (a -> [b]) -> [b]', '');
// log('classMates.flatMap(c => c.friends))', classMates.flatMap(c => c.friends));

// log('[a] .map (a -> b) -> [b]', '');
// log('classMates.map(c => c.friends))', classMates.map(c => c.friends));

// log('classMates.map(c => c.friends).flat())', classMates.map(c => c.friends).flat());
console.groupEnd();




console.group('Optional Chaining');
// log('classMates', classMates);

// log('classMates.map(c => c && c.address && c.address.city)', classMates.map(c => c && c.address && c.address.city));

// log('classMates.map(c => c?.address?.city)', classMates.map(c => c?.address?.city));

// log('classMates.map(c => c?.address?.city).filter(Boolean)', classMates.map(c => c?.address?.city).filter(Boolean));
console.groupEnd();


console.group('Nullish Coalescing');
// log('classMates', classMates);

// log(`classMates.map(c => c && c?.children || 'unknown')`, classMates.map(c => c && c?.children || 'unknown'));

// log(`classMates.map(c => (c && c?.children) ?? 'unknown')`, classMates.map(c => (c && c?.children) ?? 'unknown'));

console.groupEnd();


console.group('Logical Operators and Assignment Expressions');
// let zero = 0;
// let zeroAgain = 0;
// let one = 1;
// log('zero', zero);
// log('one', one);

// log(`zero || (zero = one)`, zero || (zero = one));
// log('zero', zero);

// log(`one ||= zero`, one ||= zero);
// log('one', one);

// log(`one && (one = zero)`, one && (one = zero));
// log('one', one);

// log(`zero &&= one`, zero &&= one);
// log('zero', zero);

// log(`one ?? (one = zero)`, one ?? (one = zero));
// log('one', one);

// log(`zero ??= one`, zero ??= one);
// log('zero', zero);

// let nullish;
// log('nullish', nullish);
// log(`nullish ??= one`, nullish ??= one);
// log('nullish', nullish);

console.groupEnd();
