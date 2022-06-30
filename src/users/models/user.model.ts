import {
    Model,
    Table,
    PrimaryKey,
    AutoIncrement,
    Column
} from 'sequelize-typescript'

@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    userId: number;
    
    @Column
    fullName: string;

    @Column
    email: string;

    @Column
    password: string;
}