export default function Note() {
  const testString =
    "In Deep copy, an object is created by copying data of all variables and it also allocates similar memory resources with the same value to the object. In order to perform Deep copy, we need to explicitly define the copy constructor and assign dynamic memory as well if required. Also, it is required to dynamically allocate memory to the variables in the other constructors, as well.";
  return <h1>{testString}</h1>;
}
