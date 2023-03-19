import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('Media')
export class Media {
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column({ default: false })
    status: boolean;

    @Column({ type: 'timestamptz' }) 
    createdAt: Date;
    
    @Column({ type: 'timestamptz' })
    updatedAt: Date;

    @Column({ type: 'timestamptz' })
    deletedAt: Date;
}