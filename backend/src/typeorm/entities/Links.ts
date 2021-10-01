import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Links {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false, default: 0 })
  codeUses: number;

  @Column({ nullable: true })
  secret?: string
}
