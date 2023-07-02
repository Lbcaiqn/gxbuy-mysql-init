import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn({ type: "bigint", unsigned: true })
  _id: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  phone: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  area: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  detail: string;

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

  @Index()
  @Column({ type: "bigint", unsigned: true })
  user_id: string;
}
