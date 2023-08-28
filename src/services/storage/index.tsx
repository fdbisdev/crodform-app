import { AsyncStorageAdapter } from "./adapter/asyncStorage";
import Service from "./service";

const storage = new Service(new AsyncStorageAdapter());

export default storage;