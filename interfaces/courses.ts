export interface ICourses {
    id: number;
    created_at: Date;
    updated_at: Date;
    title: string;
    summary: null | string;
    image_path: null;
    video_path: null;
    duration: null | string;
    author_id: number | null;
    author: Author | null;
    authors: Author[];
    status: string;
    subtitle: null | string;
    language: string;
    description: null | string;
    categories: Category[];
    tags: any[];
    level: null;
    poster_path: null;
    active_from: null;
    active_to: null;
    hours_to_complete: null;
    findable: boolean;
    scorm_sco_id: number | null;
    target_group: null | string;
    users_count: number;
    image_url: null;
    video_url: null;
    poster_url: null;
    teaser_url: null;
    public: boolean;
    credits: number;
    authors_details: any[];
    course_requirements: any[];
    product: null;
    related_product: null;
}

export interface Author {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    path_avatar: null;
    url_avatar: null;
    interests: any[];
    categories: any[];
}





export interface Category {
    id: number;
    name: string;
    slug: string;
    is_active: boolean;
    parent_id: null;
    icon: null;
    icon_class: null;
    created_at: Date;
    updated_at: Date;
    pivot: Pivot;
}

export interface Pivot {
    course_id: number;
    category_id: number;
}
