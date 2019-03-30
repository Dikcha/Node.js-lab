import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
    HasMany,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
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
    id: number;

    @HasMany(() => PropertiesModel)
    properties: PropertiesModel;

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
    @ForeignKey(() => OfficesModel)
    officeId: number;

    @BelongsTo(() => OfficesModel)
    office: OfficesModel;
}