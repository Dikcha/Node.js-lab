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
    tableName: 'properties',
    timestamps: false
})
export class PropertiesModel extends Model<PropertiesModel> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    heading: string;

    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    price: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    currency: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    location: string;

    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    agentId: number;
}