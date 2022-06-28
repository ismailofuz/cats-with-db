import {
    Model,
    Table,
    PrimaryKey,
    AutoIncrement,
    Column
} from 'sequelize-typescript'

@Table
export class Cat extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    catId: number;

    @Column
    name: string;

    @Column
    breed: string;
}