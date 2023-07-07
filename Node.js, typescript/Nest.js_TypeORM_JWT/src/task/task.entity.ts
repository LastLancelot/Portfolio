import { ApiProperty } from '@nestjs/swagger';
import { CoreEntity } from 'src/aplication/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task extends CoreEntity {
  @ApiProperty()
  @Column({
    type: 'varchar',
    nullable: false,
    name: 'name',
  })
  public name: string;

  @ApiProperty()
  @Column({
    type: 'varchar',
    nullable: false,
    name: 'description',
  })
  public description: string;

  @ApiProperty()
  @Column({
    type: 'boolean',
    nullable: false,
    name: 'is_complite',
    default: false,
  })
  public isComplite: boolean;
}
