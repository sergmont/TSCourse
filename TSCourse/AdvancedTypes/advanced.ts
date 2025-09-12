// Adding the [-AnyName-: -AnyType-] as part of a custom object type, is called index types. Creates a placeholder that allows any property with
// any name, and any amount of properties. The type (-AnyType-) inside the brackets, are for the porperty name, not the elements type.
type DataStore = {
  [prop: string]: boolean | number;
};
// --> this Type will allow n number of elements, as long as they are boolean or number
let store: DataStore = {
  /* .... */
};

store.id = 5;
store.isOpen = false;
