import { IsUUID } from 'class-validator';

export class DefaultParamsDto {
  @IsUUID('4')
  id: string;
}