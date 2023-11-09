/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course-dto';
import { UpdateCourseDTO } from './dto/update-course-dto';

describe('CoursesService unit tests', () => {
  let service: CoursesService;
  let id: string;
  let created_at: Date;
  let expectOutputTags: any;
  let expectOutputCourses: any;
  let mockCourseRepoisitory: any;
  let mockTagRepoisitory: any;

  beforeEach(async () => {
    service = new CoursesService();
    id = randomUUID();
    created_at = new Date();
    expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at,
      },
    ];
    expectOutputCourses = {
      id,
      name: 'test',
      description: 'test description',
      created_at,
      tags: expectOutputTags,
    };
    mockCourseRepoisitory = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
    mockTagRepoisitory = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepoisitory;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepoisitory;

    const createCourseDTO: CreateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDTO);
    expect(mockCourseRepoisitory.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(newCourse);
  });

  it('should list all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepoisitory;

    const courses = await service.findAll();

    expect(mockCourseRepoisitory.find).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(courses);
  });

  it('should get a course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepoisitory;

    const course = await service.findOne(id);

    expect(mockCourseRepoisitory.findOne).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should update a course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepoisitory;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepoisitory;

    const updateCourseDTO: UpdateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDTO);

    expect(mockTagRepoisitory.findOne).toHaveBeenCalled();
    expect(mockCourseRepoisitory.preload).toHaveBeenCalled();
    expect(mockCourseRepoisitory.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should remove a course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepoisitory;

    const course = await service.remove(id);

    expect(mockCourseRepoisitory.findOne).toHaveBeenCalled();
    expect(mockCourseRepoisitory.remove).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });
});
