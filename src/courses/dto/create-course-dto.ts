import { IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // every array's element must be string
  readonly tags: string[];
}
