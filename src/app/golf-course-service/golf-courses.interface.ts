import { GolfCourse } from './golf-course.interface';

export interface GolfCourses {
    courses: GolfCourse[];
    linked: {
        courseDistances: CourseDistances[];
    };
    meta: {
        courses: {
            from: string;
            href: string;
            limit: string;
            total: string;
        }
    };
}

interface CourseDistances {
    id: number;
    distance_from_me_kilometers: number;
    distance_from_me_miles: number;
    links: {
        course: number[];
    };
    type: string;
}
