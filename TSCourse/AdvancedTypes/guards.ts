type FileSource = { path: string };
const fileSource: FileSource = {
  path: "some/path/",
};

type DBSource = { connectionURL: string };
const dbSource: DBSource = {
  connectionURL: "some://connection-url",
};

type Source = FileSource | DBSource;  // OR logical symbol " | "

function loadData(source: Source) {
  /*
   * evaluation of data if it needs file source or db source. Such evaluation is a GUARD
   */
  if ('path' in source) {
    source.path; //implied that this is a File
    return;
  } // moving past the if, means source is not a FileSource. only other option is DBSource.

  source.connectionURL;
  return;
}
