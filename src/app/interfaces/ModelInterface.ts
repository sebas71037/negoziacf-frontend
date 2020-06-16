/**
 * Interface Structure to model class
 * @param _id: Identifier
 * @param updatedAt: Update Date
 * @param createdAt: Create Date
 */
export interface ModelInterface {
    _id?: string | number;
    created?: Date;
    updated?: Date;
}
