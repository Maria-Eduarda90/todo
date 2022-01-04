import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("todo")
class Todo{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Todo }