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

export interface TeeBox {
    course_hole_id: number;
    hcp: number;
    id: number;
    location: {
        lat: number;
        lng: number;
    };
    meters: number;
    par: number;
    tee_color_type: string;
    tee_hex_color: string;
    tee_type: string;
    yards: number;
}
