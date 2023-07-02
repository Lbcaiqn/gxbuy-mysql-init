import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

enum GoodsImgType {
  BANNER = "banner",
  DETAIL = "detail",
}

@Entity()
export class GoodsImg {
  @PrimaryGeneratedColumn({ type: "bigint", unsigned: true })
  _id: string;

  @Column({ type: "json", nullable: false })
  goods_img_list: Array<{ description: string; url: string }>;

  @Column({
    type: "enum",
    enum: GoodsImgType,
    nullable: false,
  })
  goods_img_type: GoodsImgType;

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
  goods_spu_id: string;

  @Index()
  @Column({ type: "bigint", unsigned: true })
  shop_id: string;
}
