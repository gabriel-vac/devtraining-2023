import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1699473277343 } from 'src/migrations/1699473277343-CreateCoursesTable';
import { CreateTagsTable1699475158881 } from 'src/migrations/1699475158881-CreateTagsTable';
import { CreateCoursesTagsTable1699478648822 } from 'src/migrations/1699478648822-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1699497260705 } from 'src/migrations/1699497260705-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1699497865817 } from 'src/migrations/1699497865817-AddTagsIdToCoursesTagsTable';

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
