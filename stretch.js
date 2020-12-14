// 1.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// createBase is a curried sum function.
const createBase = (base) => {
    // we return a function expects an input 'a', and return the sum of base and this input
    return ((a) => base+a);
}

var addSeven = createBase(7) // this create a function called addSeven that expects an input and will return 7 plus this input

console.log(addSeven(5)) //returns 12

// We can also
console.log(createBase(7)(5)) //returns 12





// 2. Functional programming paradigm vs Object-Oriented paradigm (FP vs OO)


// FP
// Pure functional programming has no side effect and no mutability. In a sense, if you ensure the logic of your code transforming your input to your desired output and it runs/compiles, not much can go wrong.

// No loops. We write recursions instead of loops in pure functional code. It is more natural to write if what we write is more akin to a pattern that we want to repeat over different scales. While procedural loops are more akin to a set of procedures to repeat. Though you probably always can transmute one style to another, there are certain stuff that are simpler to write in loops and vice versa. 
// The advantage of no loops includes immutability, when you use recursion, usually all the in betweens are ephemeral and lives on the stack, so you only think about input and output, and there wouldn't be any side effect.

// Immutability. You probably don't need to declare any variable in a pure functional style. You would think in terms of inputs and outputs in terms of functions transforming data and linking functions together. Still, no mutable variables means no side effect, and more deterministic behavior.


// OO
// Object-Oriented Programming would emphasize thinking data in terms of objects and the 'has/is' dynamics of inheritances and encapsulation in abstraction.
// Since objects exists in runtime, it is the polar opposite of being immutable, Alhough I belive the original intention of OO from the original OO language Smalltalk was to pass messages between objects rather than let one object directly mutates other objects. So you can certainly follow a safer way to do OO.
// OO comes natural when you have some problems to solve and do not want to waste too much time abstracting. So how the object's fields and methods should be more self-evident, and the overall structure of your program's abstraction just comes more naturally.



// Pros of FP
// - Correctness of program, in other words you are forced to write in a way that you program is less likely to go wrong on the code level. Though it doesn't prevent you making mistakes on the logic level. This delegates down to having no side effect and immutability.
// - More suitable and easier to write in certain cases. Say if you work with a tree data structure, recursion is simply more natural.

// Cons of FP
// - Probably more difficult to add or remove features, and generally more difficult to maintain.
// - Speed in some cases, since recursion in general is not as friendly to the CPU as loops.


// Pros of OO
// - More natural abstractions. So you have a easier time to understand your program's structure, thus easier to maintain in general, and also maybe easier to write to begin with.


// Cons of OO
// - Verbose. Typically you write more stuff to achieve the same stuff a mixed-style program would achieve.
// - Overheads. If you're aiming for the utmost speed and space efficiency, OO might introduces overheads for both since objects persist at runtime.


// In my opinion, you probably don't want to abide yourself unconditionally to a particular programming paradigm when you write. There are good ideas in OO, FP, data driven, or what not, and you probably want to dial your code to a desirable point between speed and maintainability when you program, and use whatever suit the most for the goal from whichever paradigms.




