import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

interface AuthorityInterface {
  name: string;
  title: string;
  button: Array<{ name: string; value: string }> | null;
  children: Array<AuthorityInterface> | null;
}

@Entity()
@Index("idx_unique_role_name_by_shop", ["shop_manager_role_name", "shop_id"], {
  unique: true,
})
export class ShopManagerRole {
  @PrimaryGeneratedColumn({ type: "bigint", unsigned: true })
  _id: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  shop_manager_role_name: string;

  @Column({ type: "varchar", length: 20, nullable: true, default: null })
  shop_manager_role_authority: Array<AuthorityInterface>;

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
  shop_id: string;
}
