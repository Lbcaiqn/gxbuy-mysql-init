import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity()
export class ShopManagerSystemAuthority {
  @PrimaryGeneratedColumn({ type: "tinyint", unsigned: true })
  _id: number;

  @Column({ type: "varchar", length: 30, nullable: false })
  menuName: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  title: string;

  @Column({ type: "tinyint", unsigned: true, nullable: true })
  parentMenu: number;

  @Column({ type: "json", nullable: true })
  button: Array<{ name: string; value: string }>;

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
