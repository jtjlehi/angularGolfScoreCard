// tslint:disable-next-line:no-empty-interface
export interface GolfCourse {
    addr_1: string;
    city: string;
    country: string;
    description: string;
    extras: any[];
    global_max_rank: number;
    global_rank: number;
    hole_count: number;
    holes: any[];
    // todo make an interface for holes
    href: string;
    id: string;
    inserted: string;
    links: object;
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
    // todo make an interface for tee-types
    tee_types: any[];
    thumbnail: string;
    type: string;
    updated: string;
    website: string;
    zip_code: number;
}
