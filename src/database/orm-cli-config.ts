import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1699473277343 } from 'src/migrations/1699473277343-CreateCoursesTable';
import { CreateTagsTable1699475158881 } from 'src/migrations/1699475158881-CreateTagsTable';
import { CreateCoursesTagsTable1699478648822 } from 'src/migrations/1699478648822-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1699497260705 } from 'src/migrations/1699497260705-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1699497865817 } from 'src/migrations/1699497865817-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1699473277343,
    CreateTagsTable1699475158881,
    CreateCoursesTagsTable1699478648822,
    AddCoursesIdToCoursesTagsTable1699497260705,
    AddTagsIdToCoursesTagsTable1699497865817,
  ],
});
