
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "../../locations/entities/location.entity";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;
    @Column('text')
    managerFullName: string;
    @Column('text')
    managerSalary: number;
    @Column('text')
    managerEmail: string;
    @Column('text')
    managerPhoneNumber: string;

    @ManyToOne(() => Location, location => location.locationId)
    location: Location;
}