import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { AgentsModel } from "../agents";

@Table({
    tableName: 'offices',
    timestamps: false
})
export class OfficesModel extends Model<OfficesModel> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    id: number;

    @HasMany(() => AgentsModel, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        hooks: true
    })
    agents: AgentsModel;

    @AllowNull(false)
    @Column(DataType.STRING)
    title: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    website: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    address: string;
}