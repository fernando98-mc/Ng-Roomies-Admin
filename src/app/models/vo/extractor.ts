import { QueryDocumentSnapshot } from "@angular/fire/firestore";

/**
 * Generic class to extract data from a firebase document.
 * @author Gerardo Aguilar.
 * @version 1.0.0
 */
export class Extractor<T> {
  constructor() {}

  /**
   * Extracts the data from a firebase document and returns an object of the given data type in the class.
   * @param documentRef firebase document
   * @returns an object of the data type specified in the class.
   */
  public extractData(documentRef: QueryDocumentSnapshot<T>): T {
    return {
      ...documentRef.data(),
      id: documentRef.id,
    };
  }
}