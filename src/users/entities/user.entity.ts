import { BasicEntity } from "src/shared/base-entity";
import { Column, Entity } from "typeorm";
@Entity()
export class User extends BasicEntity{

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique : true})
    email: string;

    @Column({select : false})
    password: string;
    
}
