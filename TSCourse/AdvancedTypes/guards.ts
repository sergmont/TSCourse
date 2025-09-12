type FileSource = { type: "file"; path: string };

const fileSource: FileSource = {
  type: "file",
  path: "some/path/",
};

type DBSource = { type: "db"; connectionURL: string };
const dbSource: DBSource = {
  type: "db",
  connectionURL: "some://connection-url",
};

type Source = FileSource | DBSource; // OR logical symbol " | "

function isFile(source: Source) {
  return source.type === "file";
  // -- Using type Predicates. Uses a boolean to verify if the type is of a specific type, or guard, previously defined.
}

function loadData(source: Source) {
  /*
   * evaluation of data if it needs file source or db source. Such evaluation is a GUARD
   */
  if ("path" in source) {
    source.path; //implied that this is a File
    return;
  } // moving past the if, means source is not a FileSource. only other option is DBSource.

  source.connectionURL;
  return;
}

class User {
  constructor(public name: string) {
    // ...
  }
  join() {
    //...
  }
}

class Admin {
  constructor(permissions: string[]) {
    //....
  }
  scan() {
    // ...
  }
}

const user = new User("Bob");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

// USING INSTANCEOF IF A WAY OF DISCRIMINATE TYPE SPECIFICS WHEN TYPES ARE OBJECTS OF DECLARED CLASSES.
function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
  return;
}
