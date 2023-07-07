import { ApiProperty } from '@nestjs/swagger';
import { CoreEntity } from 'src/aplication/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends CoreEntity {
  @ApiProperty()
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  public username: string;

  @ApiProperty()
  @Column({
    type: 'varchar',
    nullable: true,
  })
  public firstname: string;

  @ApiProperty()
  @Column({
    type: 'varchar',
    nullable: true,
  })
  public lastname: string;

  @ApiProperty()
  @Column({
    type: 'varchar',
    nullable: false,
  })
  public password: string;
}
