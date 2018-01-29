import { TeeBox } from "./tee-box.interface";

export interface Holes {
    course_id: number;
    green_location: {
        lat: number;
        long: number;
    };
    hole_num: number;
    id: number;
    links: Object;
    pin_location: Object;
    tee_boxes: TeeBox[];
}
