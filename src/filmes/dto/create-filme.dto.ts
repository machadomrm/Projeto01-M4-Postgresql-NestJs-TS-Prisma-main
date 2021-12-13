/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;
  
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  datlanca: string;

  @IsNotEmpty()
  @IsString()
  tempdura: string;

  @IsNotEmpty()
  @IsInt()
  generoid: number;

  @IsNotEmpty()
  @IsInt()
  participanteid: number;

}
