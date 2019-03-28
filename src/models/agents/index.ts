import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PropertiesModel } from "../properties";
import { OfficesModel } from "../offices";

@Table({
    tableName: 'agents',
    timestamps: false
})
export class AgentsModel extends Model<AgentsModel> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    @HasMany(() => PropertiesModel)
    id: number

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @AllowNull(false)
    @Column(DataType.STRING)
    email: string

    @AllowNull(false)
    @Column(DataType.STRING)
    tel: string

    @AllowNull(false)
    @Column(DataType.BIGINT.UNSIGNED)
    @BelongsTo(() => OfficesModel)
    officeId: number
}