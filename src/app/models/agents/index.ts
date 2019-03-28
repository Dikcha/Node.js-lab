import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";


@Table({
    tableName: 'agents',
    timestamps: false
})
export class AgentsModel extends Model<AgentsModel> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    tel: string;

    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    officeId: number;
}