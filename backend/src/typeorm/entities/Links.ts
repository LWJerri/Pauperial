import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Links {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false, default: 0 })
  views: number;

  @Column({ nullable: true })
  secret?: string;

  @Column({ nullable: true })
  createdAt: string;
}
