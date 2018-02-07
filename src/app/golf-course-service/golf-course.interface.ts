import { Holes } from "./holes.interface";
import { TeeType } from "./tee-types.interface";

export interface GolfCourse {
    addr_1: string;
    city: string;
    country: string;
    description: string;
    extras: any[];
    global_max_rank: number;
    global_rank: number;
    hole_count: number;
    holes: Holes[];
    href: string;
    id: number;
    inserted: string;
    links: Object;
    local_max_rank: number;
    local_rank: number;
    location: {
        lat: number;
        lng: number;
    };
    measurement_type: string;
    media_id: number;
    membership_type: string;
    name: string;
    phone: number;
    practice_area_id: number;
    state_or_province: string;
    status: string;
    tee_types: TeeType[];
    thumbnail: string;
    type: string;
    updated: string;
    website: string;
    zip_code: number;
}
