import { Author } from "./courses";

export interface ICourse {
    id: number;
    created_at: Date;
    updated_at: Date;
    title: string;
    summary: null;
    image_path: null;
    video_path: null;
    duration: null;
    author_id: number;
    author: Author;
    authors: Author[];
    status: string;
    subtitle: null;
    language: string;
    description: string;
    categories: any[];
    tags: any[];
    level: null;
    lessons: Lesson[];
    poster_path: null;
    active_from: null;
    active_to: null;
    hours_to_complete: null;
    findable: boolean;
    scorm_sco_id: null;
    target_group: null;
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



export interface Lesson {
    id: number;
    title: string;
    summary: null;
    duration: null;
    active: boolean;
    order: number;
    course_id: number;
    lessons: any[];
    topics: Topic[];
}

export interface Topic {
    id: number;
    title: string;
    lesson_id: number;
    active: boolean;
    preview: boolean;
    topicable_id: number;
    topicable_type: string;
    topicable: Topicable;
    summary: null;
    introduction: null;
    description: null;
    bookmarks: any[];
    resources: any[];
    order: number;
    json: null;
    can_skip: boolean;
}

export interface Topicable {
    id: number;
    value: string;
    progress?: number;
    length?: number;
    url?: string;
}
