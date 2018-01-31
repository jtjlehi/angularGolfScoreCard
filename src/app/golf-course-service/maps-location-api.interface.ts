export interface GoogleMapsLocationObj {
    results: Array<{
        address_component: Object[];
        formatted_address: string;
        geometry: {
            bounds: Object;
            location: {
                lat: number;
                lng: number;
            }
            location_type: string;
            veiwport: Object;
            place_id: string;
        };
        place_id: string;
        postal_localities: string[];
        types: string[];
    }>;
    status: string;
}
