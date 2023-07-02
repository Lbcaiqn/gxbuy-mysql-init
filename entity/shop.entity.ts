import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn({ type: "bigint", unsigned: true })
  _id: string;

  @Column({ type: "varchar", length: 50, unique: true, nullable: false })
  shop_account: string;

  @Column({ type: "varchar", length: 100, nullable: false, select: false })
  shop_password: string;

  @Column({ type: "varchar", length: 50, unique: true, nullable: false })
  shop_name: string;

  @Column({ type: "varchar", length: 250, nullable: false })
  shop_logo: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  shop_address: string;

  @Column({ type: "double", unsigned: true, nullable: false, default: 0.0 })
  describe_level: number;

  @Column({ type: "double", unsigned: true, nullable: false, default: 0.0 })
  service_level: number;

  @Column({ type: "double", unsigned: true, nullable: false, default: 0.0 })
  logistics_level: number;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  add_time: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  update_time: Date;
}
