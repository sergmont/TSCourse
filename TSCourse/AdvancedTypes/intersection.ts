type FileData = { 
path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
}


type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

/*
 * this can also be done with interface extensions as explained in previous lesson 
 */
