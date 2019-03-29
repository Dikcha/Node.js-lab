import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType, ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import { AgentsModel } from "../agents";
import { BelongsTo } from "sequelize-typescript/lib/annotations/association/BelongsTo";

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
    @ForeignKey(() => AgentsModel)
    agentId: number;

    @BelongsTo(() => AgentsModel)
    agent: AgentsModel
}