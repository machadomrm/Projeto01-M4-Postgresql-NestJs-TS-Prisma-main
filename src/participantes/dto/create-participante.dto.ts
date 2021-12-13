/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateParticipanteDto {
    id: number;
    
    @IsNotEmpty()
    @IsString()
    nome: string;
  
    @IsNotEmpty()
    @IsString()
    imagem: string;
  
    @IsNotEmpty()
    @IsString()
    datanasc: string;
  
    @IsNotEmpty()
    @IsString()
    ator: string;
  
}